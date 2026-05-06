import { characterAssets, itemAssets, preparationWeaponAssets } from './AssetUrls';
import {
  PreparationItem,
  PreparationSnapshot,
  PreparationSoldier,
  PreparationTurret,
  PreparationWeapon
} from './types';

const BASE_MAGAZINE_COUNT = 10;
const REQUIRED_SOLDIER_ID = 'anais';

export class PreparationState {
  private selectedSoldierIndex = 0;
  private selectedWeaponIndex = 3;
  private gold = 100000;
  private rubi = 200;
  private itemGoldSpent = 0;
  private message = 'Prepare your squad before the next wave.';
  private readonly turretSlots: Array<string | null> = [null, null, null, null];

  private readonly soldiers: PreparationSoldier[] = [
    {
      id: 'anais',
      name: 'Anais',
      role: 'Field Medic',
      image: characterAssets.anais,
      hired: true,
      hireCost: 0,
      stats: { str: 30, dex: 80, int: 115 },
      equippedWeaponId: 'colt-m1911'
    },
    {
      id: 'henry',
      name: 'Henry',
      role: 'Barricade Engineer',
      image: characterAssets.henry,
      hired: false,
      hireCost: 850,
      stats: { str: 40, dex: 60, int: 90 },
      equippedWeaponId: 'bren-lmg'
    },
    {
      id: 'kim',
      name: 'Kim',
      role: 'Forward Scout',
      image: characterAssets.kim,
      hired: false,
      hireCost: 760,
      stats: { str: 30, dex: 120, int: 75 },
      equippedWeaponId: 'mp5k'
    },
    {
      id: 'kino',
      name: 'Kino',
      role: 'Signal Technician',
      image: characterAssets.kino,
      hired: false,
      hireCost: 900,
      stats: { str: 35, dex: 85, int: 125 },
      equippedWeaponId: 'm4-carbine'
    },
    {
      id: 'tomas',
      name: 'Tomas',
      role: 'Veteran Guard',
      image: characterAssets.tomas,
      hired: false,
      hireCost: 1000,
      stats: { str: 40, dex: 70, int: 70 },
      equippedWeaponId: 'shotgun'
    }
  ];

  private readonly weapons: PreparationWeapon[] = [
    {
      id: 'bren-lmg',
      name: 'Bren Light Machine Gun',
      image: preparationWeaponAssets.brenLightMachineGun,
      summary: 'Reliable heavy support weapon with sustained fire.',
      magazineSize: 30,
      trait: 'High stability, heavy weight',
      statScale: { str: 1.3, dex: 1.25, int: 0.85 },
      damage: 55,
      fireRate: 10,
      criticalChance: 0.05,
      reloadTime: 2.4,
      range: 58,
      spread: 0.018,
      soundId: 'machineGun'
    },
    {
      id: 'milkor-mgl',
      name: 'Milkor MGL',
      image: preparationWeaponAssets.milkorMgl,
      summary: 'Revolver-style grenade launcher for crowd control.',
      magazineSize: 6,
      trait: 'Explosive area damage',
      statScale: { str: 1.45, dex: 0.55, int: 1.05 },
      damage: 100,
      fireRate: 5,
      criticalChance: 0.05,
      reloadTime: 3.1,
      range: 44,
      spread: 0.026,
      soundId: 'mgl'
    },
    {
      id: 'ai-aw-sniper',
      name: 'AI AW Sniper Rifle',
      image: preparationWeaponAssets.aiAwSniper,
      summary: 'Precision bolt-action rifle for long-range threats.',
      magazineSize: 5,
      trait: 'Extreme range, slow fire',
      statScale: { str: 0.9, dex: 0.75, int: 1.5 },
      damage: 115,
      fireRate: 5,
      criticalChance: 0.25,
      reloadTime: 2.5,
      range: 82,
      spread: 0.004,
      soundId: 'rifle'
    },
    {
      id: 'colt-m1911',
      name: 'Colt M1911 Pistol',
      image: preparationWeaponAssets.coltM1911,
      summary: 'Compact sidearm with reliable stopping power.',
      magazineSize: 7,
      trait: 'Fast handling',
      statScale: { str: 0.85, dex: 0.85, int: 1 },
      damage: 25,
      fireRate: 5,
      criticalChance: 0.1,
      reloadTime: 1.15,
      range: 45,
      spread: 0.014,
      soundId: 'pistol'
    },
    {
      id: 'colt-saa',
      name: 'Colt SAA Revolver',
      image: preparationWeaponAssets.coltSaa,
      summary: 'Classic six-shot revolver with deliberate fire.',
      magazineSize: 6,
      trait: 'High impact sidearm',
      statScale: { str: 0.95, dex: 0.75, int: 1.05 },
      damage: 30,
      fireRate: 5,
      criticalChance: 0.1,
      reloadTime: 1.45,
      range: 48,
      spread: 0.012,
      soundId: 'revolver'
    },
    {
      id: 'mp5k',
      name: 'Heckler Koch MP5K',
      image: preparationWeaponAssets.mp5k,
      summary: 'Compact SMG for fast close-range defense.',
      magazineSize: 30,
      trait: 'Very high fire rate',
      statScale: { str: 1.1, dex: 1.4, int: 0.8 },
      damage: 35,
      fireRate: 20,
      criticalChance: 0.05,
      reloadTime: 1.7,
      range: 40,
      spread: 0.023,
      soundId: 'mp5k'
    },
    {
      id: 'shotgun',
      name: 'Pump-Action Shotgun',
      image: preparationWeaponAssets.shotgun,
      summary: 'Short-barreled shotgun for near barricade threats.',
      magazineSize: 8,
      trait: 'Close-range spread',
      statScale: { str: 1.4, dex: 0.6, int: 0.65 },
      damage: 90,
      fireRate: 5,
      criticalChance: 0.1,
      reloadTime: 2.2,
      range: 30,
      spread: 0.052,
      soundId: 'shotgun'
    },
    {
      id: 'm4-carbine',
      name: 'M4 Carbine',
      image: preparationWeaponAssets.m4Carbine,
      summary: 'Lightweight all-round rifle for flexible defense.',
      magazineSize: 30,
      trait: 'Balanced range and fire rate',
      statScale: { str: 1.15, dex: 1.2, int: 1 },
      damage: 45,
      fireRate: 15,
      criticalChance: 0.1,
      reloadTime: 1.8,
      range: 60,
      spread: 0.015,
      soundId: 'm4Carbine'
    }
  ];

