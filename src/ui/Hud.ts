import {
  BarricadeSnapshot,
  PreparationSnapshot,
  PreparationSoldier,
  PreparationTurret,
  PreparationWeapon,
  SoldierHealthSnapshot,
  TurretSnapshot,
  Upgrade
} from '../game/types';
import {
  hudAssets,
  imageAssets,
  introAssets,
  mainHudAssets,
  preparationUiAssets
} from '../game/AssetUrls';
import type { EnemyHealthBar } from '../game/Enemy';

const leaderboardKey = 'shelter-defence-top-ranks';
const leaderboardLimit = 10;

interface CheatHudState {
  visible: boolean;
  infiniteAmmo: boolean;
  powerShot: boolean;
  noReload: boolean;
  jumpUsed: boolean;
}

interface RankEntry {
  name: string;
  score: number;
  stage: number;
}

interface HudState {
  health: number;
  maxHealth: number;
  ammo: number;
  magazine: number;
  stage: number;
  wave: number;
  waveInStage: number;
  wavesPerStage: number;
  waveTotal: number;
  waveRemaining: number;
  kills: number;
  score: number;
  weaponName: string;
  reloading: boolean;
  reloadProgress: number;
  loadout: PreparationSnapshot;
  grenadeCount: number;
  airStrikeCount: number;
  turrets: TurretSnapshot[];
  barricade: BarricadeSnapshot;
  soldierHealth: SoldierHealthSnapshot[];
  enemyHealthBars: EnemyHealthBar[];
  cheats: CheatHudState;
  aimX: number;
  aimY: number;
}

interface PreparationHandlers {
  onBack: () => void;
  onStart: () => void;
  onPrevSoldier: () => void;
  onNextSoldier: () => void;
  onPrevWeapon: () => void;
  onNextWeapon: () => void;
  onEquipWeapon: () => void;
  onHire: () => void;
  onFireTurret: () => void;
  onBuyItem: (itemId: string) => void;
  onResetItems: () => void;
}

interface DerivedPreparationStats {
  str: number;
  dex: number;
  int: number;
  health: number;
  damageMultiplier: number;
  speedMultiplier: number;
  criticalMultiplier: number;
  damage: number;
  fireRate: number;
  criticalChance: number;
}

interface ClearReward {
  gold: number;
  rubi: number;
  magazines: number;
}

export class Hud {
  private readonly shell: HTMLDivElement;
  private readonly stats: HTMLDivElement;
  private readonly overlay: HTMLDivElement;
  private readonly crosshair: HTMLDivElement;

  constructor(root: HTMLElement) {
    this.shell = document.createElement('div');
    this.shell.className = 'game-shell';

    this.stats = document.createElement('div');
    this.stats.className = 'hud';

    this.crosshair = document.createElement('div');
    this.crosshair.className = 'crosshair';
    this.crosshair.innerHTML = `<img src="${hudAssets.crosshair}" alt="" />`;

    this.overlay = document.createElement('div');
    this.overlay.className = 'overlay';

    this.shell.append(this.stats, this.crosshair, this.overlay);
    root.append(this.shell);
  }

  getCanvasHost(): HTMLElement {
    return this.shell;
  }

  update(state: HudState): void {
    this.stats.innerHTML = this.renderMainHud(state);
  }

  private renderMainHud(state: HudState): string {
    const waveTotal = Math.max(1, state.waveTotal);
    const waveRemaining = Math.max(0, state.waveRemaining);
    const gold = state.loadout.gold;
    const rubi = state.loadout.rubi;
    const barricadePercent = Math.min(
      100,
      Math.max(0, (state.barricade.health / Math.max(1, state.barricade.maxHealth)) * 100)
    );

    return `
      <div class="main-hud">
        <div class="main-squad-roster">
          ${this.renderMainSoldiers(state)}
        </div>

        <div class="main-wave-card">
          <strong>STAGE ${Math.max(1, state.stage)} WAVES (${Math.max(1, state.waveInStage)}/${state.wavesPerStage})</strong>
          <b>${waveRemaining}/${waveTotal} Zombies are remaining</b>
        </div>

        <div class="main-top-controls">
          ${this.renderTopControl(mainHudAssets.menu, 'MENU', 'F1')}
          ${this.renderTopControl(mainHudAssets.settings, 'SETTINGS', 'F2')}
          ${this.renderTopControl(mainHudAssets.pause, 'PAUSE', 'F3')}
        </div>
        ${this.renderCheatIndicator(state.cheats)}

        <div class="main-special-stack">
          <div class="main-special${state.grenadeCount > 0 ? ' ready' : ' unavailable'}">
            <em>F4</em>
            <strong>GRENADE</strong>
            <img class="main-special-icon" src="${mainHudAssets.grenade}" alt="" />
            <small>${state.grenadeCount}</small>
          </div>
          <div class="main-special${state.airStrikeCount > 0 ? ' ready' : ' unavailable'}">
            <em>F5</em>
            <strong>AIR STRIKE</strong>
            <img class="main-special-icon" src="${mainHudAssets.airAttack}" alt="" />
            <small>${state.airStrikeCount}</small>
          </div>
        </div>

        <div
          class="main-crosshair-mark"
          style="left: ${50 + state.aimX * 50}%; top: ${50 - state.aimY * 50}%"
        ></div>

        ${this.renderEnemyHealthBars(state.enemyHealthBars)}

        <div class="main-field-defense">
          ${this.renderMainFieldTurrets(state.turrets)}
          <img class="main-field-barricade" src="${mainHudAssets.barricadeBlock}" alt="" />
        </div>

        <div class="main-barricade">
          <span>BARRICADE</span>
          <strong>${Math.ceil(state.barricade.health)} / ${state.barricade.maxHealth} HP</strong>
          <i><span style="width: ${barricadePercent}%"></span></i>
        </div>

        <div class="main-item-bar">
          ${this.renderMainItems(state.loadout)}
        </div>

        <div class="main-score">
          <span>Score <b>${this.formatNumber(state.score)}</b></span>
          <span>Gold <b>${this.formatNumber(gold)}</b></span>
          <span>Rubi <b>${this.formatNumber(rubi)}</b></span>
        </div>

        <div class="main-turret-panel">
          <strong>TURRET</strong>
          <div class="main-turret-grid">
            ${this.renderMainTurrets(state.turrets)}
          </div>
        </div>
      </div>
    `;
  }

