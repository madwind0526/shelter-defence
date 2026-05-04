import {
  Camera,
  Euler,
  MathUtils,
  PerspectiveCamera,
  Vector3
} from 'three';

export class Player {
  readonly camera: PerspectiveCamera;
  readonly position = new Vector3(0, 1.7, 6);

  maxHealth = 100;
  health = 100;
  incomingDamageMultiplier = 1;

  private yaw = 0;
  private pitch = 0;
  private readonly euler = new Euler(0, 0, 0, 'YXZ');

  constructor() {
    this.camera = new PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.1,
      120
    );
    this.camera.position.copy(this.position);
  }

  update(): void {
    this.camera.position.copy(this.position);
  }

  look(deltaX: number, deltaY: number): void {
    const sensitivity = 0.0022;
    this.yaw -= deltaX * sensitivity;
    this.pitch -= deltaY * sensitivity;
    this.yaw = MathUtils.clamp(this.yaw, -1.15, 1.15);
    this.pitch = MathUtils.clamp(this.pitch, -1.25, 1.2);

    this.euler.set(this.pitch, this.yaw, 0);
    this.camera.quaternion.setFromEuler(this.euler);
  }

  damage(amount: number): void {
    this.health = Math.max(0, this.health - amount * this.incomingDamageMultiplier);
  }

  heal(amount: number): void {
    this.health = Math.min(this.maxHealth, this.health + amount);
  }

  getCamera(): Camera {
    return this.camera;
  }
}
