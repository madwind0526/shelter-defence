import {
  AdditiveBlending,
  BufferGeometry,
  Color,
  Line,
  LineBasicMaterial,
  PerspectiveCamera,
  Raycaster,
  Scene,
  Vector2,
  Vector3
} from 'three';
import { EnemyManager } from './Enemy';
import { WeaponDefinition } from './types';

const starterWeapon: WeaponDefinition = {
  id: 'sidearm',
  name: 'Sidearm',
  damage: 24,
  fireRate: 5,
  magazineSize: 12,
  reloadTime: 1.15,
  range: 45,
  spread: 0.012,
  soundId: 'pistol'
};

interface ShotTrail {
  line: Line;
  ttl: number;
}

export type FireResult = 'none' | 'miss' | 'hit' | 'killed';

export interface FireOutcome {
  result: FireResult;
  reloadStarted: boolean;
}

export class WeaponController {
  definition: WeaponDefinition = { ...starterWeapon };
  ammo = this.definition.magazineSize;

  damageMultiplier = 1;
  fireRateMultiplier = 1;
  reloadMultiplier = 1;

  private cooldown = 0;
  private reloadTimer = 0;
  private readonly raycaster = new Raycaster();
  private readonly center = new Vector2(0, 0);
  private readonly trails: ShotTrail[] = [];

  constructor(private readonly scene: Scene) {}

  update(delta: number): void {
    this.cooldown = Math.max(0, this.cooldown - delta);

    if (this.reloadTimer > 0) {
      this.reloadTimer -= delta;
      if (this.reloadTimer <= 0) {
        this.ammo = this.definition.magazineSize;
      }
    }

    for (let i = this.trails.length - 1; i >= 0; i -= 1) {
      const trail = this.trails[i];
      trail.ttl -= delta;
      const material = trail.line.material as LineBasicMaterial;
      material.opacity = Math.max(0, trail.ttl / 0.08);

      if (trail.ttl <= 0) {
        this.scene.remove(trail.line);
        trail.line.geometry.dispose();
        material.dispose();
        this.trails.splice(i, 1);
      }
    }
  }

  tryReload(): boolean {
    if (this.reloadTimer > 0 || this.ammo === this.definition.magazineSize) {
      return false;
    }

    this.reloadTimer = this.definition.reloadTime * this.reloadMultiplier;
    return true;
  }

  tryFire(camera: PerspectiveCamera, enemies: EnemyManager): FireOutcome {
    if (this.reloadTimer > 0 || this.cooldown > 0) {
      return { result: 'none', reloadStarted: false };
    }

    if (this.ammo <= 0) {
      return {
        result: 'none',
        reloadStarted: this.tryReload()
      };
    }

    this.ammo -= 1;
    this.cooldown = 1 / (this.definition.fireRate * this.fireRateMultiplier);
    const shouldAutoReload = this.ammo <= 0;

    this.raycaster.setFromCamera(this.center, camera);
    this.raycaster.ray.direction.x +=
      (Math.random() - 0.5) * this.definition.spread;
    this.raycaster.ray.direction.y +=
      (Math.random() - 0.5) * this.definition.spread;
    this.raycaster.ray.direction.normalize();
    this.raycaster.far = this.definition.range;

    const hit = enemies.raycast(this.raycaster);
    const start = camera.position.clone();
    const end = hit
      ? hit.point
      : start
          .clone()
          .add(
            this.raycaster.ray.direction
              .clone()
              .multiplyScalar(this.definition.range)
          );

    let result: FireResult = hit ? 'hit' : 'miss';
    if (hit) {
      result = enemies.damage(
        hit.enemyId,
        this.definition.damage * this.damageMultiplier
      );
    }

    this.addTrail(start, end, hit ? '#fffb9a' : '#70f0ff');

    if (shouldAutoReload) {
      return {
        result,
        reloadStarted: this.tryReload()
      };
    }

    return { result, reloadStarted: false };
  }

  isReloading(): boolean {
    return this.reloadTimer > 0;
  }

  getReloadProgress(): number {
    if (this.reloadTimer <= 0) return 0;
    return 1 - this.reloadTimer / (this.definition.reloadTime * this.reloadMultiplier);
  }

  increaseMagazine(amount: number): void {
    this.definition.magazineSize += amount;
    this.ammo = this.definition.magazineSize;
  }

  private addTrail(start: Vector3, end: Vector3, color: string): void {
    const geometry = new BufferGeometry().setFromPoints([start, end]);
    const material = new LineBasicMaterial({
      color: new Color(color),
      transparent: true,
      opacity: 0.85,
      blending: AdditiveBlending
    });
    const line = new Line(geometry, material);
    this.scene.add(line);
    this.trails.push({ line, ttl: 0.08 });
  }
}