  private renderEnemyHealthBars(enemyHealthBars: EnemyHealthBar[]): string {
    if (enemyHealthBars.length === 0) return '';

    return `
      <div class="main-enemy-health-layer">
        ${enemyHealthBars
          .map(bar => `
            <span
              class="main-enemy-health"
              style="left: ${bar.x}%; top: ${bar.y}%;"
            >
              <i style="width: ${bar.healthPercent}%"></i>
            </span>
          `)
          .join('')}
      </div>
    `;
  }

  private renderMainSoldiers(state: HudState): string {
    const magazineItemCount = this.getItemCount(state.loadout, 'magazine');
    const soldiers = state.loadout.soldiers.slice(0, 5);
    const magazineCount = magazineItemCount;

    return soldiers
      .map((soldier, index) => {
        if (!soldier.hired) {
          return `
            <div class="main-soldier-row empty">
              <span class="main-soldier-portrait"></span>
              <span class="main-soldier-weapon"></span>
              <span class="main-ammo-box"></span>
              <span class="main-mag-box"></span>
            </div>
          `;
        }

        const weapon =
          state.loadout.weapons.find(candidate => candidate.id === soldier.equippedWeaponId) ??
          state.loadout.weapons[0];
        const soldierHealth = state.soldierHealth.find(candidate => candidate.soldierId === soldier.id);
        const healthPercent = soldierHealth
          ? Math.round(
              Math.min(1, Math.max(0, soldierHealth.health / Math.max(1, soldierHealth.maxHealth))) * 100
            )
          : 100;
        const healthColor = healthPercent <= 20 ? '#ff1828' : '#20c8ff';
        const isDead = soldierHealth ? soldierHealth.health <= 0 : false;
        const bulletCount = soldierHealth?.ammo ?? weapon.magazineSize;
        const bulletLabel = state.cheats.infiniteAmmo ? '&infin;' : String(bulletCount);
        const soldierMagazineCount = soldierHealth?.magazines ?? magazineCount;
        return `
          <div class="main-soldier-row${isDead ? ' dead' : ''}">
            <span class="main-soldier-portrait" style="--health-percent: ${healthPercent}%; --health-color: ${healthColor}">
              <img src="${soldier.image}" alt="${soldier.name}" />
              <i style="--player-frame: url('${mainHudAssets.player}')"></i>
            </span>
            <span class="main-soldier-weapon">
              <img src="${weapon.image}" alt="${weapon.name}" />
            </span>
            <span class="main-ammo-box">
              <img src="${mainHudAssets.bullet}" alt="" />
              <b>${bulletLabel}</b>
            </span>
            <span class="main-mag-box">
              <img src="${mainHudAssets.magazine}" alt="" />
              <b>${soldierMagazineCount}</b>
            </span>
          </div>
        `;
      })
      .join('');
  }

  private renderMainItems(loadout: PreparationSnapshot): string {
    const itemIds = ['potion-health', 'potion-dex', 'potion-int', 'repair-kit'];
    return itemIds
      .map((itemId, index) => {
        const item = loadout.items.find(candidate => candidate.id === itemId);
        if (!item) return '';
        return `
          <div class="main-item-slot">
            <span>${index + 1}</span>
            <img class="${item.id === 'repair-kit' ? 'repair-kit' : ''}" src="${this.getMainItemImage(item.id)}" alt="${item.name}" />
            <b>${item.count}</b>
          </div>
        `;
      })
      .join('');
  }

  private renderMainTurrets(turrets: TurretSnapshot[]): string {
    return Array.from({ length: 4 }, (_, index) => {
      const turret = turrets[index];
      const isInstalled = Boolean(turret?.installed);
      const shieldPercent = isInstalled
        ? Math.min(100, Math.max(0, (turret.shield / turret.maxShield) * 100))
        : 0;

      return `
        <span class="main-turret-slot${isInstalled ? ' ready' : ''}">
          ${
            isInstalled
              ? `
                <img class="main-turret-unit" src="${mainHudAssets.turret}" alt="${turret.name ?? ''}" />
                <i><span style="width: ${shieldPercent}%"></span></i>
              `
              : ''
          }
        </span>
      `;
    }).join('');
  }

