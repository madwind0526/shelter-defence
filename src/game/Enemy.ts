import {
  AnimationClip,
  AnimationMixer,
  Box3,
  BoxGeometry,
  BufferGeometry,
  Group,
  Material,
  MathUtils,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  Object3D,
  PerspectiveCamera,
  Raycaster,
  Scene,
  SphereGeometry,
  Vector3
} from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { clone as cloneSkeleton } from 'three/examples/jsm/utils/SkeletonUtils.js';
import { enemyModelAssets } from './AssetUrls';
import { EnemyDefinition, EnemySnapshot } from './types';

const walkerDefinition: EnemyDefinition = {
  id: 'walker',
  name: 'Walker',
  maxHealth: 100,
  speed: 2.6,
  damage: 10,
  attackRange: 1.55,
  attackCooldown: 0.85,
  score: 10,
  radius: 0.7
};

interface Enemy {
  id: number;
  definition: EnemyDefinition;
  mesh: Group;
  hitMeshes: Mesh[];
  parts?: {
    body: Mesh;
    head: Mesh;
    leftArm: Mesh;
    rightArm: Mesh;
    leftLeg: Mesh;
    rightLeg: Mesh;
  };
  visualMeshes: Mesh[];
  visualRoot?: Object3D;
  visualBaseY?: number;
  visualGroundOffset?: number;
  mixer?: AnimationMixer;
  health: number;
  baseScale: number;
  attackTimer: number;
  age: number;
  hitTimer: number;
  deathTimer: number;
  state: 'chasing' | 'attacking' | 'hit' | 'dead';
}

interface EnemyModelVariant {
  id: string;
  url: string;
  targetMaxDimension?: number;
  tintColor?: string;
  groundOffset?: number;
  template: Object3D | null;
  animations: AnimationClip[];
  failed: boolean;
  visualTargetMaxDimension: number;
}

export interface EnemySpawnOptions {
  baseHealth: number;
  wave: number;
  healthMultiplier?: number;
  damageMultiplier?: number;
  sizeMultiplier?: number;
  modelVariantId?: string;
  modelVariantIds?: string[];
}

export interface EnemyHit {
  enemyId: number;
  point: Vector3;
}

export interface EnemyHealthBar {
  id: number;
  x: number;
  y: number;
  healthPercent: number;
}

export type EnemyDamageResult = 'none' | 'hit' | 'killed';

export interface EnemyRangeDamage {
  enemyId: number;
  point: Vector3;
  result: EnemyDamageResult;
}

export interface EnemyBarricadeTarget {
  health: number;
  z: number;
  halfWidth: number;
  damage: (amount: number) => void;
}

export interface EnemyAttackTarget {
  position: Vector3;
  damage: (amount: number) => void;
}

export class EnemyManager {
  private readonly enemies = new Map<number, Enemy>();
  private readonly bodyToEnemy = new Map<string, number>();
  private nextId = 1;
  private killed = 0;

  private readonly bodyGeometry = new BoxGeometry(0.82, 1.15, 0.46);
  private readonly limbGeometry = new BoxGeometry(0.25, 0.88, 0.25);
  private readonly headGeometry = new SphereGeometry(0.33, 12, 8);
  private readonly modelHitboxGeometry = new BoxGeometry(0.95, 2.25, 0.75);
  private readonly zombieModelTargetMaxDimension = 0.036;
  private readonly defaultZombieVisualGroundOffset = -0.06;
  private readonly gltfLoader = new GLTFLoader();
  private readonly hitboxMaterial = new MeshBasicMaterial({
    transparent: true,
    opacity: 0,
    depthWrite: false
  });
  private readonly zombieModelVariants: EnemyModelVariant[] = enemyModelAssets.zombies.map((asset) => ({
    ...asset,
    template: null,
    animations: [],
    failed: false,
    visualTargetMaxDimension: asset.targetMaxDimension ?? this.zombieModelTargetMaxDimension
  }));

  constructor(private readonly scene: Scene) {
    this.loadZombieModels();
  }

