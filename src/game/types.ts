export type GameMode = 'ready' | 'playing' | 'upgrade' | 'gameover' | 'paused';

export const MAX_TURRET_SLOTS = 2;

export type UpgradeId =
  | 'damage'
  | 'fireRate'
  | 'magazine'
  | 'defense'
  | 'maxHealth'
  | 'reloadSpeed';

export type WeaponSoundId =
  | 'pistol'
  | 'revolver'
  | 'ak47'
  | 'm4Carbine'
  | 'mp5k'
  | 'rifle'
  | 'mgl'
  | 'machineGun'
  | 'shotgun'
  | 'laserGun'
  | 'turret1'
  | 'explosion'
  | 'fallingBomb';

export interface Upgrade {
  id: UpgradeId;
  title: string;
  detail: string;
  icon?: string;
  apply: () => void;
}

export interface WeaponDefinition {
  id: string;
  name: string;
  damage: number;
  fireRate: number;
  magazineSize: number;
  reloadTime: number;
  range: number;
  spread: number;
  criticalChance: number;
  soundId: WeaponSoundId;
}

export interface EnemyDefinition {
  id: string;
  name: string;
  maxHealth: number;
  speed: number;
  damage: number;
  attackRange: number;
  attackCooldown: number;
  score: number;
  radius: number;
}

export interface EnemySnapshot {
  remaining: number;
  killed: number;
}

export interface PreparationSoldier {
  id: string;
  name: string;
  role: string;
  image: string;
  hired: boolean;
  hireCost: number;
  stats: {
    str: number;
    dex: number;
    int: number;
  };
  equippedWeaponId: string;
}

export interface PreparationTurret {
  id: string;
  name: string;
  image: string;
  kind: 'gun';
  hireCost: number;
  hiredCount: number;
  stats: {
    str: number;
    dex: number;
    int: number;
  };
  damage: number;
  fireRate: number;
  criticalChance: number;
  maxShield: number;
}

export interface PreparationWeapon {
  id: string;
  name: string;
  image: string;
  summary: string;
  magazineSize: number;
  trait: string;
  statScale: {
    str: number;
    dex: number;
    int: number;
  };
  damage: number;
  fireRate: number;
  criticalChance: number;
  reloadTime: number;
  range: number;
  spread: number;
  soundId: WeaponSoundId;
}

export interface PreparationItem {
  id: string;
  name: string;
  image: string;
  count: number;
  maxCount: number;
  priceGold: number;
  detail: string;
}

export interface PreparationSnapshot {
  soldiers: PreparationSoldier[];
  weapons: PreparationWeapon[];
  turrets: PreparationTurret[];
  turretSlots: Array<PreparationTurret | null>;
  items: PreparationItem[];
  selectedSoldierIndex: number;
  selectedWeaponIndex: number;
  gold: number;
  rubi: number;
  message: string;
}

export interface WaveSnapshot {
  stage: number;
  wave: number;
  waveInStage: number;
  wavesPerStage: number;
  total: number;
  remaining: number;
}

export interface ActiveEffectSnapshot {
  id: string;
  image: string;
  label: string;
  seconds?: number;
}

export interface TurretSnapshot {
  installed: boolean;
  id?: string;
  name?: string;
  image?: string;
  kind?: 'gun';
  damage?: number;
  fireRate?: number;
  criticalChance?: number;
  fireTimer?: number;
  shield: number;
  maxShield: number;
}

export interface BarricadeSnapshot {
  health: number;
  maxHealth: number;
}

export interface SoldierHealthSnapshot {
  soldierId: string;
  health: number;
  maxHealth: number;
  ammo: number;
  magazines: number;
}