  private renderMainFieldTurrets(turrets: TurretSnapshot[]): string {
    return Array.from({ length: 4 }, (_, index) => {
      const turret = turrets[index];
      if (!turret?.installed) return '';

      return `
        <img
          class="main-field-turret turret-${index + 1}"
          src="${this.getMainTurretImage(turret)}"
          alt="${turret.name ?? ''}"
        />
      `;
    }).join('');
  }

  private renderTopControl(icon: string, label: string, hotkey: string): string {
    return `
      <span class="main-control">
        <em>${hotkey}</em>
        <img class="main-control-icon" src="${icon}" alt="" />
        <b>${label}</b>
      </span>
    `;
  }

  private renderCheatIndicator(cheats: CheatHudState): string {
    if (!cheats.visible) return '';

    const items = [
      ['Bullet', cheats.infiniteAmmo],
      ['Power', cheats.powerShot],
      ['Reload', cheats.noReload],
      ['Jump', cheats.jumpUsed]
    ] as const;

    return `
      <div class="main-cheat-indicator">
        ${items
          .map(([label, active]) => `<span class="${active ? 'active' : ''}">${label}</span>`)
          .join('')}
      </div>
    `;
  }

  private getMainTurretImage(turret: TurretSnapshot): string {
    const active = turret.shield > 0;
    if (turret.kind === 'flame') {
      return active ? mainHudAssets.turret2On : mainHudAssets.turret2Off;
    }
    return active ? mainHudAssets.turret1On : mainHudAssets.turret1Off;
  }

  private getItemCount(loadout: PreparationSnapshot, itemId: string, fallback = 0): number {
    return loadout.items.find(item => item.id === itemId)?.count ?? fallback;
  }

  private getMainItemImage(itemId: string): string {
    const images: Record<string, string> = {
      'potion-health': mainHudAssets.potionHealth,
      'potion-dex': mainHudAssets.potionDex,
      'potion-int': mainHudAssets.potionInt,
      'repair-kit': mainHudAssets.repairKit
    };
    return images[itemId] ?? '';
  }

  private formatNumber(value: number): string {
    return Math.max(0, Math.floor(value)).toLocaleString();
  }

  showIntro(onPreparation: () => void, onStart: () => void): void {
    this.overlay.className = 'overlay visible intro-overlay';
    this.overlay.innerHTML = `
      <section class="intro-screen" style="--intro-bg: url('${introAssets.background}')">
        <div class="intro-vignette"></div>
        <img class="intro-logo" src="${introAssets.logo}" alt="Shelter Defence" />
        <div class="intro-buttons">
          <img src="${introAssets.buttons}" alt="" />
          <button class="intro-button-hotspot intro-preparation" type="button" aria-label="Preparation"></button>
          <button class="intro-button-hotspot intro-start" type="button" aria-label="Start Game"></button>
        </div>
      </section>
    `;
    this.overlay
      .querySelector<HTMLButtonElement>('.intro-preparation')
      ?.addEventListener('click', onPreparation, { once: true });
    this.overlay
      .querySelector<HTMLButtonElement>('.intro-start')
      ?.addEventListener('click', onStart, { once: true });
  }

  showPreparationPlaceholder(onBack: () => void, onStart: () => void): void {
    this.overlay.className = 'overlay visible intro-overlay';
    this.overlay.innerHTML = `
      <section class="intro-screen" style="--intro-bg: url('${introAssets.background}')">
        <div class="intro-vignette"></div>
        <article class="preparation-placeholder">
          <p class="eyebrow">Preparation</p>
          <h2>Loadout bay opening soon.</h2>
          <p>Hire soldiers, assign weapons, and buy combat items here.</p>
          <div class="placeholder-actions">
            <button class="secondary-action" type="button">Back</button>
            <button class="primary-action" type="button">Start Game</button>
          </div>
        </article>
      </section>
    `;
    this.overlay
      .querySelector<HTMLButtonElement>('.secondary-action')
      ?.addEventListener('click', onBack, { once: true });
    this.overlay
      .querySelector<HTMLButtonElement>('.primary-action')
      ?.addEventListener('click', onStart, { once: true });
  }

