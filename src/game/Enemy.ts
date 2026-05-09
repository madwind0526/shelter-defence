import {
  AnimationClip,
  AnimationMixer,
  Box3,
  BoxGeometry,
  BufferGeometry,
  Color,
  LinearSRGBColorSpace,
  Group,
  Intersection,
  MeshLambertMaterial,
  Material,
  MathUtils,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  MeshToonMaterial,
  Object3D,
  PerspectiveCamera,
  Raycaster,
  Scene,
  SphereGeometry,
  SRGBColorSpace,
  Texture,
  Vector2,
  Vector3
} from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { clone as cloneSkeleton } from 'three/examples/jsm/utils/SkeletonUtils.js';
import { enemyModelAssets } from './AssetUrls';
import { EnemyDefinition, EnemySnapshot, MonsterType, ZombieMaterialMode } from './types';

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
  visualOverheadHeight?: number;
  modelLabel?: string;
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
  monsterType: MonsterType;
  url: string;
  targetMaxDimension?: number;
  boundsMaxDimensionLimit?: number;
  tintColor?: string;
  visualYawOffset?: number;
  groundOffset?: number;
  visualGroundOffset?: number;
  hitboxHeightMultiplier?: number;
  hitboxWidthMultiplier?: number;
  hitboxDepthMultiplier?: number;
  overheadHeightMultiplier?: number;
  materialRoughness?: number;
  materialMetalness?: number;
  materialEnvMapIntensity?: number;
  materialColorIntensity?: number;
  template: Object3D | null;
  animations: AnimationClip[];
  failed: boolean;
  visualTargetMaxDimension: number;
  debugName: string;
}

interface GltfTextureInfo {
  index: number;
  texCoord?: number;
  extensions?: Record<string, unknown>;
}

interface GltfMaterialDefinition {
  extensions?: {
    KHR_materials_pbrSpecularGlossiness?: {
      diffuseFactor?: [number, number, number, number];
      diffuseTexture?: GltfTextureInfo;
      glossinessFactor?: number;
      specularGlossinessTexture?: GltfTextureInfo;
    };
  };
}

interface GltfParserLike {
  json: {
    materials?: GltfMaterialDefinition[];
  };
  assignTexture: (
    materialParams: Record<string, unknown>,
    mapName: string,
    mapDef: GltfTextureInfo,
    colorSpace?: string
  ) => Promise<unknown>;
}

class GLTFMaterialsPbrSpecularGlossinessExtension {
  readonly name = 'KHR_materials_pbrSpecularGlossiness';

  constructor(private readonly parser: GltfParserLike) {}

  getMaterialType(materialIndex: number): typeof MeshStandardMaterial | null {
    return this.getExtension(materialIndex) ? MeshStandardMaterial : null;
  }

  extendMaterialParams(
    materialIndex: number,
    materialParams: Record<string, unknown>
  ): Promise<unknown> | null {
    const extension = this.getExtension(materialIndex);
    if (!extension) return null;

    const pending: Promise<unknown>[] = [];
    materialParams.color = new Color(1, 1, 1);
    materialParams.opacity = 1;
    materialParams.metalness = 0;
    materialParams.roughness = 1 - (extension.glossinessFactor ?? 0.5);

    if (extension.diffuseFactor) {
      const [red, green, blue, alpha] = extension.diffuseFactor;
      (materialParams.color as Color).setRGB(red, green, blue, LinearSRGBColorSpace);
      materialParams.opacity = alpha;
    }

    if (extension.diffuseTexture) {
      pending.push(
        this.parser.assignTexture(
          materialParams,
          'map',
          extension.diffuseTexture,
          SRGBColorSpace
        )
      );
    }

    return Promise.all(pending);
  }

  private getExtension(materialIndex: number) {
    const materialDef = this.parser.json.materials?.[materialIndex];
    return materialDef?.extensions?.KHR_materials_pbrSpecularGlossiness;
  }
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
  label?: string;
}

export type EnemyDamageResult = 'none' | 'hit' | 'killed';

export interface EnemyRangeDamage {
  enemyId: number;
  point: Vector3;
  result: EnemyDamageResult;
}