  private readonly turrets: PreparationTurret[] = [
    {
      id: 'turret-gun',
      name: 'TURRET (GUN)',
      image: characterAssets.turret1,
      kind: 'gun',
      hireCost: 50000,
      hiredCount: 0,
      stats: { str: 50, dex: 150, int: 100 },
      damage: 60,
      fireRate: 20,
      criticalChance: 0.1,
      maxShield: 200
    },
    {
      id: 'turret-flame',
      name: 'TURRET (FIRE)',
      image: characterAssets.turret2,
      kind: 'flame',
      hireCost: 50000,
      hiredCount: 0,
      stats: { str: 50, dex: 150, int: 100 },
      damage: 60,
      fireRate: 20,
      criticalChance: 0.1,
      maxShield: 200
    }
  ];

  private readonly items: PreparationItem[] = [
    {
      id: 'jacket',
      name: 'Defense Vest',
      image: itemAssets.jacket,
      count: 0,
      maxCount: 1,
      priceGold: 450,
      detail: 'Reduces damage.'
    },
    {
      id: 'potion-health',
      name: 'Health Potion',
      image: itemAssets.potionHealth,
      count: 0,
      maxCount: 999,
      priceGold: 100,
      detail: 'Restores health.'
    },
    {
      id: 'potion-dex',
      name: 'Agility Potion',
      image: itemAssets.potionDex,
      count: 0,
      maxCount: 999,
      priceGold: 100,
      detail: 'Boosts dexterity.'
    },
    {
      id: 'potion-int',
      name: 'Intelligence Potion',
      image: itemAssets.potionInt,
      count: 0,
      maxCount: 999,
      priceGold: 100,
      detail: 'Raises critical hit chance.'
    },
    {
      id: 'repair-kit',
      name: 'Repair Kit',
      image: itemAssets.repairKit,
      count: 0,
      maxCount: 999,
      priceGold: 250,
      detail: 'Repairs barricade.'
    },
    {
      id: 'magazine',
      name: 'Magazine',
      image: itemAssets.magazine,
      count: BASE_MAGAZINE_COUNT,
      maxCount: 999,
      priceGold: 100,
      detail: 'Adds ammo reserve.'
    }
  ];