  showPreparation(state: PreparationSnapshot, handlers: PreparationHandlers): void {
    const selectedTurret = this.getSelectedPreparationTurret(state);
    const soldier = selectedTurret ? null : state.soldiers[state.selectedSoldierIndex];
    const weapon = state.weapons[state.selectedWeaponIndex];
    const equippedWeapon = soldier
      ? state.weapons.find(candidate => candidate.id === soldier.equippedWeaponId) ?? weapon
      : weapon;
    const derivedStats = soldier ? this.getDerivedPreparationStats(soldier, equippedWeapon) : null;
    const hiredCount = state.soldiers.filter(candidate => candidate.hired).length;
    const isRequiredSoldier = soldier?.id === 'anais';
    const selectedName = soldier?.name ?? selectedTurret?.name ?? '';
    const selectedRole = soldier?.role ?? selectedTurret?.name ?? '';
    const selectedImage = soldier?.image ?? selectedTurret?.image ?? '';
    const selectedStats = soldier
      ? {
          str: Math.round(derivedStats?.str ?? soldier.stats.str),
          dex: Math.round(derivedStats?.dex ?? soldier.stats.dex),
          int: Math.round(derivedStats?.int ?? soldier.stats.int)
        }
      : selectedTurret?.stats ?? { str: 0, dex: 0, int: 0 };

    this.overlay.className = 'overlay visible preparation-overlay';
    this.overlay.innerHTML = `
      <section class="preparation-screen" style="--prep-bg: url('${preparationUiAssets.background}')">
        <header class="preparation-header">
          <button class="prep-start" type="button" aria-label="Start Game">
            <img class="prep-start-icon" src="${preparationUiAssets.startIcon}" alt="" />
            <img class="prep-start-label" src="${preparationUiAssets.startButton}" alt="Start Game" />
          </button>
          <div class="prep-currency">
            <span>
              <img src="${preparationUiAssets.gold}" alt="" />
              <b>${state.gold.toLocaleString()}</b>
            </span>
            <span>
              <img src="${preparationUiAssets.rubi}" alt="" />
              <b>${state.rubi.toLocaleString()}</b>
            </span>
          </div>
        </header>

        <section class="prep-soldier-zone">
          <h2>Soldiers <span>(${hiredCount}/5)</span></h2>
          <div class="prep-soldier-card">
            <button class="prep-arrow prep-prev-soldier" type="button" aria-label="Previous soldier">
              <img src="${preparationUiAssets.leftArrow}" alt="" />
            </button>
            <img class="prep-soldier-art${selectedTurret ? ' turret-art' : ''}" src="${selectedImage}" alt="${selectedName}" />
            <button class="prep-arrow prep-next-soldier" type="button" aria-label="Next soldier">
              <img src="${preparationUiAssets.rightArrow}" alt="" />
            </button>
            ${
              soldier && derivedStats
                ? this.renderPreparationInfoPanel(soldier, equippedWeapon, derivedStats)
                : selectedTurret
                  ? this.renderPreparationTurretInfoPanel(selectedTurret)
                  : ''
            }
          </div>
          <div class="prep-soldier-name">
            <strong>${selectedName}</strong>
            <span>${selectedRole}</span>
          </div>
          <div class="prep-stats">
            <span>STR <b>${selectedStats.str}</b></span>
            <span>DEX <b>${selectedStats.dex}</b></span>
            <span>INT <b>${selectedStats.int}</b></span>
          </div>
          ${
            selectedTurret
              ? this.renderPreparationTurretActions(selectedTurret, state.turretSlots)
              : `
                <button class="prep-hire${soldier?.hired ? ' fire' : ''}${isRequiredSoldier ? ' locked' : ''}" type="button"${isRequiredSoldier ? ' disabled' : ''}>
                  ${isRequiredSoldier ? 'Hired' : soldier?.hired ? `Fire ${Math.floor((soldier?.hireCost ?? 0) / 2)}` : `Hire ${soldier?.hireCost ?? 0}`}
                </button>
              `
          }
        </section>

        <aside class="prep-inventory-strip${selectedTurret ? ' turret-selected' : ''}">
          <div class="prep-equipped-weapon">
            ${soldier ? `<img src="${equippedWeapon.image}" alt="${equippedWeapon.name}" />` : ''}
          </div>
          <div class="prep-strip-list">
            ${state.items
              .map(
                item => `
                  <div class="prep-strip-item">
                    <img src="${item.image}" alt="${item.name}" />
                    <b>${this.formatItemCount(item.count)}</b>
                  </div>
                `
              )
              .join('')}
          </div>
        </aside>

        <section class="prep-loadout-zone">
          <div class="prep-weapon-section${selectedTurret ? ' disabled' : ''}">
            <h2>WEAPON</h2>
            <div class="prep-weapon-body">
              <button class="prep-arrow prep-prev-weapon" type="button" aria-label="Previous weapon"${selectedTurret ? ' disabled' : ''}>
                <img src="${preparationUiAssets.leftArrow}" alt="" />
              </button>
              <div class="prep-weapon-stack">
                <button class="prep-weapon-card" type="button" aria-label="Equip ${weapon.name}"${selectedTurret ? ' disabled' : ''}>
                  ${selectedTurret ? `<img src="${selectedTurret.image}" alt="${selectedTurret.name}" />` : `<img src="${weapon.image}" alt="${weapon.name}" />`}
                </button>
                <div class="prep-weapon-copy">
                  <strong>${selectedTurret ? 'FIXED TURRET WEAPON' : weapon.name}</strong>
                  <span>${selectedTurret ? 'Turrets do not equip soldier weapons.' : weapon.summary}</span>
                  <small>${selectedTurret ? `${selectedTurret.damage} damage - ${selectedTurret.fireRate} speed` : `${weapon.magazineSize} rounds - ${weapon.trait}`}</small>
                </div>
              </div>
              <button class="prep-arrow prep-next-weapon" type="button" aria-label="Next weapon"${selectedTurret ? ' disabled' : ''}>
                <img src="${preparationUiAssets.rightArrow}" alt="" />
              </button>
            </div>
          </div>

          <div class="prep-items-section">
            <h2>
              <span>ITEMS</span>
              <button class="prep-reset-items" type="button" aria-label="Reset items">
                <img src="${preparationUiAssets.reset}" alt="Reset" />
              </button>
            </h2>
            <div class="prep-item-grid">
              ${state.items
                .map(
                  item => `
                    <button class="prep-item-card" type="button" data-item-id="${item.id}"${item.count >= item.maxCount ? ' disabled' : ''}>
                      <span class="prep-item-content">
                        <img src="${item.image}" alt="${item.name}" />
                        <strong>${item.name}</strong>
                      <span>${item.detail}</span>
                      </span>
                      <small>${item.priceGold}</small>
                    </button>
                  `
                )
                .join('')}
            </div>
          </div>
        </section>

        <p class="prep-message">${state.message}</p>
      </section>
    `;

    this.overlay
      .querySelector<HTMLButtonElement>('.prep-start')
      ?.addEventListener('click', handlers.onStart, { once: true });
    this.overlay
      .querySelector<HTMLButtonElement>('.prep-prev-soldier')
      ?.addEventListener('click', handlers.onPrevSoldier, { once: true });
    this.overlay
      .querySelector<HTMLButtonElement>('.prep-next-soldier')
      ?.addEventListener('click', handlers.onNextSoldier, { once: true });
    this.overlay
      .querySelector<HTMLButtonElement>('.prep-prev-weapon')
      ?.addEventListener('click', handlers.onPrevWeapon, { once: true });
    this.overlay
      .querySelector<HTMLButtonElement>('.prep-next-weapon')
      ?.addEventListener('click', handlers.onNextWeapon, { once: true });
    this.overlay
      .querySelector<HTMLButtonElement>('.prep-weapon-card')
      ?.addEventListener('click', handlers.onEquipWeapon, { once: true });
    this.overlay
      .querySelector<HTMLButtonElement>('.prep-hire')
      ?.addEventListener('click', handlers.onHire, { once: true });
    this.overlay
      .querySelector<HTMLButtonElement>('.prep-fire-turret')
      ?.addEventListener('click', handlers.onFireTurret, { once: true });
    for (const itemButton of this.overlay.querySelectorAll<HTMLButtonElement>('.prep-item-card')) {
      itemButton.addEventListener('click', () => handlers.onBuyItem(itemButton.dataset.itemId ?? ''), {
        once: true
      });
    }
    this.overlay
      .querySelector<HTMLButtonElement>('.prep-reset-items')
      ?.addEventListener('click', handlers.onResetItems, { once: true });
  }

