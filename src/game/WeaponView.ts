import {
  ConeGeometry,
  DoubleSide,
  Group,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  PlaneGeometry,
  SRGBColorSpace,
  Texture,
  TextureLoader
} from 'three';
import { firstPersonWeaponAssets } from './AssetUrls';

interface WeaponAlignment {
  muzzleX: number;
  muzzleY: number;
  viewHeight: number;
}

interface WeaponSlot {
  plane: Mesh;
  material: MeshBasicMaterial;
  flash: Mesh;
  weaponId: string;
}

const defaultAlignment: WeaponAlignment = {
  muzzleX: 0.1,
  muzzleY: 0.3,
  viewHeight: 0.65
};

const aimAnchor = {
  x: 0.02,
  y: -0.02,
  planeZ: -0.92,
  flashZ: -1.34
};

const weaponAimOffset = {
  x: 0.1,
  y: -0.15
};

const squadMuzzleFormation = [
  { x: 0.08, y: -0.28 },
  { x: -0.12, y: -0.28 },
  { x: 0.24, y: -0.29 },
  { x: -0.37, y: -0.29 },
  { x: 0.48, y: -0.3 }
];

export class WeaponView {
  private readonly group = new Group();
  private readonly textureLoader = new TextureLoader();
  private readonly textures = new Map<string, Texture>();
  private readonly alignments = new Map<string, WeaponAlignment>();
  private readonly pendingLoads = new Map<string, Promise<Texture>>();
  private readonly slots: WeaponSlot[] = [];
  private readonly visibleWeaponIds: string[] = [];
  private readonly aim = { x: aimAnchor.x, y: aimAnchor.y };
  private activeWeaponId = '';
  private activeSlotIndex = 0;
  private recoil = 0;
  private flashTimer = 0;

  constructor(private readonly camera: PerspectiveCamera) {
    camera.add(this.group);

    this.prepareWeapons(Object.keys(firstPersonWeaponAssets));
    this.setWeapon('colt-m1911');
  }

  setAim(normalizedX: number, normalizedY: number): void {
    const planeDepth = Math.abs(aimAnchor.planeZ);
    const halfHeight = Math.tan((this.camera.fov * Math.PI) / 360) * planeDepth;
    const halfWidth = halfHeight * this.camera.aspect;
    this.aim.x = aimAnchor.x + normalizedX * halfWidth;
    this.aim.y = aimAnchor.y + normalizedY * halfHeight;
    this.refreshVisibleSlots();
  }

  prepareWeapons(weaponIds: string[]): void {
    for (const weaponId of new Set(weaponIds)) {
      void this.loadWeaponTexture(weaponId);
    }
  }

  setWeapon(weaponId: string): void {
    this.setWeapons([weaponId], weaponId);
  }

  setWeapons(weaponIds: string[], activeWeaponId = weaponIds[0] ?? 'colt-m1911'): void {
    const visibleWeaponIds = weaponIds.filter(Boolean).slice(0, 5);
    if (visibleWeaponIds.length <= 0) {
      visibleWeaponIds.push('colt-m1911');
    }

    this.activeWeaponId = activeWeaponId;
    this.activeSlotIndex = Math.max(0, visibleWeaponIds.findIndex(weaponId => weaponId === activeWeaponId));
    this.visibleWeaponIds.splice(0, this.visibleWeaponIds.length, ...visibleWeaponIds);
    this.ensureSlotCount(visibleWeaponIds.length);

    for (const [index, weaponId] of visibleWeaponIds.entries()) {
      const slot = this.slots[index];
      slot.weaponId = weaponId;
      slot.plane.visible = true;
      slot.flash.visible = true;

      const cachedTexture = this.textures.get(this.getWeaponUrl(weaponId));
      if (cachedTexture) {
        this.applyTexture(slot, weaponId, cachedTexture, index, visibleWeaponIds.length);
        continue;
      }

      void this.loadWeaponTexture(weaponId).then(texture => {
        if (this.visibleWeaponIds[index] === weaponId) {
          this.applyTexture(slot, weaponId, texture, index, this.visibleWeaponIds.length);
        }
      });
    }

    for (let index = visibleWeaponIds.length; index < this.slots.length; index += 1) {
      this.slots[index].plane.visible = false;
      this.slots[index].flash.visible = false;
    }
  }

