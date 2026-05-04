import { WeaponSoundId } from './types';

type EffectSoundId = 'reload';

const soundAssets: Record<WeaponSoundId, string> = {
  pistol: new URL('../../assets/sounds/pistol-shot.mp3', import.meta.url).href,
  ak47: new URL('../../assets/sounds/ak-47.mp3', import.meta.url).href,
  m16: new URL('../../assets/sounds/m16.mp3', import.meta.url).href,
  machineGun: new URL('../../assets/sounds/machine-gun.mp3', import.meta.url)
    .href,
  shotgun: new URL('../../assets/sounds/shotgun.mp3', import.meta.url).href,
  laserGun: new URL('../../assets/sounds/laser-gun.mp3', import.meta.url).href,
  plasmaGun: new URL('../../assets/sounds/Plasma-Gun.mp3', import.meta.url)
    .href,
  explosion: new URL('../../assets/sounds/explosion.mp3', import.meta.url).href,
  fallingBomb: new URL('../../assets/sounds/falling-bomb.mp3', import.meta.url)
    .href
};

const effectAssets: Record<EffectSoundId, string> = {
  reload: new URL('../../assets/sounds/Gun-Reload.mp3', import.meta.url).href
};

const soundVolumes: Record<WeaponSoundId, number> = {
  pistol: 0.42,
  ak47: 0.36,
  m16: 0.34,
  machineGun: 0.28,
  shotgun: 0.46,
  laserGun: 0.32,
  plasmaGun: 0.34,
  explosion: 0.42,
  fallingBomb: 0.36
};

export class AudioManager {
  private readonly sounds = new Map<WeaponSoundId, HTMLAudioElement[]>();
  private readonly effects = new Map<EffectSoundId, HTMLAudioElement[]>();
  private unlocked = false;

  constructor() {
    for (const id of Object.keys(soundAssets) as WeaponSoundId[]) {
      this.preload(id, id === 'machineGun' ? 8 : 4);
    }
    this.preloadEffect('reload', 3, 0.34);
  }

  unlock(): void {
    this.unlocked = true;
  }

  playWeaponShot(id: WeaponSoundId): void {
    this.play(id, 0.94 + Math.random() * 0.1);
  }

  playReload(): void {
    this.playEffect('reload', 0.98 + Math.random() * 0.06);
  }

  private preload(id: WeaponSoundId, count: number): void {
    const pool: HTMLAudioElement[] = [];
    for (let i = 0; i < count; i += 1) {
      const audio = new Audio(soundAssets[id]);
      audio.preload = 'auto';
      audio.volume = soundVolumes[id];
      pool.push(audio);
    }
    this.sounds.set(id, pool);
  }

  private preloadEffect(id: EffectSoundId, count: number, volume: number): void {
    const pool: HTMLAudioElement[] = [];
    for (let i = 0; i < count; i += 1) {
      const audio = new Audio(effectAssets[id]);
      audio.preload = 'auto';
      audio.volume = volume;
      pool.push(audio);
    }
    this.effects.set(id, pool);
  }

  private play(id: WeaponSoundId, playbackRate = 1): void {
    if (!this.unlocked) return;

    const pool = this.sounds.get(id);
    if (!pool) return;

    const audio = pool.find((candidate) => candidate.paused) ?? pool[0];
    audio.pause();
    audio.currentTime = 0;
    audio.playbackRate = playbackRate;
    void audio.play().catch(() => {
      this.unlocked = false;
    });
  }

  private playEffect(id: EffectSoundId, playbackRate = 1): void {
    if (!this.unlocked) return;

    const pool = this.effects.get(id);
    if (!pool) return;

    const audio = pool.find((candidate) => candidate.paused) ?? pool[0];
    audio.pause();
    audio.currentTime = 0;
    audio.playbackRate = playbackRate;
    void audio.play().catch(() => {
      this.unlocked = false;
    });
  }
}