  showUpgrades(choices: Upgrade[], reward: ClearReward, onPick: (upgrade: Upgrade) => void): void {
    this.overlay.className = 'overlay visible';
    this.overlay.innerHTML = `
      <section class="panel upgrade-panel">
        <h2>CHOOSE A CARD</h2>
        <p class="clear-reward">+${reward.magazines} MAGAZINE / +${this.formatNumber(reward.gold)} GOLD / +${reward.rubi} RUBI</p>
        <div class="upgrade-grid"></div>
      </section>
    `;

    const grid = this.overlay.querySelector<HTMLDivElement>('.upgrade-grid');
    if (!grid) return;

    for (const choice of choices) {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'upgrade-choice';
      button.innerHTML = `
        <span class="upgrade-icon">
          ${choice.icon ? `<img src="${choice.icon}" alt="" />` : ''}
        </span>
        <span class="upgrade-copy">
          <strong>${choice.title}</strong>
          <span>${choice.detail}</span>
        </span>
      `;
      button.addEventListener('click', () => onPick(choice), { once: true });
      grid.append(button);
    }
  }

  showStageClear(
    stage: number,
    reward: ClearReward,
    hasNextStage: boolean,
    onNext: () => void
  ): void {
    this.overlay.className = 'overlay visible';
    this.overlay.innerHTML = `
      <section class="panel stage-clear-panel">
        <img class="next-stage-image" src="${imageAssets.nextStage}" alt="Next Stage" />
        <h2>Stage ${stage} Clear</h2>
        <p class="clear-reward">+${this.formatNumber(reward.gold)} Gold / +${reward.rubi} Rubi</p>
        <p>${hasNextStage ? 'Next stage begins with stronger zombies.' : 'All prepared stages are cleared.'}</p>
        <button type="button">${hasNextStage ? 'Next Stage' : 'Title'}</button>
      </section>
    `;
    this.overlay.querySelector('button')?.addEventListener('click', onNext, {
      once: true
    });
  }

  showMainControlPanel(title: string, detail: string, onResume: () => void): void {
    this.overlay.className = 'overlay visible';
    this.overlay.innerHTML = `
      <section class="panel main-control-panel">
        <p class="eyebrow">${title}</p>
        <h2>${title}</h2>
        <p>${detail}</p>
        <button type="button">Resume</button>
      </section>
    `;
    this.overlay.querySelector('button')?.addEventListener('click', onResume, {
      once: true
    });
  }