  snapshot(): PreparationSnapshot {
    const hiredCount = this.hiredCount();
    return {
      soldiers: this.soldiers.map(soldier => ({ ...soldier, stats: { ...soldier.stats } })),
      weapons: this.weapons.map(weapon => ({ ...weapon })),
      turrets: this.turrets.map(turret => ({
        ...turret,
        stats: { ...turret.stats },
        hiredCount: this.turretSlots.filter(slot => slot === turret.id).length
      })),
      turretSlots: this.turretSlots.map(turretId => this.getTurretById(turretId)),
      items: this.items.map(item => ({
        ...item,
        maxCount: item.id === 'jacket' ? hiredCount : item.maxCount
      })),
      selectedSoldierIndex: this.selectedSoldierIndex,
      selectedWeaponIndex: this.selectedWeaponIndex,
      gold: this.gold,
      rubi: this.rubi,
      message: this.message
    };
  }

  selectSoldier(direction: 1 | -1): void {
    this.selectedSoldierIndex = this.wrap(
      this.selectedSoldierIndex + direction,
      this.rosterLength()
    );
    if (this.isSoldierSelected()) {
      this.syncSelectedWeaponToSoldier();
      this.message = `${this.currentSoldier().name} selected.`;
      return;
    }

    this.message = `${this.currentTurret().name} selected.`;
  }

  selectWeapon(direction: 1 | -1): void {
    if (!this.isSoldierSelected()) {
      this.message = `${this.currentTurret().name} has a fixed weapon.`;
      return;
    }

    this.selectedWeaponIndex = this.wrap(
      this.selectedWeaponIndex + direction,
      this.weapons.length
    );
    this.message = `${this.currentWeapon().name} selected. Click the weapon to equip.`;
  }

  equipSelectedWeapon(): void {
    if (!this.isSoldierSelected()) {
      this.message = `${this.currentTurret().name} has a fixed weapon.`;
      return;
    }

    const soldier = this.currentSoldier();
    const weapon = this.currentWeapon();
    soldier.equippedWeaponId = weapon.id;
    this.message = `${soldier.name} equipped ${weapon.name}.`;
  }

  hireSelectedSoldier(): void {
    if (!this.isSoldierSelected()) {
      this.hireSelectedTurret();
      return;
    }

    const soldier = this.currentSoldier();
    if (soldier.id === REQUIRED_SOLDIER_ID) {
      soldier.hired = true;
      this.message = `${soldier.name} is required for every run.`;
      return;
    }

    if (soldier.hired) {
      const refund = Math.floor(soldier.hireCost / 2);
      soldier.hired = false;
      this.gold += refund;
      const vest = this.items.find(candidate => candidate.id === 'jacket');
      if (vest && vest.count > this.hiredCount()) {
        vest.count = this.hiredCount();
      }
      this.message = `${soldier.name} fired. ${refund} gold refunded.`;
      return;
    }
    if (this.gold < soldier.hireCost) {
      this.message = `Need ${soldier.hireCost - this.gold} more gold to hire ${soldier.name}.`;
      return;
    }
    this.gold -= soldier.hireCost;
    soldier.hired = true;
    const vest = this.items.find(candidate => candidate.id === 'jacket');
    if (vest && vest.count > this.hiredCount()) {
      vest.count = this.hiredCount();
    }
    this.message = `${soldier.name} joined the squad.`;
  }

  fireSelectedTurret(): void {
    if (this.isSoldierSelected()) return;
    const turret = this.currentTurret();
    const slotIndex = this.turretSlots.findIndex(slot => slot === turret.id);
    if (slotIndex < 0) {
      this.message = `${turret.name} is not installed.`;
      return;
    }

    this.turretSlots[slotIndex] = null;
    const refund = Math.floor(turret.hireCost / 2);
    this.gold += refund;
    this.message = `${turret.name} fired. ${refund} gold refunded.`;
  }

  private hireSelectedTurret(): void {
    const turret = this.currentTurret();
    const installedCount = this.turretSlots.filter(Boolean).length;

    if (installedCount >= this.turretSlots.length) {
      this.message = 'Turret slots are full.';
      return;
    }

    const emptySlot = this.turretSlots.findIndex(slot => slot === null);
    if (emptySlot < 0) {
      this.message = 'Turret slots are full.';
      return;
    }
    if (this.gold < turret.hireCost) {
      this.message = `Need ${turret.hireCost - this.gold} more gold to hire ${turret.name}.`;
      return;
    }

    this.gold -= turret.hireCost;
    this.turretSlots[emptySlot] = turret.id;
    this.message = `${turret.name} installed in turret slot ${emptySlot + 1}.`;
  }