  spawn(position: Vector3, options: EnemySpawnOptions): void {
    const healthMultiplier = options.healthMultiplier ?? 1;
    const damageMultiplier = options.damageMultiplier ?? 1;
    const sizeMultiplier = options.sizeMultiplier ?? 1;
    const definition = {
      ...walkerDefinition,
      maxHealth: options.baseHealth * healthMultiplier,
      speed: walkerDefinition.speed + Math.min(options.wave * 0.04, 0.5),
      damage: walkerDefinition.damage * damageMultiplier,
      radius: walkerDefinition.radius * sizeMultiplier
    };

    const id = this.nextId;
    this.nextId += 1;

    const model = this.createEnemyModel(options.modelVariantId, options.modelVariantIds);
    const {
      mesh,
      hitMeshes,
      parts,
      visualMeshes,
      visualRoot,
      visualBaseY,
      visualGroundOffset,
      mixer
    } = model;
    mesh.position.copy(position);
    mesh.scale.setScalar(sizeMultiplier);
    this.scene.add(mesh);

    for (const hitMesh of hitMeshes) {
      hitMesh.name = `enemy-hit-${id}`;
      this.bodyToEnemy.set(hitMesh.uuid, id);
    }

    this.enemies.set(id, {
      id,
      definition,
      mesh,
      hitMeshes,
      parts,
      visualMeshes,
      visualRoot,
      visualBaseY,
      visualGroundOffset,
      mixer,
      health: definition.maxHealth,
      baseScale: sizeMultiplier,
      attackTimer: Math.random() * 0.4,
      age: Math.random() * 10,
      hitTimer: 0,
      deathTimer: 0,
      state: 'chasing'
    });
  }

  update(delta: number, target: EnemyAttackTarget, barricade?: EnemyBarricadeTarget): void {
    const playerFlat = target.position.clone();
    playerFlat.y = 0;
    const barricadeAlive = Boolean(barricade && barricade.health > 0);

    for (const enemy of this.enemies.values()) {
      enemy.age += delta;
      enemy.mixer?.update(delta);

      if (enemy.state === 'dead') {
        this.updateDeath(delta, enemy);
        continue;
      }

      if (enemy.hitTimer > 0) {
        enemy.hitTimer -= delta;
        this.applyHitFlash(enemy, true);
      } else {
        this.applyHitFlash(enemy, false);
      }

      const enemyFlat = enemy.mesh.position.clone();
      enemyFlat.y = 0;
      const targetFlat = barricadeAlive && barricade
        ? new Vector3(
            MathUtils.clamp(enemyFlat.x, -barricade.halfWidth, barricade.halfWidth),
            0,
            barricade.z
          )
        : playerFlat;
      const toTarget = targetFlat.clone().sub(enemyFlat);
      const distance = toTarget.length();

      if (distance > enemy.definition.attackRange) {
        enemy.state = enemy.hitTimer > 0 ? 'hit' : 'chasing';
        toTarget.normalize();
        const speed = enemy.hitTimer > 0 ? enemy.definition.speed * 0.25 : enemy.definition.speed;
        enemy.mesh.position.add(toTarget.multiplyScalar(speed * delta));
        if (barricadeAlive && barricade) {
          enemy.mesh.position.z = Math.min(enemy.mesh.position.z, barricade.z - 0.25);
        }
        enemy.mesh.position.x = MathUtils.clamp(enemy.mesh.position.x, -10, 10);
        enemy.mesh.lookAt(targetFlat.x, enemy.mesh.position.y, targetFlat.z);
        this.animateWalk(enemy);
      } else {
        enemy.state = 'attacking';
        enemy.attackTimer -= delta;
        this.animateAttack(enemy);
        if (enemy.attackTimer <= 0) {
          if (barricadeAlive && barricade) {
            barricade.damage(enemy.definition.damage);
          } else {
            target.damage(enemy.definition.damage);
          }
          enemy.attackTimer = enemy.definition.attackCooldown;
        }
      }
    }
  }

  raycast(raycaster: Raycaster): EnemyHit | null {
    const bodies = [...this.enemies.values()]
      .filter((enemy) => enemy.state !== 'dead')
      .flatMap((enemy) => enemy.hitMeshes);
    const hits = raycaster.intersectObjects(bodies, false);
    const first = hits[0];

    if (!first) return null;

    const enemyId = this.bodyToEnemy.get(first.object.uuid);
    if (!enemyId) return null;

    return {
      enemyId,
      point: first.point.clone()
    };
  }

  damage(enemyId: number, amount: number, knockback = true): EnemyDamageResult {
    const enemy = this.enemies.get(enemyId);
    if (!enemy || enemy.state === 'dead') return 'none';

    enemy.health -= amount;
    enemy.hitTimer = 0.12;
    if (knockback) {
      enemy.mesh.position.z -= 0.16;
    }
    const scale = enemy.baseScale * (0.88 + 0.12 * Math.max(0, enemy.health / enemy.definition.maxHealth));
    enemy.mesh.scale.setScalar(scale);

    if (enemy.health <= 0) {
      enemy.state = 'dead';
      enemy.deathTimer = 1.65;
      enemy.mesh.rotation.z = MathUtils.randFloatSpread(0.35);
      this.killed += 1;
      return 'killed';
    }

    return 'hit';
  }