  showMainMenu(handlers: {
    onPreparation: () => void;
    onExit: () => void;
    onCheat: () => void;
    onResume: () => void;
  }): void {
    this.overlay.className = 'overlay visible';
    this.overlay.innerHTML = `
      <section class="panel main-menu-panel">
        <h2>MENU</h2>
        <div class="menu-action-grid">
          <button class="menu-prep" type="button">STORE</button>
          <button class="menu-cheat" type="button">CHEAT</button>
          <button class="menu-resume" type="button">Resume</button>
          <button class="menu-exit" type="button">Exit</button>
        </div>
      </section>
    `;
    this.overlay.querySelector<HTMLButtonElement>('.menu-prep')?.addEventListener('click', handlers.onPreparation, { once: true });
    this.overlay.querySelector<HTMLButtonElement>('.menu-exit')?.addEventListener('click', handlers.onExit, { once: true });
    this.overlay.querySelector<HTMLButtonElement>('.menu-cheat')?.addEventListener('click', handlers.onCheat, { once: true });
    this.overlay.querySelector<HTMLButtonElement>('.menu-resume')?.addEventListener('click', handlers.onResume, { once: true });
  }

  showCheatMenu(cheats: {
    infiniteAmmo: boolean;
    powerShot: boolean;
    noReload: boolean;
  }, handlers: {
    onInfiniteAmmo: () => void;
    onPowerShot: () => void;
    onNoReload: () => void;
    onJumpStage: () => void;
    onRank: () => void;
    onBack: () => void;
  }): void {
    this.overlay.className = 'overlay visible';
    this.overlay.innerHTML = `
      <section class="panel cheat-panel">
        <p class="eyebrow">Menu</p>
        <h2>CHEAT MODE</h2>
        <div class="menu-action-grid cheat-grid">
          <button class="cheat-infinite" type="button">Infinite Bullet: ${cheats.infiniteAmmo ? 'ON' : 'OFF'}</button>
          <button class="cheat-power" type="button">Power Shooting: ${cheats.powerShot ? 'ON' : 'OFF'}</button>
          <button class="cheat-reload" type="button">No Reload: ${cheats.noReload ? 'ON' : 'OFF'}</button>
          <button class="cheat-stage" type="button">Jump to Stage #</button>
          <button class="cheat-rank" type="button">Go to Rank</button>
          <button class="cheat-back" type="button">Back</button>
        </div>
      </section>
    `;
    this.overlay.querySelector<HTMLButtonElement>('.cheat-infinite')?.addEventListener('click', handlers.onInfiniteAmmo, { once: true });
    this.overlay.querySelector<HTMLButtonElement>('.cheat-power')?.addEventListener('click', handlers.onPowerShot, { once: true });
    this.overlay.querySelector<HTMLButtonElement>('.cheat-reload')?.addEventListener('click', handlers.onNoReload, { once: true });
    this.overlay.querySelector<HTMLButtonElement>('.cheat-stage')?.addEventListener('click', handlers.onJumpStage, { once: true });
    this.overlay.querySelector<HTMLButtonElement>('.cheat-rank')?.addEventListener('click', handlers.onRank, { once: true });
    this.overlay.querySelector<HTMLButtonElement>('.cheat-back')?.addEventListener('click', handlers.onBack, { once: true });
  }

  showGameOver(
    score: number,
    stage: number,
    onExit: () => void,
    onRankOpen?: () => void
  ): void {
    this.overlay.className = 'overlay visible';
    this.overlay.innerHTML = `
      <section class="gameover-panel">
        <img class="gameover-image" src="${imageAssets.gameOver}" alt="Game Over" />
        <p class="gameover-score">Score ${this.formatNumber(score)}</p>
        <p class="gameover-prompt">Click</p>
      </section>
    `;
    this.overlay.querySelector('.gameover-panel')?.addEventListener(
      'click',
      () => {
        if (this.qualifiesForLeaderboard(score)) {
          this.showNameEntry(score, stage, onExit, onRankOpen);
        } else {
          this.showTopRanks(onExit, undefined, onRankOpen);
        }
      },
      { once: true }
    );
  }

  showTopRanks(
    onExit: () => void,
    entries = this.loadLeaderboard(),
    onOpen?: () => void
  ): void {
    onOpen?.();
    this.overlay.className = 'overlay visible rank-overlay';
    this.overlay.innerHTML = `
      <section class="top-rank-panel">
        <div class="top-rank-frame">
          <img class="top-rank-image" src="${imageAssets.topRanks}" alt="Top Ranks" />
          <div class="top-rank-list">
            <div class="top-rank-row top-rank-header">
              <span>Rank</span><span>Name</span><span>Score</span><span>Stage</span>
            </div>
            ${this.renderRankRows(entries)}
          </div>
        </div>
        <p class="gameover-prompt">Click</p>
      </section>
    `;
    this.overlay.querySelector('.top-rank-panel')?.addEventListener('click', onExit, { once: true });
  }

  hideOverlay(): void {
    this.overlay.className = 'overlay';
    this.overlay.innerHTML = '';
  }

  showFloatingGold(amount: number, xPercent: number, yPercent: number): void {
    const popup = document.createElement('span');
    popup.className = 'floating-gold';
    popup.textContent = `+${amount}`;
    popup.style.left = `${xPercent}%`;
    popup.style.top = `${yPercent}%`;
    this.shell.append(popup);
    window.setTimeout(() => popup.remove(), 1100);
  }