  update(delta: number): void {
    this.recoil = Math.max(0, this.recoil - delta * 6.5);
    this.flashTimer = Math.max(0, this.flashTimer - delta);

    this.group.position.z = this.recoil * 0.16;
    this.group.position.y = -this.recoil * 0.035;
    this.group.rotation.x = -this.recoil * 0.12;

    for (const slot of this.slots) {
      const material = slot.flash.material as MeshBasicMaterial;
      material.opacity = slot.flash.visible && this.flashTimer > 0 ? this.flashTimer / 0.055 : 0;
      slot.flash.scale.setScalar(0.75 + Math.random() * 0.65);
    }
  }

  kick(): void {
    this.recoil = 1;
    this.flashTimer = 0.055;
  }

  private loadWeaponTexture(weaponId: string): Promise<Texture> {
    const url = this.getWeaponUrl(weaponId);
    const cachedTexture = this.textures.get(url);
    if (cachedTexture) {
      return Promise.resolve(cachedTexture);
    }

    const pendingLoad = this.pendingLoads.get(url);
    if (pendingLoad) {
      return pendingLoad;
    }

    const load = new Promise<Texture>((resolve, reject) => {
      this.textureLoader.load(
        url,
        texture => {
          texture.colorSpace = SRGBColorSpace;
          this.textures.set(url, texture);
          this.alignments.set(url, this.estimateAlignment(texture));
          this.pendingLoads.delete(url);
          resolve(texture);
        },
        undefined,
        error => {
          this.pendingLoads.delete(url);
          reject(error);
        }
      );
    });
    this.pendingLoads.set(url, load);
    return load;
  }

  private applyTexture(
    slot: WeaponSlot,
    weaponId: string,
    texture: Texture,
    index: number,
    count: number
  ): void {
    slot.material.map = texture;
    const active = index === this.activeSlotIndex;
    slot.material.opacity = count === 1 || active ? 1 : 0.76;
    slot.material.needsUpdate = true;

    const target = this.getAimTarget(index, count, active);
    const image = texture.image as HTMLImageElement | ImageBitmap | undefined;
    const width = image?.width ?? 443;
    const height = image?.height ?? 329;
    const alignment = this.alignments.get(this.getWeaponUrl(weaponId)) ?? defaultAlignment;
    const sizeScale = this.getSizeScale(count);
    const viewHeight = alignment.viewHeight * sizeScale;
    const viewWidth = viewHeight * (width / Math.max(1, height));
    const scaleX = this.shouldFlipSlot(index) ? -viewWidth : viewWidth;

    const muzzleOffsetX = (alignment.muzzleX - 0.5) * scaleX;
    const muzzleOffsetY = (0.5 - alignment.muzzleY) * viewHeight;

    slot.plane.scale.set(scaleX, viewHeight, 1);
    slot.plane.position.set(
      target.x - muzzleOffsetX,
      target.y - muzzleOffsetY,
      aimAnchor.planeZ
    );
    slot.plane.renderOrder = 6 + index;
    slot.flash.position.set(target.x, target.y, aimAnchor.flashZ);
    slot.flash.renderOrder = 12 + index;
  }

  private estimateAlignment(texture: Texture): WeaponAlignment {
    const image = texture.image as HTMLImageElement | ImageBitmap | undefined;
    if (!image?.width || !image.height) {
      return defaultAlignment;
    }

    const canvas = document.createElement('canvas');
    canvas.width = image.width;
    canvas.height = image.height;
    const context = canvas.getContext('2d', { willReadFrequently: true });
    if (!context) {
      return this.defaultForImage(image.width, image.height);
    }

    context.drawImage(image, 0, 0);
    const pixels = context.getImageData(0, 0, image.width, image.height).data;
    const bounds = this.getAlphaBounds(pixels, image.width, image.height);
    if (!bounds) {
      return this.defaultForImage(image.width, image.height);
    }

    const contentWidth = bounds.maxX - bounds.minX + 1;
    const contentHeight = bounds.maxY - bounds.minY + 1;
    const bandEndX = Math.min(bounds.maxX, bounds.minX + Math.ceil(contentWidth * 0.08));
    const bandEndY = bounds.minY + Math.floor(contentHeight * 0.68);
    let sampleCount = 0;
    let yTotal = 0;

    for (let y = bounds.minY; y <= bandEndY; y += 1) {
      for (let x = bounds.minX; x <= bandEndX; x += 1) {
        const alpha = pixels[(y * image.width + x) * 4 + 3];
        if (alpha <= 24) continue;
        sampleCount += 1;
        yTotal += y;
      }
    }

    const muzzleX = bounds.minX / image.width;
    const muzzleY = sampleCount > 0
      ? yTotal / sampleCount / image.height
      : (bounds.minY + contentHeight * 0.32) / image.height;

    return {
      muzzleX,
      muzzleY,
      viewHeight: this.defaultForImage(image.width, image.height).viewHeight
    };
  }