  buyItem(itemId: string): void {
    const item = this.items.find(candidate => candidate.id === itemId);
    if (!item) return;
    const maxCount = this.maxItemCount(item);
    if (item.count >= maxCount) {
      this.message = `${item.name} is already at max stock.`;
      return;
    }
    if (this.gold < item.priceGold) {
      this.message = `Need ${item.priceGold - this.gold} more gold for ${item.name}.`;
      return;
    }
    this.gold -= item.priceGold;
    this.itemGoldSpent += item.priceGold;
    item.count = Math.min(maxCount, item.count + 1);
    this.message = `${item.name} purchased.`;
  }

  resetItems(): void {
    for (const item of this.items) {
      item.count = item.id === 'magazine' ? BASE_MAGAZINE_COUNT : 0;
    }
    this.gold += this.itemGoldSpent;
    this.itemGoldSpent = 0;
    this.message = 'Items reset.';
  }

  reset(): void {
    this.selectedSoldierIndex = 0;
    this.selectedWeaponIndex = 3;
    this.gold = 100000;
    this.rubi = 200;
    this.itemGoldSpent = 0;
    this.message = 'Prepare your squad before the next wave.';
    this.turretSlots.fill(null);

    for (const soldier of this.soldiers) {
      soldier.hired = soldier.id === REQUIRED_SOLDIER_ID;
    }
    this.soldiers[0].equippedWeaponId = 'colt-m1911';
    this.soldiers[1].equippedWeaponId = 'bren-lmg';
    this.soldiers[2].equippedWeaponId = 'mp5k';
    this.soldiers[3].equippedWeaponId = 'm4-carbine';
    this.soldiers[4].equippedWeaponId = 'shotgun';

    for (const item of this.items) {
      item.count = item.id === 'magazine' ? BASE_MAGAZINE_COUNT : 0;
    }
  }

  useItem(itemId: string): boolean {
    const item = this.items.find(candidate => candidate.id === itemId);
    if (!item || item.count <= 0) {
      return false;
    }

    item.count -= 1;
    this.message = `${item.name} used.`;
    return true;
  }

  addGold(amount: number): void {
    this.gold += Math.max(0, Math.floor(amount));
  }

  addRubi(amount: number): void {
    this.rubi += Math.max(0, Math.floor(amount));
  }

  addItemCount(itemId: string, amount: number): void {
    const item = this.items.find(candidate => candidate.id === itemId);
    if (!item) return;
    item.count = Math.min(item.maxCount, item.count + Math.max(0, Math.floor(amount)));
  }

  private currentSoldier(): PreparationSoldier {
    return this.soldiers[this.selectedSoldierIndex];
  }

  private currentTurret(): PreparationTurret {
    return this.turrets[this.selectedSoldierIndex - this.soldiers.length];
  }

  private currentWeapon(): PreparationWeapon {
    return this.weapons[this.selectedWeaponIndex];
  }

  private syncSelectedWeaponToSoldier(): void {
    if (!this.isSoldierSelected()) return;
    const equippedId = this.currentSoldier().equippedWeaponId;
    const idx = this.weapons.findIndex(weapon => weapon.id === equippedId);
    this.selectedWeaponIndex = idx >= 0 ? idx : 0;
  }

  private maxItemCount(item: PreparationItem): number {
    return item.id === 'jacket' ? this.hiredCount() : item.maxCount;
  }

  private hiredCount(): number {
    return this.soldiers.filter(candidate => candidate.hired).length;
  }

  private getTurretById(turretId: string | null): PreparationTurret | null {
    if (!turretId) return null;
    const turret = this.turrets.find(candidate => candidate.id === turretId);
    return turret
      ? {
          ...turret,
          stats: { ...turret.stats },
          hiredCount: this.turretSlots.filter(slot => slot === turret.id).length
        }
      : null;
  }

  private isSoldierSelected(): boolean {
    return this.selectedSoldierIndex < this.soldiers.length;
  }

  private rosterLength(): number {
    return this.soldiers.length + this.turrets.length;
  }

  private wrap(value: number, length: number): number {
    return (value + length) % length;
  }
}