export interface EnemyAreaDamage {
  enemyId: number;
  point: Vector3;
  result: EnemyDamageResult;
  amount: number;
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
  private readonly enemyModelVariants: EnemyModelVariant[] = [
    ...enemyModelAssets.zombies.map((asset, index) => ({
      ...asset,
      monsterType: 'zombie' as const,
      template: null,
      animations: [],
      failed: false,
      visualTargetMaxDimension: asset.targetMaxDimension ?? this.zombieModelTargetMaxDimension,
      debugName: `${index + 1}. ${asset.id}`
    })),
    ...enemyModelAssets.mechs.map((asset, index) => ({
      ...asset,
      monsterType: 'mech' as const,
      template: null,
      animations: [],
      failed: false,
      visualTargetMaxDimension: asset.targetMaxDimension ?? 3.5,
      debugName: `M${index + 1}. ${asset.id}`
    }))
  ];
  private zombieMaterialMode: ZombieMaterialMode = 'plain-metal';
  private monsterType: MonsterType = 'dummy';
  private readonly loadingModelTypes = new Set<MonsterType>();
  private readonly raycastHitMeshes: Mesh[] = [];
  private readonly raycastHits: Intersection[] = [];
  private readonly playerFlat = new Vector3();
  private readonly enemyFlat = new Vector3();
  private readonly targetFlat = new Vector3();
  private readonly toTarget = new Vector3();

  constructor(private readonly scene: Scene) {
    this.gltfLoader.register((parser) =>
      new GLTFMaterialsPbrSpecularGlossinessExtension(parser as GltfParserLike)
    );
    this.loadEnemyModels(this.monsterType);
  }

  setDebugHitboxesVisible(visible: boolean): void {
    this.hitboxMaterial.opacity = visible ? 0.5 : 0;
  }

  setZombieMaterialMode(mode: ZombieMaterialMode): void {
    this.zombieMaterialMode = mode;
  }

  setMonsterType(type: MonsterType): void {
    this.monsterType = type;
    this.loadEnemyModels(type);
  }

  isMonsterTypeReady(type = this.monsterType): boolean {
    if (type === 'dummy') return true;

    const variants = this.enemyModelVariants.filter(variant => variant.monsterType === type);
    return variants.some(variant => variant.template && !variant.failed) ||
      variants.every(variant => variant.failed);
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
      visualOverheadHeight,
      modelLabel,
      mixer
    } = model;
    mesh.position.copy(position);
    mesh.scale.setScalar(sizeMultiplier);
    this.scene.add(mesh);

    for (const hitMesh of hitMeshes) {
      hitMesh.name = `enemy-hit-${id}`;
      this.bodyToEnemy.set(hitMesh.uuid, id);
      this.raycastHitMeshes.push(hitMesh);
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
      visualOverheadHeight,
      modelLabel,
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
    const playerFlat = this.playerFlat.copy(target.position);
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

      const enemyFlat = this.enemyFlat.copy(enemy.mesh.position);
      enemyFlat.y = 0;
      const targetFlat = this.targetFlat;
      if (barricadeAlive && barricade) {
        targetFlat.set(
          MathUtils.clamp(enemyFlat.x, -barricade.halfWidth, barricade.halfWidth),
          0,
          barricade.z
        );
      } else {
        targetFlat.copy(playerFlat);
      }
      const toTarget = this.toTarget.copy(targetFlat).sub(enemyFlat);
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
    this.raycastHits.length = 0;
    raycaster.intersectObjects(this.raycastHitMeshes, false, this.raycastHits);
    const first = this.raycastHits.find((hit) => {
      const enemyId = this.bodyToEnemy.get(hit.object.uuid);
      const enemy = enemyId ? this.enemies.get(enemyId) : undefined;
      return Boolean(enemy && enemy.state !== 'dead');
    });

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

  damageAround(
    center: Vector3,
    radius: number,
    maxDamage: number,
    minDamageRatio = 0.35,
    maxTargets = Number.POSITIVE_INFINITY
  ): EnemyAreaDamage[] {
    const hits = [...this.enemies.values()]
      .filter((enemy) => enemy.state !== 'dead')
      .map((enemy) => {
        const flatCenter = new Vector3(center.x, 0, center.z);
        const flatEnemy = new Vector3(enemy.mesh.position.x, 0, enemy.mesh.position.z);
        return {
          enemy,
          distance: flatEnemy.distanceTo(flatCenter)
        };
      })
      .filter(({ distance }) => distance <= radius)
      .sort((a, b) => a.distance - b.distance)
      .slice(0, maxTargets);

    const results: EnemyAreaDamage[] = [];
    for (const { enemy, distance } of hits) {
      const falloff = 1 - MathUtils.clamp(distance / radius, 0, 1);
      const damageRatio = minDamageRatio + (1 - minDamageRatio) * falloff;
      const amount = maxDamage * damageRatio;
      const result = this.damage(enemy.id, amount, false);
      if (result === 'none') continue;

      const point = enemy.mesh.position.clone();
      point.y += this.getEnemyOverheadWorldHeight(enemy);
      results.push({
        enemyId: enemy.id,
        point,
        result,
        amount
      });
    }

    return results;
  }

  getAimImpactPoint(raycaster: Raycaster, fallbackDistance = 34): Vector3 {
    const hit = this.raycast(raycaster);
    if (hit) return hit.point.clone();

    return raycaster.ray.origin
      .clone()
      .add(raycaster.ray.direction.clone().multiplyScalar(fallbackDistance));
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
      point.y += this.getEnemyOverheadWorldHeight(enemy);
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
      this.disposeEnemyMaterials(enemy);
    }
    this.enemies.clear();
    this.raycastHitMeshes.length = 0;
    this.killed = 0;
  }

