import { WeaponSoundId } from './types';

type EffectSoundId = 'reload' | 'gameStart' | 'gameOver' | 'rank';

const soundAssets: Record<WeaponSoundId, string> = {
  pistol: new URL('../../assets/sounds/pistol.mp3', import.meta.url).href,
  revolver: new URL('../../assets/sounds/revolver.mp3', import.meta.url).href,
  ak47: new URL('../../assets/sounds/ak-47.mp3', import.meta.url).href,
  m4Carbine: new URL('../../assets/sounds/m4 carbine.mp3', import.meta.url)
    .href,
  mp5k: new URL('../../assets/sounds/mp5k.mp3', import.meta.url).href,
  rifle: new URL('../../assets/sounds/rifle.mp3', import.meta.url).href,
  mgl: new URL('../../assets/sounds/mgl.mp3', import.meta.url).href,
  machineGun: new URL('../../assets/sounds/machine gun.mp3', import.meta.url)
    .href,
  shotgun: new URL('../../assets/sounds/shotgun.mp3', import.meta.url).href,
  laserGun: new URL('../../assets/sounds/laser-gun.mp3', import.meta.url).href,
  turret1: new URL('../../assets/sounds/turret1.mp3', import.meta.url).href,
  explosion: new URL('../../assets/sounds/explosion.mp3', import.meta.url).href,
  fallingBomb: new URL('../../assets/sounds/falling-bomb.mp3', import.meta.url)
    .href
};

const effectAssets: Record<EffectSoundId, string> = {
  reload: new URL('../../assets/sounds/Gun-Reload.mp3', import.meta.url).href,
  gameStart: new URL('../../assets/sounds/GameStart.mp3', import.meta.url).href,
  gameOver: new URL('../../assets/sounds/GameOver.mp3', import.meta.url).href,
  rank: new URL('../../assets/sounds/Rank.mp3', import.meta.url).href
};

const soundVolumes: Record<WeaponSoundId, number> = {
  pistol: 0.42,
  revolver: 0.44,
  ak47: 0.36,
  m4Carbine: 0.34,
  mp5k: 0.31,
  rifle: 0.42,
  mgl: 0.45,
  machineGun: 0.28,
  shotgun: 0.46,
  laserGun: 0.32,
  turret1: 0.27,
  explosion: 0.42,
  fallingBomb: 0.36
};

export class AudioManager {
  private readonly sounds = new Map<WeaponSoundId, HTMLAudioElement[]>();
  private readonly effects = new Map<EffectSoundId, HTMLAudioElement[]>();
  private unlocked = false;

  constructor() {
    for (const id of Object.keys(soundAssets) as WeaponSoundId[]) {
      this.preload(id, ['machineGun', 'mp5k', 'turret1'].includes(id) ? 8 : 4);
    }
    this.preloadEffect('reload', 3, 0.34);
    this.preloadEffect('gameStart', 1, 0.46);
    this.preloadEffect('gameOver', 1, 0.5);
    this.preloadEffect('rank', 1, 0.48);
  }

  unlock(): void {
    this.unlocked = true;
  }

  playWeaponShot(id: WeaponSoundId): void {
    this.play(id, 0.94 + Math.random() * 0.1);
  }

  stopWeaponShots(ids: WeaponSoundId[], minimumPlaybackMs = 0): void {
    for (const id of new Set(ids)) {
      const pool = this.sounds.get(id);
      if (!pool) continue;

      for (const audio of pool) {
        if (audio.paused) continue;
        const remainingMs = minimumPlaybackMs - audio.currentTime * 1000;
        if (remainingMs > 0) {
          window.setTimeout(() => this.stopAudio(audio, id), remainingMs);
          continue;
        }
        this.stopAudio(audio, id);
      }
    }
  }

  playReload(): void {
    this.playEffect('reload', 0.98 + Math.random() * 0.06);
  }

  playGameStart(): void {
    this.playEffect('gameStart');
  }

  playGameOver(): void {
    this.playEffect('gameOver');
  }

  playRank(): void {
    this.playEffect('rank');
  }

  stopGameStart(): void {
    this.stopEffect('gameStart');
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
    audio.volume = soundVolumes[id];
    audio.playbackRate = playbackRate;
    void audio.play().catch(() => undefined);
  }

  private stopAudio(audio: HTMLAudioElement, id: WeaponSoundId): void {
    if (audio.paused) return;
    audio.pause();
    audio.currentTime = 0;
    audio.volume = soundVolumes[id];
  }

  private playEffect(id: EffectSoundId, playbackRate = 1): void {
    if (!this.unlocked) return;

    const pool = this.effects.get(id);
    if (!pool) return;

    const audio = pool.find((candidate) => candidate.paused) ?? pool[0];
    audio.pause();
    audio.currentTime = 0;
    audio.playbackRate = playbackRate;
    void audio.play().catch(() => undefined);
  }

  private stopEffect(id: EffectSoundId): void {
    const pool = this.effects.get(id);
    if (!pool) return;

    for (const audio of pool) {
      if (audio.paused) continue;
      audio.pause();
      audio.currentTime = 0;
    }
  }
}
