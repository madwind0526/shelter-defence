import { Player } from './Player';
import { WeaponController } from './Weapon';
import { upgradeAssets } from './AssetUrls';
import { Upgrade } from './types';

export class UpgradeSystem {
  constructor(
    private readonly player: Player,
    private readonly weapon: WeaponController
  ) {}

  getChoices(): Upgrade[] {
    const upgrades: Upgrade[] = [
      {
        id: 'damage',
        title: 'Hot Rounds',
        detail: '+18% weapon damage',
        icon: upgradeAssets.hotRounds,
        apply: () => {
          this.weapon.damageMultiplier += 0.18;
        }
      },
      {
        id: 'fireRate',
        title: 'Light Trigger',
        detail: '+15% fire rate',
        icon: upgradeAssets.lightTrigger,
        apply: () => {
          this.weapon.fireRateMultiplier += 0.15;
        }
      },
      {
        id: 'magazine',
        title: 'Extended Mag',
        detail: '+4 magazine size',
        icon: upgradeAssets.extendedMag,
        apply: () => {
          this.weapon.increaseMagazine(4);
        }
      },
      {
        id: 'defense',
        title: 'Reinforced Nest',
        detail: '-10% incoming damage',
        icon: upgradeAssets.reinforcedNest,
        apply: () => {
          this.player.incomingDamageMultiplier *= 0.9;
        }
      },
      {
        id: 'maxHealth',
        title: 'Field Kit',
        detail: '+18 max health and heal',
        icon: upgradeAssets.fieldKit,
        apply: () => {
          this.player.maxHealth += 18;
          this.player.heal(30);
        }
      },
      {
        id: 'reloadSpeed',
        title: 'Fast Hands',
        detail: '-14% reload time',
        icon: upgradeAssets.fastHands,
        apply: () => {
          this.weapon.reloadMultiplier *= 0.86;
        }
      }
    ];

    return upgrades.sort(() => Math.random() - 0.5).slice(0, 3);
  }

  resetStageUpgrades(): void {
    this.player.incomingDamageMultiplier = 1;
    this.weapon.resetStageModifiers();
  }
}