  getSnapshot(): EnemySnapshot {
    return {
      remaining: this.getCount(),
      killed: this.killed
    };
  }

  getHealthBars(camera: PerspectiveCamera, showLabels = false): EnemyHealthBar[] {
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
        ),
        label: showLabels ? enemy.modelLabel : undefined
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
    point.y += this.getEnemyOverheadWorldHeight(enemy);
    const projected = point.project(camera);

    if (projected.z < -1 || projected.z > 1) return null;

    const x = (projected.x * 0.5 + 0.5) * 100;
    const y = (-projected.y * 0.5 + 0.5) * 100;
    if (x < -4 || x > 104 || y < -4 || y > 104) return null;

    return { x, y };
  }

  getNearestTargetAim(
    camera: PerspectiveCamera,
    currentAim: Vector2
  ): Vector2 | null {
    let bestAim: Vector2 | null = null;
    let bestScore = Number.POSITIVE_INFINITY;

    for (const enemy of this.enemies.values()) {
      if (enemy.state === 'dead') continue;

      const aim = this.getEnemyTargetAim(camera, enemy);
      if (!aim) continue;

      const distanceToAim = aim.distanceToSquared(currentAim);
      const distanceToPlayer = camera.position.distanceToSquared(enemy.mesh.position);
      const score = distanceToAim + distanceToPlayer * 0.0008;
      if (score < bestScore) {
        bestScore = score;
        bestAim = aim;
      }
    }

    return bestAim;
  }

  private getEnemyTargetAim(camera: PerspectiveCamera, enemy: Enemy): Vector2 | null {
    const overheadHeight = this.getEnemyOverheadWorldHeight(enemy);
    const heightSamples = [0.52, 0.38, 0.68, 0.25, 0.82];
    let nearestOffscreen: Vector2 | null = null;
    let nearestOffscreenScore = Number.POSITIVE_INFINITY;

    for (const heightSample of heightSamples) {
      const point = enemy.mesh.position.clone();
      point.y += overheadHeight * heightSample;
      const projected = point.project(camera);
      if (projected.z < -1 || projected.z > 1) continue;

      const aim = new Vector2(projected.x, projected.y);
      const absX = Math.abs(aim.x);
      const absY = Math.abs(aim.y);
      if (absX <= 1.05 && absY <= 1.05) {
        return aim;
      }

      const offscreenScore = Math.max(0, absX - 1.05) + Math.max(0, absY - 1.05);
      if (offscreenScore < nearestOffscreenScore) {
        nearestOffscreenScore = offscreenScore;
        nearestOffscreen = aim;
      }
    }

    if (!nearestOffscreen || nearestOffscreenScore > 0.28) return null;
    nearestOffscreen.x = MathUtils.clamp(nearestOffscreen.x, -0.96, 0.96);
    nearestOffscreen.y = MathUtils.clamp(nearestOffscreen.y, -0.86, 0.86);
    return nearestOffscreen;
  }

  private getEnemyOverheadWorldHeight(enemy: Enemy): number {
    const localHeight = enemy.visualOverheadHeight ?? 2.85;
    return localHeight * enemy.mesh.scale.y;
  }

  getCount(): number {
    let count = 0;
    for (const enemy of this.enemies.values()) {
      if (enemy.state !== 'dead') count += 1;
    }
    return count;
  }

  private remove(enemyId: number): void {
    const enemy = this.enemies.get(enemyId);
    if (!enemy) return;

    this.scene.remove(enemy.mesh);
    for (const hitMesh of enemy.hitMeshes) {
      this.bodyToEnemy.delete(hitMesh.uuid);
      const index = this.raycastHitMeshes.indexOf(hitMesh);
      if (index >= 0) {
        this.raycastHitMeshes.splice(index, 1);
      }
    }
    this.disposeEnemyMaterials(enemy);
    this.enemies.delete(enemyId);
  }

  private disposeEnemyMaterials(enemy: Enemy): void {
    const disposed = new Set<Material>();
    for (const visualMesh of enemy.visualMeshes) {
      const materials = Array.isArray(visualMesh.material)
        ? visualMesh.material
        : [visualMesh.material];
      for (const material of materials) {
        if (disposed.has(material)) continue;
        material.dispose();
        disposed.add(material);
      }
    }
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

  private loadEnemyModels(type: MonsterType): void {
    if (type === 'dummy') return;
    if (this.loadingModelTypes.has(type)) return;
    this.loadingModelTypes.add(type);

    for (const variant of this.enemyModelVariants) {
      if (variant.monsterType !== type) continue;
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
    visualOverheadHeight?: number;
    modelLabel?: string;
    mixer?: AnimationMixer;
  } {
    const variant = this.pickEnemyModelVariant(modelVariantId, modelVariantIds);
    if (variant) {
      return this.createGltfEnemyModel(variant);
    }

    return this.createFallbackEnemyModel();
  }

  private pickEnemyModelVariant(
    modelVariantId?: string,
    modelVariantIds?: string[]
  ): EnemyModelVariant | null {
    const loadedVariants = this.enemyModelVariants.filter(
      (variant) =>
        variant.monsterType === this.monsterType &&
        variant.template &&
        !variant.failed
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
    visualOverheadHeight: number;
    modelLabel: string;
    mixer?: AnimationMixer;
  } {
    const mesh = new Group();
    const visualRoot = cloneSkeleton(variant.template as Object3D);
    const visual = this.prepareZombieVisual(
      visualRoot,
      variant.visualTargetMaxDimension,
      variant
    );
    const visualMeshes = visual.meshes;
    const visualBaseY = visualRoot.position.y;
    const hitboxGroundOffset = variant.groundOffset ?? this.defaultZombieVisualGroundOffset;
    const visualGroundOffset =
      variant.visualGroundOffset ?? hitboxGroundOffset;
    const baseHitboxHeight = Math.max(0.9, visual.size.y);
    const hitboxHeight = baseHitboxHeight * (variant.hitboxHeightMultiplier ?? 1);
    const hitboxWidth = Math.max(0.42, visual.size.x) * (variant.hitboxWidthMultiplier ?? 1);
    const hitboxDepth = Math.max(0.42, visual.size.z) * (variant.hitboxDepthMultiplier ?? 1);
    const visualOverheadHeight = Math.max(
      1.2,
      hitboxGroundOffset + baseHitboxHeight * (variant.overheadHeightMultiplier ?? 1) + 0.18
    );
    mesh.add(visualRoot);

    const hitbox = this.createPart(
      this.modelHitboxGeometry,
      this.hitboxMaterial,
      0,
      hitboxGroundOffset + hitboxHeight / 2,
      0
    );
    hitbox.scale.set(
      hitboxWidth / 0.95,
      hitboxHeight / 2.25,
      hitboxDepth / 0.75
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
      visualOverheadHeight,
      modelLabel: variant.debugName,
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
    variant: EnemyModelVariant
  ): { meshes: Mesh[]; size: Vector3 } {
    if (variant.visualYawOffset) {
      visualRoot.rotation.y += variant.visualYawOffset;
    }

    const box = this.getVisualBounds(visualRoot, variant);
    const size = box.getSize(new Vector3());
    const center = box.getCenter(new Vector3());
    const maxDimension = Math.max(size.x, size.y, size.z);
    const scale = maxDimension > 0 ? targetMaxDimension / maxDimension : 1;
    const visualSize = size.multiplyScalar(scale);

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
        const cloned = this.createDisplayMaterial(material);
        cloned.transparent = true;
        if (variant.tintColor) {
          this.applyMaterialTint(cloned, variant.tintColor);
        }
        this.applyVariantMaterialTuning(cloned, variant);
        return cloned;
      });
      object.material = Array.isArray(object.material) ? clonedMaterials : clonedMaterials[0];
    });

    return { meshes: visualMeshes, size: visualSize };
  }

  private getVisualBounds(visualRoot: Object3D, variant: EnemyModelVariant): Box3 {
    const fullBox = new Box3().setFromObject(visualRoot);
    const boundsMaxDimensionLimit = variant.boundsMaxDimensionLimit;
    if (typeof boundsMaxDimensionLimit !== 'number') {
      return fullBox;
    }

    const filteredBox = new Box3();
    let accepted = 0;
    visualRoot.updateMatrixWorld(true);
    visualRoot.traverse((object) => {
      if (!(object instanceof Mesh)) return;

      const meshBox = new Box3().setFromObject(object);
      const meshSize = meshBox.getSize(new Vector3());
      const meshMaxDimension = Math.max(meshSize.x, meshSize.y, meshSize.z);
      if (meshMaxDimension > boundsMaxDimensionLimit) return;

      filteredBox.union(meshBox);
      accepted += 1;
    });

    return accepted > 0 ? filteredBox : fullBox;
  }

  private applyVariantMaterialTuning(material: Material, variant: EnemyModelVariant): void {
    const tunable = material as Material & {
      color?: { multiplyScalar: (scale: number) => void };
      envMapIntensity?: number;
      metalness?: number;
      roughness?: number;
    };

    if (typeof variant.materialRoughness === 'number') {
      tunable.roughness = variant.materialRoughness;
    }

    if (typeof variant.materialMetalness === 'number') {
      tunable.metalness = variant.materialMetalness;
    }

    if (typeof variant.materialEnvMapIntensity === 'number') {
      tunable.envMapIntensity = variant.materialEnvMapIntensity;
    }

    if (typeof variant.materialColorIntensity === 'number') {
      tunable.color?.multiplyScalar(variant.materialColorIntensity);
    }
  }

  private createDisplayMaterial(source: Material): Material {
    const sourceMaterial = source as Material & {
      color?: Color;
      emissive?: Color;
      map?: Texture | null;
      metalness?: number;
      opacity?: number;
      roughness?: number;
      transparent?: boolean;
    };
    const color = sourceMaterial.color?.clone() ?? new Color('#ffffff');
    const map = sourceMaterial.map;
    const opacity = sourceMaterial.opacity ?? 1;
    const transparent = Boolean(sourceMaterial.transparent) || opacity < 1;

    if (this.zombieMaterialMode === 'mesh-toon') {
      return new MeshToonMaterial({
        color,
        map,
        opacity,
        transparent
      });
    }

    if (this.zombieMaterialMode === 'mesh-lambert') {
      return new MeshLambertMaterial({
        color,
        map,
        opacity,
        transparent
      });
    }

    const cloned = source.clone() as Material & {
      envMapIntensity?: number;
      metalness?: number;
      roughness?: number;
    };

    if (this.zombieMaterialMode === 'shiny-metal') {
      cloned.metalness = Math.max(cloned.metalness ?? 0, 0.32);
      cloned.roughness = Math.min(cloned.roughness ?? 0.48, 0.42);
      cloned.envMapIntensity = 0.85;
      return cloned;
    }

    cloned.metalness = 0;
    cloned.roughness = Math.max(cloned.roughness ?? 0.86, 0.86);
    cloned.envMapIntensity = 0.12;
    return cloned;
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