  damageAll(amount: number, maxTargets = Number.POSITIVE_INFINITY): number {
    let damaged = 0;
    for (const enemy of this.enemies.values()) {
      if (enemy.state === 'dead') continue;
      this.damage(enemy.id, amount, false);
      damaged += 1;
      if (damaged >= maxTargets) break;
    }
    return damaged;
  }

  hasEnemyInRange(minZ: number): boolean {
    for (const enemy of this.enemies.values()) {
      if (enemy.state === 'dead') continue;
      if (enemy.mesh.position.z >= minZ) return true;
    }
    return false;
  }

  damageInRange(amount: number, minZ: number, maxTargets = Number.POSITIVE_INFINITY): number {
    let damaged = 0;
    for (const enemy of this.enemies.values()) {
      if (enemy.state === 'dead') continue;
      if (enemy.mesh.position.z < minZ) continue;
      this.damage(enemy.id, amount, false);
      damaged += 1;
      if (damaged >= maxTargets) break;
    }
    return damaged;
  }

  damageFirstInRange(amount: number, minZ: number): EnemyRangeDamage | null {
    for (const enemy of this.enemies.values()) {
      if (enemy.state === 'dead') continue;
      if (enemy.mesh.position.z < minZ) continue;

      const point = enemy.mesh.position.clone();
      point.y += enemy.baseScale * 2.35;
      const result = this.damage(enemy.id, amount, false);
      if (result === 'none') return null;

      return {
        enemyId: enemy.id,
        point,
        result
      };
    }

    return null;
  }

  clear(): void {
    for (const enemy of this.enemies.values()) {
      this.scene.remove(enemy.mesh);
      for (const hitMesh of enemy.hitMeshes) {
        this.bodyToEnemy.delete(hitMesh.uuid);
      }
    }
    this.enemies.clear();
    this.killed = 0;
  }

  getSnapshot(): EnemySnapshot {
    return {
      remaining: this.getCount(),
      killed: this.killed
    };
  }

  getHealthBars(camera: PerspectiveCamera): EnemyHealthBar[] {
    const bars: EnemyHealthBar[] = [];

    for (const enemy of this.enemies.values()) {
      if (enemy.state === 'dead') continue;

      const position = this.getOverheadScreenPosition(enemy.id, camera);
      if (!position) continue;

      bars.push({
        id: enemy.id,
        x: position.x,
        y: position.y,
        healthPercent: Math.min(
          100,
          Math.max(0, (enemy.health / enemy.definition.maxHealth) * 100)
        )
      });
    }

    return bars;
  }

  getOverheadScreenPosition(
    enemyId: number,
    camera: PerspectiveCamera
  ): { x: number; y: number } | null {
    const enemy = this.enemies.get(enemyId);
    if (!enemy) return null;

    const point = enemy.mesh.position.clone();
    point.y += enemy.baseScale * 2.85;
    const projected = point.project(camera);

    if (projected.z < -1 || projected.z > 1) return null;

    const x = (projected.x * 0.5 + 0.5) * 100;
    const y = (-projected.y * 0.5 + 0.5) * 100;
    if (x < -4 || x > 104 || y < -4 || y > 104) return null;

    return { x, y };
  }

  getCount(): number {
    return [...this.enemies.values()].filter((enemy) => enemy.state !== 'dead')
      .length;
  }

  private remove(enemyId: number): void {
    const enemy = this.enemies.get(enemyId);
    if (!enemy) return;

    this.scene.remove(enemy.mesh);
    for (const hitMesh of enemy.hitMeshes) {
      this.bodyToEnemy.delete(hitMesh.uuid);
    }
    this.enemies.delete(enemyId);
  }

  private createMaterial(color: string): MeshStandardMaterial {
    return new MeshStandardMaterial({
      color,
      roughness: 0.74,
      metalness: 0.02,
      transparent: true
    });
  }

  private createPart(
    geometry: BufferGeometry,
    material: Material,
    x: number,
    y: number,
    z: number
  ): Mesh {
    const mesh = new Mesh(geometry, material);
    mesh.position.set(x, y, z);
    return mesh;
  }

  private loadZombieModels(): void {
    for (const variant of this.zombieModelVariants) {
      this.gltfLoader.load(
        variant.url,
        (gltf) => {
          variant.template = gltf.scene;
          variant.animations = gltf.animations;
        },
        undefined,
        () => {
          variant.failed = true;
        }
      );
    }
  }

