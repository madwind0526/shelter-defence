import { characterAssets, itemAssets, preparationWeaponAssets } from './AssetUrls';
import {
  PreparationItem,
  PreparationSnapshot,
  PreparationSoldier,
  PreparationWeapon
} from './types';

export class PreparationState {
  private selectedSoldierIndex = 0;
  private selectedWeaponIndex = 3;
  private gold = 4567;
  private rubi = 200;
  private itemGoldSpent = 0;
  private message = 'Prepare your squad before the next wave.';

  private readonly soldiers: PreparationSoldier[] = [
    {
      id: 'anais',
      name: 'Anais',
      role: 'Field Medic',
      image: characterAssets.anais,
      hired: true,
      hireCost: 0,
      stats: { str: 64, dex: 82, int: 116 },
      equippedWeaponId: 'colt-m1911'
    },
    {
      id: 'henry',
      name: 'Henry',
      role: 'Barricade Engineer',
      image: characterAssets.henry,
      hired: false,
      hireCost: 850,
      stats: { str: 108, dex: 58, int: 88 },
      equippedWeaponId: 'bren-lmg'
    },
    {
      id: 'kim',
      name: 'Kim',
      role: 'Forward Scout',
      image: characterAssets.kim,
      hired: false,
      hireCost: 760,
      stats: { str: 72, dex: 118, int: 76 },
      equippedWeaponId: 'mp5k'
    },
    {
      id: 'kino',
      name: 'Kino',
      role: 'Signal Technician',
      image: characterAssets.kino,
      hired: false,
      hireCost: 900,
      stats: { str: 70, dex: 84, int: 124 },
      equippedWeaponId: 'm4-carbine'
    },
    {
      id: 'tomas',
      name: 'Tomas',
      role: 'Veteran Guard',
      image: characterAssets.tomas,
      hired: false,
      hireCost: 1000,
      stats: { str: 118, dex: 72, int: 68 },
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
      trait: 'High stability, heavy weight'
    },
    {
      id: 'milkor-mgl',
      name: 'Milkor MGL',
      image: preparationWeaponAssets.milkorMgl,
      summary: 'Revolver-style grenade launcher for crowd control.',
      magazineSize: 6,
      trait: 'Explosive area damage'
    },
    {
      id: 'ai-aw-sniper',
      name: 'AI AW Sniper Rifle',
      image: preparationWeaponAssets.aiAwSniper,
      summary: 'Precision bolt-action rifle for long-range threats.',
      magazineSize: 5,
      trait: 'Extreme range, slow fire'
    },
    {
      id: 'colt-m1911',
      name: 'Colt M1911 Pistol',
      image: preparationWeaponAssets.coltM1911,
      summary: 'Compact sidearm with reliable stopping power.',
      magazineSize: 7,
      trait: 'Fast handling'
    },
    {
      id: 'colt-saa',
      name: 'Colt SAA Revolver',
      image: preparationWeaponAssets.coltSaa,
      summary: 'Classic six-shot revolver with deliberate fire.',
      magazineSize: 6,
      trait: 'High impact sidearm'
    },
    {
      id: 'mp5k',
      name: 'Heckler Koch MP5K',
      image: preparationWeaponAssets.mp5k,
      summary: 'Compact SMG for fast close-range defense.',
      magazineSize: 30,
      trait: 'Very high fire rate'
    },
    {
      id: 'shotgun',
      name: 'Pump-Action Shotgun',
      image: preparationWeaponAssets.shotgun,
      summary: 'Short-barreled shotgun for near barricade threats.',
      magazineSize: 8,
      trait: 'Close-range spread'
    },
    {
      id: 'm4-carbine',
      name: 'M4 Carbine',
      image: preparationWeaponAssets.m4Carbine,
      summary: 'Lightweight all-round rifle for flexible defense.',
      magazineSize: 30,
      trait: 'Balanced range and fire rate'
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
      count: 0,
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
      this.soldiers.length
    );
    this.syncSelectedWeaponToSoldier();
    this.message = `${this.currentSoldier().name} selected.`;
  }

  selectWeapon(direction: 1 | -1): void {
    this.selectedWeaponIndex = this.wrap(
      this.selectedWeaponIndex + direction,
      this.weapons.length
    );
    this.message = `${this.currentWeapon().name} selected. Click the weapon to equip.`;
  }

  equipSelectedWeapon(): void {
    const soldier = this.currentSoldier();
    const weapon = this.currentWeapon();
    soldier.equippedWeaponId = weapon.id;
    this.message = `${soldier.name} equipped ${weapon.name}.`;
  }

  hireSelectedSoldier(): void {
    const soldier = this.currentSoldier();
    if (soldier.hired) {
      this.message = `${soldier.name} is already hired.`;
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
      item.count = 0;
    }
    this.gold += this.itemGoldSpent;
    this.itemGoldSpent = 0;
    this.message = 'Items reset.';
  }

  private currentSoldier(): PreparationSoldier {
    return this.soldiers[this.selectedSoldierIndex];
  }

  private currentWeapon(): PreparationWeapon {
    return this.weapons[this.selectedWeaponIndex];
  }

  private syncSelectedWeaponToSoldier(): void {
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

  private wrap(value: number, length: number): number {
    return (value + length) % length;
  }
}
