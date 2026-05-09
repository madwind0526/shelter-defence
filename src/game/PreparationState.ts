import { characterAssets, itemAssets, preparationWeaponAssets } from './AssetUrls';
import {
  MAX_TURRET_SLOTS,
  PreparationItem,
  PreparationSnapshot,
  PreparationSoldier,
  PreparationTurret,
  PreparationWeapon
} from './types';

const BASE_MAGAZINE_COUNT = 10;
const REQUIRED_SOLDIER_ID = 'anais';
const LEVEL_COST_GROUP_SIZE = 10;
const SOLDIER_LEVEL_UP_BASE_RUBI_COST = 5;
const WEAPON_LEVEL_UP_BASE_RUBI_COST = 10;

export function getSoldierLevelUpRubiCost(level: number): number {
  return getTieredLevelUpRubiCost(level, SOLDIER_LEVEL_UP_BASE_RUBI_COST);
}

export function getWeaponLevelUpRubiCost(level: number): number {
  return getTieredLevelUpRubiCost(level, WEAPON_LEVEL_UP_BASE_RUBI_COST);
}

function getTieredLevelUpRubiCost(level: number, baseCost: number): number {
  const normalizedLevel = Math.max(1, Math.floor(level));
  const tier = Math.floor((normalizedLevel - 1) / LEVEL_COST_GROUP_SIZE);
  return baseCost + 10 * tier;
}

export class PreparationState {
  private selectedSoldierIndex = 0;
  private selectedWeaponIndex = 1;
  private gold = 100000;
  private rubi = 200;
  private itemGoldSpent = 0;
  private personnelGoldSpent = 0;
  private soldierRubiSpent = 0;
  private weaponRubiSpent = 0;
  private message = 'Prepare your squad before the next wave.';
  private readonly turretSlots: Array<string | null> = Array(MAX_TURRET_SLOTS).fill(null);

  private readonly soldiers: PreparationSoldier[] = [
    {
      id: 'anais',
      name: 'Anais',
      role: 'Field Medic',
      image: characterAssets.anais,
      hired: true,
      hireCost: 0,
      stats: { str: 30, dex: 80, int: 115 },
      equippedWeaponId: 'milkor-mgl',
      level: 1
    },
    {
      id: 'henry',
      name: 'Henry',
      role: 'Barricade Engineer',
      image: characterAssets.henry,
      hired: false,
      hireCost: 17000,
      stats: { str: 40, dex: 60, int: 90 },
      equippedWeaponId: 'bren-lmg',
      level: 1
    },
    {
      id: 'kim',
      name: 'Kim',
      role: 'Forward Scout',
      image: characterAssets.kim,
      hired: false,
      hireCost: 15200,
      stats: { str: 30, dex: 120, int: 75 },
      equippedWeaponId: 'mp5k',
      level: 1
    },
    {
      id: 'kino',
      name: 'Kino',
      role: 'Signal Technician',
      image: characterAssets.kino,
      hired: false,
      hireCost: 18000,
      stats: { str: 35, dex: 85, int: 125 },
      equippedWeaponId: 'm4-carbine',
      level: 1
    },
    {
      id: 'tomas',
      name: 'Tomas',
      role: 'Veteran Guard',
      image: characterAssets.tomas,
      hired: false,
      hireCost: 20000,
      stats: { str: 40, dex: 70, int: 70 },
      equippedWeaponId: 'shotgun',
      level: 1
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
      level: 1,
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
      level: 1,
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
      level: 1,
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
      level: 1,
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
      level: 1,
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
      level: 1,
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
      level: 1,
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
      level: 1,
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
      damage: 80,
      fireRate: 2,
      criticalChance: 0.1,
      maxShield: 200,
      level: 1
    }
  ];

