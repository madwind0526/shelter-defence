export type GameMode = 'ready' | 'playing' | 'upgrade' | 'gameover';

export type UpgradeId =
  | 'damage'
  | 'fireRate'
  | 'magazine'
  | 'defense'
  | 'maxHealth'
  | 'reloadSpeed';

export type WeaponSoundId =
  | 'pistol'
  | 'ak47'
  | 'm16'
  | 'machineGun'
  | 'shotgun'
  | 'laserGun'
  | 'plasmaGun'
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

export interface PreparationWeapon {
  id: string;
  name: string;
  image: string;
  summary: string;
  magazineSize: number;
  trait: string;
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
  items: PreparationItem[];
  selectedSoldierIndex: number;
  selectedWeaponIndex: number;
  gold: number;
  rubi: number;
  message: string;
}
