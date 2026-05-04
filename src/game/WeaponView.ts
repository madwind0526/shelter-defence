import {
  BoxGeometry,
  ConeGeometry,
  Group,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  PerspectiveCamera
} from 'three';

export class WeaponView {
  private readonly group = new Group();
  private readonly muzzleFlash: Mesh;
  private recoil = 0;
  private flashTimer = 0;

  constructor(camera: PerspectiveCamera) {
    const darkMetal = new MeshStandardMaterial({
      color: '#23292b',
      roughness: 0.42,
      metalness: 0.55
    });
    const gripMaterial = new MeshStandardMaterial({
      color: '#151817',
      roughness: 0.78
    });
    const accentMaterial = new MeshStandardMaterial({
      color: '#9fba68',
      roughness: 0.5,
      metalness: 0.18
    });

    const receiver = new Mesh(new BoxGeometry(0.44, 0.22, 0.72), darkMetal);
    receiver.position.set(0.38, -0.31, -0.68);

    const barrel = new Mesh(new BoxGeometry(0.14, 0.12, 0.72), darkMetal);
    barrel.position.set(0.38, -0.29, -1.1);

    const grip = new Mesh(new BoxGeometry(0.18, 0.42, 0.2), gripMaterial);
    grip.position.set(0.45, -0.58, -0.48);
    grip.rotation.x = -0.32;

    const stock = new Mesh(new BoxGeometry(0.34, 0.18, 0.38), gripMaterial);
    stock.position.set(0.49, -0.36, -0.22);

    const sight = new Mesh(new BoxGeometry(0.22, 0.08, 0.16), accentMaterial);
    sight.position.set(0.38, -0.14, -0.78);

    const flashMaterial = new MeshBasicMaterial({
      color: '#ffef8f',
      transparent: true,
      opacity: 0,
      depthWrite: false
    });
    this.muzzleFlash = new Mesh(new ConeGeometry(0.18, 0.42, 8), flashMaterial);
    this.muzzleFlash.position.set(0.38, -0.29, -1.55);
    this.muzzleFlash.rotation.x = -Math.PI / 2;

    this.group.add(receiver, barrel, grip, stock, sight, this.muzzleFlash);
    this.group.position.set(0, 0, 0);
    camera.add(this.group);
  }

  update(delta: number): void {
    this.recoil = Math.max(0, this.recoil - delta * 6.5);
    this.flashTimer = Math.max(0, this.flashTimer - delta);

    this.group.position.z = this.recoil * 0.18;
    this.group.position.y = -this.recoil * 0.05;
    this.group.rotation.x = -this.recoil * 0.16;

    const material = this.muzzleFlash.material as MeshBasicMaterial;
    material.opacity = this.flashTimer > 0 ? this.flashTimer / 0.055 : 0;
    this.muzzleFlash.scale.setScalar(0.75 + Math.random() * 0.65);
  }

  kick(): void {
    this.recoil = 1;
    this.flashTimer = 0.055;
  }
}