  private createEnemyModel(modelVariantId?: string, modelVariantIds?: string[]): {
    mesh: Group;
    hitMeshes: Mesh[];
    parts?: Enemy['parts'];
    visualMeshes: Mesh[];
    visualRoot?: Object3D;
    visualBaseY?: number;
    visualGroundOffset?: number;
    mixer?: AnimationMixer;
  } {
    const variant = this.pickZombieModelVariant(modelVariantId, modelVariantIds);
    if (variant) {
      return this.createGltfEnemyModel(variant);
    }

    return this.createFallbackEnemyModel();
  }

  private pickZombieModelVariant(
    modelVariantId?: string,
    modelVariantIds?: string[]
  ): EnemyModelVariant | null {
    const loadedVariants = this.zombieModelVariants.filter(
      (variant) => variant.template && !variant.failed
    );
    if (loadedVariants.length === 0) return null;

    if (modelVariantId) {
      return loadedVariants.find((variant) => variant.id === modelVariantId) ?? null;
    }

    const allowedVariants =
      modelVariantIds && modelVariantIds.length > 0
        ? loadedVariants.filter((variant) => modelVariantIds.includes(variant.id))
        : loadedVariants;
    if (allowedVariants.length === 0) return null;

    return allowedVariants[Math.floor(Math.random() * allowedVariants.length)];
  }

  private createGltfEnemyModel(variant: EnemyModelVariant): {
    mesh: Group;
    hitMeshes: Mesh[];
    visualMeshes: Mesh[];
    visualRoot: Object3D;
    visualBaseY: number;
    visualGroundOffset: number;
    mixer?: AnimationMixer;
  } {
    const mesh = new Group();
    const visualRoot = cloneSkeleton(variant.template as Object3D);
    const visualMeshes = this.prepareZombieVisual(
      visualRoot,
      variant.visualTargetMaxDimension,
      variant.tintColor
    );
    const visualBaseY = visualRoot.position.y;
    const visualGroundOffset = variant.groundOffset ?? this.defaultZombieVisualGroundOffset;
    mesh.add(visualRoot);

    const hitbox = this.createPart(
      this.modelHitboxGeometry,
      this.hitboxMaterial,
      0,
      1.12,
      0
    );
    mesh.add(hitbox);

    let mixer: AnimationMixer | undefined;
    if (variant.animations.length > 0) {
      mixer = new AnimationMixer(visualRoot);
      mixer.clipAction(variant.animations[0]).play();
    }

    return {
      mesh,
      hitMeshes: [hitbox],
      visualMeshes,
      visualRoot,
      visualBaseY,
      visualGroundOffset,
      mixer
    };
  }

  private createFallbackEnemyModel(): {
    mesh: Group;
    hitMeshes: Mesh[];
    parts: NonNullable<Enemy['parts']>;
    visualMeshes: Mesh[];
  } {
    const mesh = new Group();
    const bodyMaterial = this.createMaterial('#526b47');
    const skinMaterial = this.createMaterial('#95b66e');
    const limbMaterial = this.createMaterial('#40533c');

    const body = this.createPart(this.bodyGeometry, bodyMaterial, 0, 1.12, 0);
    const head = this.createPart(this.headGeometry, skinMaterial, 0, 1.88, 0.02);
    const leftArm = this.createPart(this.limbGeometry, limbMaterial, -0.62, 1.16, 0.06);
    const rightArm = this.createPart(this.limbGeometry, limbMaterial, 0.62, 1.16, 0.06);
    const leftLeg = this.createPart(this.limbGeometry, limbMaterial.clone(), -0.24, 0.42, 0);
    const rightLeg = this.createPart(this.limbGeometry, limbMaterial.clone(), 0.24, 0.42, 0);

    leftArm.rotation.z = 0.18;
    rightArm.rotation.z = -0.18;
    mesh.add(body, head, leftArm, rightArm, leftLeg, rightLeg);

    const hitMeshes = [body, head, leftArm, rightArm, leftLeg, rightLeg];
    return {
      mesh,
      hitMeshes,
      visualMeshes: hitMeshes,
      parts: {
        body,
        head,
        leftArm,
        rightArm,
        leftLeg,
        rightLeg
      }
    };
  }