  showFloatingDamage(
    amount: number,
    xPercent: number,
    yPercent: number,
    critical: boolean
  ): void {
    const popup = document.createElement('span');
    popup.className = `floating-damage${critical ? ' critical' : ''}`;
    popup.textContent = amount >= 999999 ? '+∞' : `+${Math.ceil(amount)}`;
    popup.style.left = `${xPercent}%`;
    popup.style.top = `${yPercent}%`;
    this.shell.append(popup);
    window.setTimeout(() => popup.remove(), 900);
  }

  private showNameEntry(
    score: number,
    stage: number,
    onExit: () => void,
    onRankOpen?: () => void
  ): void {
    this.overlay.className = 'overlay visible name-entry-overlay';
    this.overlay.innerHTML = `
      <section class="gameover-panel name-entry-panel">
        <img class="gameover-image" src="${imageAssets.gameOver}" alt="Game Over" />
        <p class="gameover-score">Score ${this.formatNumber(score)}</p>
        <label class="rank-name-entry">
          <span>Name</span>
          <input class="rank-name-input" type="text" maxlength="10" autocomplete="off" />
        </label>
        <button class="rank-name-submit" type="button">OK</button>
      </section>
    `;

    const input = this.overlay.querySelector<HTMLInputElement>('.rank-name-input');
    const submit = (): void => {
      const updated = this.addLeaderboardEntry(input?.value ?? '', score, stage);
      this.showTopRanks(onExit, updated, onRankOpen);
    };

    input?.addEventListener('click', event => event.stopPropagation());
    input?.addEventListener('input', () => {
      input.value = this.sanitizePlayerName(input.value);
    });
    input?.addEventListener('keydown', event => {
      if (event.key !== 'Enter') return;
      event.preventDefault();
      submit();
    });
    this.overlay.querySelector<HTMLButtonElement>('.rank-name-submit')?.addEventListener('click', event => {
      event.stopPropagation();
      submit();
    }, { once: true });
    input?.focus();
  }

  private loadLeaderboard(): RankEntry[] {
    try {
      const raw = localStorage.getItem(leaderboardKey);
      const saved = raw ? JSON.parse(raw) : [];
      return (Array.isArray(saved) ? saved : [])
        .filter(entry =>
          typeof entry?.name === 'string' &&
          Number.isFinite(entry?.score) &&
          Number.isFinite(entry?.stage)
        )
        .map(entry => ({
          name: entry.name,
          score: Math.max(0, Math.floor(entry.score)),
          stage: Math.max(1, Math.floor(entry.stage))
        }))
        .sort((a, b) => b.score - a.score)
        .slice(0, leaderboardLimit);
    } catch {
      return [];
    }
  }

  private saveLeaderboard(entries: RankEntry[]): void {
    localStorage.setItem(leaderboardKey, JSON.stringify(entries.slice(0, leaderboardLimit)));
  }

  private qualifiesForLeaderboard(score: number): boolean {
    const board = this.loadLeaderboard();
    return board.length < leaderboardLimit || score > board[board.length - 1].score;
  }

  private addLeaderboardEntry(name: string, score: number, stage: number): RankEntry[] {
    const board = this.loadLeaderboard();
    board.push({
      name: this.sanitizePlayerName(name) || 'PLAYER',
      score: Math.max(0, Math.floor(score)),
      stage: Math.max(1, Math.floor(stage))
    });
    board.sort((a, b) => b.score - a.score);
    const updated = board.slice(0, leaderboardLimit);
    this.saveLeaderboard(updated);
    return updated;
  }

  private renderRankRows(entries: RankEntry[]): string {
    const rows = entries.length
      ? entries
      : [{ name: 'NO RANK', score: 0, stage: 1 }];

    return rows
      .map((entry, index) => `
        <div class="top-rank-row">
          <span>${entries.length ? index + 1 : '-'}</span>
          <span>${entry.name}</span>
          <span>${this.formatNumber(entry.score)}</span>
          <span>${entry.stage}</span>
        </div>
      `)
      .join('');
  }

  private sanitizePlayerName(value: string): string {
    return value.replace(/[^a-z0-9 ]/gi, '').replace(/\s+/g, ' ').slice(0, 10).toUpperCase();
  }

  private formatItemCount(count: number): string {
    return String(Math.min(999, Math.max(0, count))).padStart(3, '0');
  }

  private getSelectedPreparationTurret(state: PreparationSnapshot): PreparationTurret | null {
    if (state.selectedSoldierIndex < state.soldiers.length) return null;
    return state.turrets[state.selectedSoldierIndex - state.soldiers.length] ?? null;
  }

  private renderPreparationTurretActions(
    turret: PreparationTurret,
    turretSlots: Array<PreparationTurret | null>
  ): string {
    const installedCount = turretSlots.filter(slot => slot?.id === turret.id).length;
    const totalInstalled = turretSlots.filter(Boolean).length;
    const canHire = totalInstalled < turretSlots.length;
    return `
      <div class="prep-turret-actions">
        <button class="prep-hire" type="button"${canHire ? '' : ' disabled'}>
          Hire ${turret.hireCost} (${totalInstalled}/4)
        </button>
        <button class="prep-hire fire prep-fire-turret" type="button"${installedCount > 0 ? '' : ' disabled'}>
          Fire ${Math.floor(turret.hireCost / 2)} (${installedCount})
        </button>
      </div>
    `;
  }

