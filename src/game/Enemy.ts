import {
  BoxGeometry,
  BufferGeometry,
  Group,
  MathUtils,
  Mesh,
  MeshStandardMaterial,
  Raycaster,
  Scene,
  SphereGeometry,
  Vector3
} from 'three';
import { Player } from './Player';
import { EnemyDefinition, EnemySnapshot } from './types';

const walkerDefinition: EnemyDefinition = {
  id: 'walker',
  name: 'Walker',
  maxHealth: 65,
  speed: 2.6,
  damage: 9,
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
  parts: {
    body: Mesh;
    head: Mesh;
    leftArm: Mesh;
    rightArm: Mesh;
    leftLeg: Mesh;
    rightLeg: Mesh;
  };
  health: number;
  attackTimer: number;
  age: number;
  hitTimer: number;
  deathTimer: number;
  state: 'chasing' | 'attacking' | 'hit' | 'dead';
}

export interface EnemyHit {
  enemyId: number;
  point: Vector3;
}

export type EnemyDamageResult = 'none' | 'hit' | 'killed';

export class EnemyManager {
  private readonly enemies = new Map<number, Enemy>();
  private readonly bodyToEnemy = new Map<string, number>();
  private nextId = 1;
  private killed = 0;

  private readonly bodyGeometry = new BoxGeometry(0.82, 1.15, 0.46);
  private readonly limbGeometry = new BoxGeometry(0.25, 0.88, 0.25);
  private readonly headGeometry = new SphereGeometry(0.33, 12, 8);

  constructor(private readonly scene: Scene) {}

  spawn(position: Vector3, level: number): void {
    const definition = {
      ...walkerDefinition,
      maxHealth: walkerDefinition.maxHealth + level * 8,
      speed: walkerDefinition.speed + Math.min(level * 0.08, 0.9),
      damage: walkerDefinition.damage + Math.floor(level / 2)
    };

    const id = this.nextId;
    this.nextId += 1;

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
    mesh.position.copy(position);
    this.scene.add(mesh);

    const hitMeshes = [body, head, leftArm, rightArm, leftLeg, rightLeg];
    for (const hitMesh of hitMeshes) {
      hitMesh.name = `enemy-hit-${id}`;
      this.bodyToEnemy.set(hitMesh.uuid, id);
    }

    this.enemies.set(id, {
      id,
      definition,
      mesh,
      hitMeshes,
      parts: {
        body,
        head,
        leftArm,
        rightArm,
        leftLeg,
        rightLeg
      },
      health: definition.maxHealth,
      attackTimer: Math.random() * 0.4,
      age: Math.random() * 10,
      hitTimer: 0,
      deathTimer: 0,
      state: 'chasing'
    });
  }

  update(delta: number, player: Player): void {
    const playerFlat = player.position.clone();
    playerFlat.y = 0;

    for (const enemy of this.enemies.values()) {
      enemy.age += delta;

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
      const toPlayer = playerFlat.clone().sub(enemyFlat);
      const distance = toPlayer.length();

      if (distance > enemy.definition.attackRange) {
        enemy.state = enemy.hitTimer > 0 ? 'hit' : 'chasing';
        toPlayer.normalize();
        const speed = enemy.hitTimer > 0 ? enemy.definition.speed * 0.25 : enemy.definition.speed;
        enemy.mesh.position.add(toPlayer.multiplyScalar(speed * delta));
        enemy.mesh.lookAt(player.position.x, enemy.mesh.position.y, player.position.z);
        this.animateWalk(enemy);
      } else {
        enemy.state = 'attacking';
        enemy.attackTimer -= delta;
        this.animateAttack(enemy);
        if (enemy.attackTimer <= 0) {
          player.damage(enemy.definition.damage);
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

  damage(enemyId: number, amount: number): EnemyDamageResult {
    const enemy = this.enemies.get(enemyId);
    if (!enemy || enemy.state === 'dead') return 'none';

    enemy.health -= amount;
    enemy.hitTimer = 0.12;
    enemy.mesh.position.z -= 0.16;
    const scale = 0.88 + 0.12 * Math.max(0, enemy.health / enemy.definition.maxHealth);
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
    material: MeshStandardMaterial,
    x: number,
    y: number,
    z: number
  ): Mesh {
    const mesh = new Mesh(geometry, material);
    mesh.position.set(x, y, z);
    return mesh;
  }

  private animateWalk(enemy: Enemy): void {
    const stride = Math.sin(enemy.age * 8.5) * 0.55;
    const bob = Math.abs(Math.sin(enemy.age * 8.5)) * 0.08;

    enemy.parts.body.position.y = 1.12 + bob;
    enemy.parts.head.position.y = 1.88 + bob;
    enemy.parts.leftArm.rotation.x = stride;
    enemy.parts.rightArm.rotation.x = -stride;
    enemy.parts.leftLeg.rotation.x = -stride * 0.7;
    enemy.parts.rightLeg.rotation.x = stride * 0.7;
  }

  private animateAttack(enemy: Enemy): void {
    const lunge = Math.sin(enemy.age * 14) * 0.22;
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

    for (const hitMesh of enemy.hitMeshes) {
      const material = hitMesh.material as MeshStandardMaterial;
      material.opacity = Math.max(0, 1 - progress * 1.25);
      material.emissive.set('#000000');
    }

    if (enemy.deathTimer <= 0) {
      this.remove(enemy.id);
    }
  }

  private applyHitFlash(enemy: Enemy, active: boolean): void {
    for (const hitMesh of enemy.hitMeshes) {
      const material = hitMesh.material as MeshStandardMaterial;
      material.emissive.set(active ? '#7a1313' : '#000000');
    }
  }
}