  private getAlphaBounds(
    pixels: Uint8ClampedArray,
    width: number,
    height: number
  ): { minX: number; maxX: number; minY: number; maxY: number } | null {
    let minX = width;
    let maxX = -1;
    let minY = height;
    let maxY = -1;

    for (let y = 0; y < height; y += 1) {
      for (let x = 0; x < width; x += 1) {
        const alpha = pixels[(y * width + x) * 4 + 3];
        if (alpha <= 24) continue;
        minX = Math.min(minX, x);
        maxX = Math.max(maxX, x);
        minY = Math.min(minY, y);
        maxY = Math.max(maxY, y);
      }
    }

    return maxX >= minX && maxY >= minY ? { minX, maxX, minY, maxY } : null;
  }

  private defaultForImage(width: number, height: number): WeaponAlignment {
    const aspect = width / Math.max(1, height);
    return {
      ...defaultAlignment,
      viewHeight: Math.min(0.7, Math.max(0.58, 0.88 / Math.max(1, aspect)))
    };
  }

  private getWeaponUrl(weaponId: string): string {
    return firstPersonWeaponAssets[weaponId] ?? firstPersonWeaponAssets['colt-m1911'];
  }

  private ensureSlotCount(count: number): void {
    while (this.slots.length < count) {
      this.slots.push(this.createSlot(this.slots.length));
    }
  }

  private refreshVisibleSlots(): void {
    for (const [index, slot] of this.slots.entries()) {
      if (!slot.plane.visible || !slot.weaponId) continue;
      const texture = this.textures.get(this.getWeaponUrl(slot.weaponId));
      if (!texture) continue;
      this.applyTexture(slot, slot.weaponId, texture, index, this.visibleWeaponIds.length);
    }
  }

  private createSlot(index: number): WeaponSlot {
    const material = new MeshBasicMaterial({
      transparent: true,
      depthWrite: false,
      side: DoubleSide
    });
    const plane = new Mesh(new PlaneGeometry(1, 1), material);
    plane.renderOrder = 6 + index;

    const flashMaterial = new MeshBasicMaterial({
      color: '#ffef8f',
      transparent: true,
      opacity: 0,
      depthWrite: false
    });
    const flash = new Mesh(new ConeGeometry(0.14, 0.34, 8), flashMaterial);
    flash.rotation.x = -Math.PI / 2;
    flash.renderOrder = 12 + index;

    this.group.add(plane, flash);
    return {
      plane,
      material,
      flash,
      weaponId: ''
    };
  }

  private getAimTarget(
    index: number,
    count: number,
    active: boolean
  ): { x: number; y: number } {
    if (count <= 1) {
      return {
        x: this.aim.x + weaponAimOffset.x,
        y: this.aim.y + weaponAimOffset.y
      };
    }

    const formation = squadMuzzleFormation[index] ?? squadMuzzleFormation[squadMuzzleFormation.length - 1];
    return {
      x: this.aim.x + formation.x,
      y: this.aim.y + formation.y
    };
  }

  private getSizeScale(count: number): number {
    if (count <= 1) return 0.5;
    if (count <= 2) return 0.34;
    if (count <= 3) return 0.31;
    return 0.28;
  }

  private shouldFlipSlot(index: number): boolean {
    return index === 1 || index === 3;
  }
}