  private getDerivedPreparationStats(
    soldier: PreparationSoldier,
    weapon: PreparationWeapon
  ): DerivedPreparationStats {
    const str = soldier.stats.str * weapon.statScale.str;
    const dex = soldier.stats.dex * weapon.statScale.dex;
    const int = soldier.stats.int * weapon.statScale.int;
    const damageMultiplier = str / 100;
    const speedMultiplier = dex / 100;
    const criticalMultiplier = int / 100;

    return {
      str,
      dex,
      int,
      health: Math.max(1, Math.ceil(str) * 10),
      damageMultiplier,
      speedMultiplier,
      criticalMultiplier,
      damage: weapon.damage * damageMultiplier,
      fireRate: weapon.fireRate * speedMultiplier,
      criticalChance: Math.min(0.95, weapon.criticalChance * criticalMultiplier)
    };
  }

  private renderPreparationInfoPanel(
    soldier: PreparationSoldier,
    weapon: PreparationWeapon,
    derived: DerivedPreparationStats
  ): string {
    return `
      <aside class="prep-soldier-tooltip">
        <strong>${soldier.name} + ${weapon.name}</strong>

        <div class="prep-info-block">
          <b>WEAPON</b>
          <span>STR%</span><em>${this.formatScalePercent(weapon.statScale.str)}</em>
          <span>DEX%</span><em>${this.formatScalePercent(weapon.statScale.dex)}</em>
          <span>INT%</span><em>${this.formatScalePercent(weapon.statScale.int)}</em>
          <span>MAG</span><em>${weapon.magazineSize}</em>
          <span>DAMAGE</span><em>${this.formatDecimal(weapon.damage)}</em>
          <span>SPEED</span><em>${this.formatDecimal(weapon.fireRate)}</em>
          <span>CRIT</span><em>${this.formatPercent(weapon.criticalChance)}</em>
        </div>

        <div class="prep-info-block">
          <b>SOLDIER</b>
          <span>STR</span><em>${soldier.stats.str}</em>
          <span>DEX</span><em>${soldier.stats.dex}</em>
          <span>INT</span><em>${soldier.stats.int}</em>
          <span>HEALTH</span><em>${soldier.stats.str * 10}</em>
          <span>DAMAGE%</span><em>${this.formatScalePercent(soldier.stats.str / 100)}</em>
          <span>SPEED%</span><em>${this.formatScalePercent(soldier.stats.dex / 100)}</em>
          <span>CRIT%</span><em>${this.formatScalePercent(soldier.stats.int / 100)}</em>
        </div>

        <div class="prep-info-block final">
          <b>FINAL</b>
          <span>STR</span><em>${this.formatDecimal(derived.str)}</em>
          <span>DEX</span><em>${this.formatDecimal(derived.dex)}</em>
          <span>INT</span><em>${this.formatDecimal(derived.int)}</em>
          <span>HEALTH</span><em>${derived.health}</em>
          <span>DAMAGE</span><em>${this.formatDecimal(derived.damage)}</em>
          <span>SPEED</span><em>${this.formatDecimal(derived.fireRate)}</em>
          <span>CRIT</span><em>${this.formatPercent(derived.criticalChance)}</em>
        </div>
      </aside>
    `;
  }

  private renderPreparationTurretInfoPanel(turret: PreparationTurret): string {
    return `
      <aside class="prep-soldier-tooltip turret-tooltip">
        <strong>${turret.name}</strong>

        <div class="prep-info-block">
          <b>WEAPON</b>
          <span>TYPE</span><em>${turret.kind === 'flame' ? 'FIRE' : 'GUN'}</em>
          <span>STR</span><em>${turret.stats.str}</em>
          <span>DEX</span><em>${turret.stats.dex}</em>
          <span>INT</span><em>${turret.stats.int}</em>
          <span>DAMAGE</span><em>${this.formatDecimal(turret.damage)}</em>
          <span>SPEED</span><em>${this.formatDecimal(turret.fireRate)}</em>
          <span>SHIELD</span><em>${turret.maxShield}</em>
        </div>

        <div class="prep-info-block empty">
          <b>SOLDIER</b>
        </div>

        <div class="prep-info-block final">
          <b>FINAL</b>
          <span>STR</span><em>${turret.stats.str}</em>
          <span>DEX</span><em>${turret.stats.dex}</em>
          <span>INT</span><em>${turret.stats.int}</em>
          <span>HEALTH</span><em>${turret.maxShield}</em>
          <span>DAMAGE</span><em>${this.formatDecimal(turret.damage)}</em>
          <span>SPEED</span><em>${this.formatDecimal(turret.fireRate)}</em>
          <span>CRIT</span><em>-</em>
        </div>
      </aside>
    `;
  }

  private formatScalePercent(value: number): string {
    return `${Math.ceil(value * 100)}%`;
  }

  private formatPercent(value: number): string {
    return `${Math.ceil(value * 100)}%`;
  }

  private formatDecimal(value: number): string {
    return String(Math.ceil(value));
  }
}