  private readonly items: PreparationItem[] = [
    {
      id: 'jacket',
      name: 'Defense Vest',
      image: itemAssets.jacket,
      count: 0,
      maxCount: 999,
      priceGold: 4500,
      detail: 'Reduces damage.'
    },
    {
      id: 'potion-health',
      name: 'Health Potion',
      image: itemAssets.potionHealth,
      count: 0,
      maxCount: 999,
      priceGold: 1000,
      detail: 'Restores health.'
    },
    {
      id: 'potion-dex',
      name: 'Agility Potion',
      image: itemAssets.potionDex,
      count: 0,
      maxCount: 999,
      priceGold: 1000,
      detail: 'Boosts dexterity.'
    },
    {
      id: 'potion-int',
      name: 'Intelligence Potion',
      image: itemAssets.potionInt,
      count: 0,
      maxCount: 999,
      priceGold: 1000,
      detail: 'Raises critical hit chance.'
    },
    {
      id: 'repair-kit',
      name: 'Repair Kit',
      image: itemAssets.repairKit,
      count: 0,
      maxCount: 999,
      priceGold: 2500,
      detail: 'Repairs barricade.'
    },
    {
      id: 'magazine',
      name: 'Magazine',
      image: itemAssets.magazine,
      count: BASE_MAGAZINE_COUNT,
      maxCount: 999,
      priceGold: 1000,
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

  levelUpSelectedSoldier(): void {
    if (!this.isSoldierSelected()) {
      this.levelUpSelectedTurret();
      return;
    }

    const soldier = this.currentSoldier();
    if (!soldier.hired) {
      this.message = `Hire ${soldier.name} before level up.`;
      return;
    }

    const cost = getSoldierLevelUpRubiCost(soldier.level);
    if (this.rubi < cost) {
      this.message = `Need ${cost - this.rubi} more Rubi to level up.`;
      return;
    }

    soldier.level += 1;
    this.rubi -= cost;
    this.soldierRubiSpent += cost;
    this.message = `${soldier.name} reached LV${soldier.level}.`;
  }

  private levelUpSelectedTurret(): void {
    const turret = this.currentTurret();
    const installedCount = this.turretSlots.filter(slot => slot === turret.id).length;
    if (installedCount <= 0) {
      this.message = `Install ${turret.name} before level up.`;
      return;
    }
    const cost = getSoldierLevelUpRubiCost(turret.level);
    if (this.rubi < cost) {
      this.message = `Need ${cost - this.rubi} more Rubi to level up.`;
      return;
    }

    turret.level += 1;
    this.rubi -= cost;
    this.soldierRubiSpent += cost;
    this.message = `${turret.name} reached LV${turret.level}.`;
  }

  levelUpSelectedWeapon(): void {
    if (!this.isSoldierSelected()) {
      this.message = 'Turret weapons cannot be leveled here.';
      return;
    }
    const weapon = this.currentWeapon();
    const cost = getWeaponLevelUpRubiCost(weapon.level);
    if (this.rubi < cost) {
      this.message = `Need ${cost - this.rubi} more Rubi to level up.`;
      return;
    }

    weapon.level += 1;
    this.rubi -= cost;
    this.weaponRubiSpent += cost;
    this.message = `${weapon.name} reached LV${weapon.level}.`;
  }

  hireSelectedSoldier(): void {
    if (!this.isSoldierSelected()) {
      this.message = 'Select a soldier to hire or fire.';
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
      this.personnelGoldSpent = Math.max(0, this.personnelGoldSpent - refund);
      const vestRefund = this.clampVestToHiredCount();
      this.message = `${soldier.name} fired. ${refund + vestRefund} gold refunded.`;
      return;
    }
    if (this.gold < soldier.hireCost) {
      this.message = `Need ${soldier.hireCost - this.gold} more gold to hire ${soldier.name}.`;
      return;
    }
    this.gold -= soldier.hireCost;
    this.personnelGoldSpent += soldier.hireCost;
    soldier.hired = true;
    this.clampVestToHiredCount();
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
    this.personnelGoldSpent = Math.max(0, this.personnelGoldSpent - refund);
    this.message = `${turret.name} fired. ${refund} gold refunded.`;
  }

  hireSelectedTurret(): void {
    if (this.isSoldierSelected()) {
      this.message = 'Select a turret to install.';
      return;
    }

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
    this.personnelGoldSpent += turret.hireCost;
    this.turretSlots[emptySlot] = turret.id;
    this.message = `${turret.name} installed in turret slot ${emptySlot + 1}.`;
  }

  buyItem(itemId: string, count = 1): void {
    const item = this.items.find(candidate => candidate.id === itemId);
    if (!item) return;
    const maxCount = this.maxItemCount(item);
    if (item.count >= maxCount) {
      this.message = `${item.name} is already at max stock.`;
      return;
    }
    const requestedCount = Math.max(1, Math.floor(count));
    const affordableCount = Math.floor(this.gold / item.priceGold);
    const purchaseCount = Math.min(requestedCount, maxCount - item.count, affordableCount);
    if (purchaseCount <= 0) {
      this.message = `Need ${item.priceGold - this.gold} more gold for ${item.name}.`;
      return;
    }
    const cost = item.priceGold * purchaseCount;
    this.gold -= cost;
    this.itemGoldSpent += cost;
    item.count = Math.min(maxCount, item.count + purchaseCount);
    this.message = purchaseCount === 1
      ? `${item.name} purchased.`
      : `${item.name} x${purchaseCount} purchased.`;
  }

  resetItems(): void {
    for (const item of this.items) {
      item.count = item.id === 'magazine' ? BASE_MAGAZINE_COUNT : 0;
    }
    this.gold += this.itemGoldSpent;
    this.itemGoldSpent = 0;
    this.message = 'Items reset.';
  }

  resetPersonnel(): void {
    const refund = this.personnelGoldSpent;
    const rubiRefund = this.soldierRubiSpent;
    this.gold += refund;
    this.rubi += rubiRefund;
    this.personnelGoldSpent = 0;
    this.soldierRubiSpent = 0;
    this.selectedSoldierIndex = 0;
    this.selectedWeaponIndex = 1;
    this.turretSlots.fill(null);
    this.resetSoldierDefaults();
    const vestRefund = this.clampVestToHiredCount();
    const totalRefund = refund + vestRefund;
    this.message = totalRefund > 0 || rubiRefund > 0
      ? `Soldiers reset. ${totalRefund} gold / ${rubiRefund} Rubi refunded.`
      : 'Soldiers reset.';
  }

  resetWeapons(): void {
    const refund = this.weaponRubiSpent;
    for (const weapon of this.weapons) {
      weapon.level = 1;
    }
    this.rubi += refund;
    this.weaponRubiSpent = 0;
    this.message = refund > 0
      ? `Weapons reset. ${refund} Rubi refunded.`
      : 'Weapons reset.';
  }

  reset(): void {
    this.selectedSoldierIndex = 0;
    this.selectedWeaponIndex = 1;
    this.gold = 100000;
    this.rubi = 200;
    this.itemGoldSpent = 0;
    this.personnelGoldSpent = 0;
    this.soldierRubiSpent = 0;
    this.weaponRubiSpent = 0;
    this.message = 'Prepare your squad before the next wave.';
    this.turretSlots.fill(null);

    this.resetSoldierDefaults();
    for (const weapon of this.weapons) {
      weapon.level = 1;
    }

    for (const item of this.items) {
      item.count = item.id === 'magazine' ? BASE_MAGAZINE_COUNT : 0;
    }
  }

  private resetSoldierDefaults(): void {
    for (const soldier of this.soldiers) {
      soldier.hired = soldier.id === REQUIRED_SOLDIER_ID;
    }
    this.soldiers[0].equippedWeaponId = 'milkor-mgl';
    this.soldiers[1].equippedWeaponId = 'bren-lmg';
    this.soldiers[2].equippedWeaponId = 'mp5k';
    this.soldiers[3].equippedWeaponId = 'm4-carbine';
    this.soldiers[4].equippedWeaponId = 'shotgun';
    for (const soldier of this.soldiers) {
      soldier.level = 1;
    }
    for (const turret of this.turrets) {
      turret.level = 1;
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

  private clampVestToHiredCount(): number {
    const vest = this.items.find(candidate => candidate.id === 'jacket');
    if (!vest || vest.count <= this.hiredCount()) {
      return 0;
    }

    const removedCount = vest.count - this.hiredCount();
    const refund = removedCount * vest.priceGold;
    vest.count = this.hiredCount();
    this.gold += refund;
    this.itemGoldSpent = Math.max(0, this.itemGoldSpent - refund);
    return refund;
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