  private prepareZombieVisual(
    visualRoot: Object3D,
    targetMaxDimension: number,
    tintColor?: string
  ): Mesh[] {
    const box = new Box3().setFromObject(visualRoot);
    const size = box.getSize(new Vector3());
    const center = box.getCenter(new Vector3());
    const maxDimension = Math.max(size.x, size.y, size.z);
    const scale = maxDimension > 0 ? targetMaxDimension / maxDimension : 1;

    visualRoot.scale.multiplyScalar(scale);
    visualRoot.position.set(-center.x * scale, -box.min.y * scale, -center.z * scale);

    const visualMeshes: Mesh[] = [];
    visualRoot.traverse((object) => {
      if (!(object instanceof Mesh)) return;

      object.castShadow = false;
      object.receiveShadow = false;
      object.frustumCulled = false;
      visualMeshes.push(object);

      const materials = Array.isArray(object.material) ? object.material : [object.material];
      const clonedMaterials = materials.map((material) => {
        const cloned = material.clone();
        cloned.transparent = true;
        if (tintColor) {
          this.applyMaterialTint(cloned, tintColor);
        }
        return cloned;
      });
      object.material = Array.isArray(object.material) ? clonedMaterials : clonedMaterials[0];
    });

    return visualMeshes;
  }

  private applyMaterialTint(material: Material, tintColor: string): void {
    const tintable = material as Material & {
      color?: {
        set: (color: string) => void;
      };
    };
    tintable.color?.set(tintColor);
  }

  private animateWalk(enemy: Enemy): void {
    const stride = Math.sin(enemy.age * 8.5) * 0.55;
    const bob = Math.abs(Math.sin(enemy.age * 8.5)) * 0.08;

    if (!enemy.parts) {
      if (enemy.visualRoot) {
        const baseY = enemy.visualBaseY ?? 0;
        const groundOffset = enemy.visualGroundOffset ?? this.defaultZombieVisualGroundOffset;
        const visualBob = Math.abs(Math.sin(enemy.age * 8.5)) * 0.035;
        enemy.visualRoot.position.y = baseY + groundOffset + visualBob;
        enemy.visualRoot.position.z = MathUtils.lerp(enemy.visualRoot.position.z, 0, 0.18);
        enemy.visualRoot.rotation.x = Math.sin(enemy.age * 7.5) * 0.035;
      }
      return;
    }

    enemy.parts.body.position.y = 1.12 + bob;
    enemy.parts.body.position.z = 0;
    enemy.parts.head.position.y = 1.88 + bob;
    enemy.parts.head.position.z = 0.02;
    enemy.parts.leftArm.rotation.x = stride;
    enemy.parts.rightArm.rotation.x = -stride;
    enemy.parts.leftLeg.rotation.x = -stride * 0.7;
    enemy.parts.rightLeg.rotation.x = stride * 0.7;
  }

  private animateAttack(enemy: Enemy): void {
    const lunge = Math.sin(enemy.age * 14) * 0.22;

    if (!enemy.parts) {
      if (enemy.visualRoot) {
        enemy.visualRoot.position.z = -0.12 - Math.abs(lunge) * 0.28;
        enemy.visualRoot.rotation.x = -0.18 - Math.abs(lunge) * 0.18;
      }
      return;
    }

    enemy.parts.body.position.z = -0.08;
    enemy.parts.head.position.z = -0.08;
    enemy.parts.leftArm.rotation.x = -1.15 + lunge;
    enemy.parts.rightArm.rotation.x = -1.15 - lunge;
  }

  private updateDeath(delta: number, enemy: Enemy): void {
    enemy.deathTimer -= delta;
    const progress = 1 - Math.max(0, enemy.deathTimer / 1.65);
    enemy.mesh.rotation.x = MathUtils.lerp(enemy.mesh.rotation.x, -1.35, 0.12);
    enemy.mesh.position.y = MathUtils.lerp(enemy.mesh.position.y, -0.42, 0.08);

    for (const visualMesh of enemy.visualMeshes) {
      this.forEachMaterial(visualMesh, (material) => {
        material.opacity = Math.max(0, 1 - progress * 1.25);
        if (material instanceof MeshStandardMaterial) {
          material.emissive.set('#000000');
        }
      });
    }

    if (enemy.deathTimer <= 0) {
      this.remove(enemy.id);
    }
  }

  private applyHitFlash(enemy: Enemy, active: boolean): void {
    for (const visualMesh of enemy.visualMeshes) {
      this.forEachMaterial(visualMesh, (material) => {
        if (material instanceof MeshStandardMaterial) {
          material.emissive.set(active ? '#7a1313' : '#000000');
        }
      });
    }
  }

  private forEachMaterial(mesh: Mesh, callback: (material: Material) => void): void {
    const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
    for (const material of materials) {
      callback(material);
    }
  }
}
