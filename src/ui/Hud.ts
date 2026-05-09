import {
  ActiveEffectSnapshot,
  BarricadeSnapshot,
  GameSettings,
  MAX_TURRET_SLOTS,
  MonsterType,
  PreparationSnapshot,
  PreparationSoldier,
  PreparationTurret,
  PreparationWeapon,
  SoldierHealthSnapshot,
  TurretSnapshot,
  Upgrade,
  ZombieMaterialMode
} from '../game/types';
import {
  hudAssets,
  imageAssets,
  introAssets,
  mainHudAssets,
  preparationUiAssets,
  upgradeAssets
} from '../game/AssetUrls';
import type { EnemyHealthBar } from '../game/Enemy';

const leaderboardKey = 'shelter-defence-top-ranks';
const leaderboardLimit = 10;

interface CheatHudState {
  visible: boolean;
  infiniteAmmo: boolean;
  powerShot: boolean;
  noReload: boolean;
  debugMode: boolean;
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
  infinite: boolean;
  infiniteElapsed: number;
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
  activeEffects: ActiveEffectSnapshot[];
  cheats: CheatHudState;
  aimX: number;
  aimY: number;
  crosshairPulse: number;
}

interface PreparationHandlers {
  onBack: () => void;
  onStart: () => void;
  onPrevSoldier: () => void;
  onNextSoldier: () => void;
  onPrevWeapon: () => void;
  onNextWeapon: () => void;
  onEquipWeapon: () => void;
  onLevelUpSoldier: () => void;
  onLevelUpWeapon: () => void;
  onResetWeapons: () => void;
  onHireSoldier: () => void;
  onHireTurret: () => void;
  onFireTurret: () => void;
  onResetPersonnel: () => void;
  onBuyItem: (itemId: string) => void;
  onResetItems: () => void;
}

interface SettingsHandlers {
  onChange: (settings: GameSettings) => void;
  onResume: () => void;
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

interface DerivedPreparationTurretStats {
  str: number;
  dex: number;
  int: number;
  damage: number;
  fireRate: number;
  criticalChance: number;
  maxShield: number;
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
  private readonly resizeObserver: ResizeObserver | null;
  private mainCrosshairMark: HTMLDivElement | null = null;

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

    this.syncShellMetrics();
    this.resizeObserver =
      'ResizeObserver' in window ? new ResizeObserver(() => this.syncShellMetrics()) : null;
    this.resizeObserver?.observe(this.shell);
    if (!this.resizeObserver) {
      window.addEventListener('resize', () => this.syncShellMetrics());
    }
  }

  getCanvasHost(): HTMLElement {
    return this.shell;
  }

  update(state: HudState): void {
    this.stats.innerHTML = this.renderMainHud(state);
    this.mainCrosshairMark = this.stats.querySelector<HTMLDivElement>('.main-crosshair-mark');
  }

  updateAim(aimX: number, aimY: number, crosshairPulse: number): void {
    if (!this.mainCrosshairMark?.isConnected) {
      this.mainCrosshairMark = this.stats.querySelector<HTMLDivElement>('.main-crosshair-mark');
    }
    if (!this.mainCrosshairMark) return;

    this.mainCrosshairMark.style.left = `${50 + aimX * 50}%`;
    this.mainCrosshairMark.style.top = `${50 - aimY * 50}%`;
    const active = crosshairPulse > 0;
    this.mainCrosshairMark.classList.toggle('active', active);
    this.mainCrosshairMark.classList.toggle('idle', !active);
  }

  private syncShellMetrics(): void {
    const { width, height } = this.shell.getBoundingClientRect();
    if (width <= 0 || height <= 0) return;

    const scale = Math.min(width / 1920, height / 1080);
    this.shell.style.setProperty('--game-width', `${width}px`);
    this.shell.style.setProperty('--game-height', `${height}px`);
    this.shell.style.setProperty('--game-scale', scale.toFixed(4));
  }

  private renderMainHud(state: HudState): string {
    const waveTotal = Math.max(1, state.waveTotal);
    const waveRemaining = Math.max(0, state.waveRemaining);
    const gold = state.loadout.gold;
    const rubi = state.loadout.rubi;
    const crosshairActive = state.crosshairPulse > 0;
    const barricadePercent = Math.min(
      100,
      Math.max(0, (state.barricade.health / Math.max(1, state.barricade.maxHealth)) * 100)
    );

    return `
      <div class="main-hud">
        <div class="main-squad-roster">
          ${this.renderMainSoldiers(state)}
        </div>

        ${this.renderWaveCard(state, waveRemaining, waveTotal)}

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
          class="main-crosshair-mark ${crosshairActive ? 'active' : 'idle'}"
          style="left: ${50 + state.aimX * 50}%; top: ${50 - state.aimY * 50}%;"
        >
          <span class="crosshair-line crosshair-line-top"></span>
          <span class="crosshair-line crosshair-line-right"></span>
          <span class="crosshair-line crosshair-line-bottom"></span>
          <span class="crosshair-line crosshair-line-left"></span>
          <span class="crosshair-dot"></span>
        </div>

        ${this.renderEnemyHealthBars(state.enemyHealthBars)}

        ${this.renderMainFieldTurrets(state.turrets)}

        <div class="main-field-defense">
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
        ${this.renderActiveEffects(state.activeEffects)}

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
              ${bar.label ? `<b>${bar.label}</b>` : ''}
              <i style="width: ${bar.healthPercent}%"></i>
            </span>
          `)
          .join('')}
      </div>
    `;
  }

  private renderMainSoldiers(state: HudState): string {
    const magazineItemCount = this.getItemCount(state.loadout, 'magazine');
    const hiredSoldiers = state.loadout.soldiers.filter(soldier => soldier.hired).slice(0, 5);
    const displaySoldiers: Array<PreparationSoldier | null> = [
      ...hiredSoldiers,
      ...Array.from({ length: Math.max(0, 5 - hiredSoldiers.length) }, () => null)
    ];
    const magazineCount = magazineItemCount;

    return displaySoldiers
      .map((soldier) => {
        if (!soldier) {
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

  private renderActiveEffects(effects: ActiveEffectSnapshot[]): string {
    const visibleEffects = effects.map(effect => ({
      ...effect,
      image: this.resolveActiveEffectImage(effect)
    }));

    if (visibleEffects.length === 0) return '';

    return `
      <div class="main-active-effects">
        ${visibleEffects
          .map(effect => {
            const image = effect.image
              ? `<img src="${effect.image}" alt="${effect.label}" />`
              : `<em>${this.getActiveEffectFallback(effect.label)}</em>`;

            return `
            <span class="main-active-effect${effect.image ? '' : ' iconless'}" title="${effect.label}">
              ${image}
              ${typeof effect.seconds === 'number' ? `<b>${Math.ceil(effect.seconds)}</b>` : ''}
            </span>
          `;
          })
          .join('')}
      </div>
    `;
  }

  private resolveActiveEffectImage(effect: ActiveEffectSnapshot): string {
    const id = effect.id.toLowerCase();
    const label = effect.label.toLowerCase();

    if (id === 'jacket') return mainHudAssets.jacket;
    if (id.includes('potion-health')) return mainHudAssets.potionHealth;
    if (id.includes('potion-dex')) return mainHudAssets.potionDex;
    if (id.includes('potion-int')) return mainHudAssets.potionInt;
    if (id.endsWith('-damage') || label.includes('hot rounds')) return upgradeAssets.hotRounds;
    if (id.endsWith('-firerate') || label.includes('light trigger')) {
      return upgradeAssets.lightTrigger;
    }
    if (id.endsWith('-magazine') || label.includes('extended mag')) return upgradeAssets.extendedMag;
    if (id.endsWith('-defense') || label.includes('reinforced nest')) {
      return upgradeAssets.reinforcedNest;
    }
    if (id.endsWith('-maxhealth') || label.includes('field kit')) return upgradeAssets.fieldKit;
    if (id.endsWith('-reloadspeed') || label.includes('fast hands')) return upgradeAssets.fastHands;

    return effect.image;
  }

  private getActiveEffectFallback(label: string): string {
    return label
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map(part => part[0]?.toUpperCase() ?? '')
      .join('');
  }

  private renderMainTurrets(turrets: TurretSnapshot[]): string {
    const installedTurrets = turrets.filter(turret => turret.installed);
    const displayTurrets =
      installedTurrets.length === 1
        ? [null, installedTurrets[0]]
        : Array.from({ length: MAX_TURRET_SLOTS }, (_, index) => turrets[index] ?? null);

    return displayTurrets.map((turret) => {
      if (!turret?.installed) {
        return '<span class="main-turret-slot"></span>';
      }

      const shieldPercent = Math.min(
        100,
        Math.max(0, (turret.shield / turret.maxShield) * 100)
      );

      return `
        <span class="main-turret-slot ready">
          <img class="main-turret-unit" src="${mainHudAssets.turret}" alt="${turret.name ?? ''}" />
          <i><span style="width: ${shieldPercent}%"></span></i>
        </span>
      `;
    }).join('');
  }

  private renderMainFieldTurrets(turrets: TurretSnapshot[]): string {
    return turrets.filter(turret => turret.installed).map((turret, index) => {
      const side = index === 0 ? 'right' : 'left';

      return `
        <span class="main-side-turret turret-side-${side}">
          <img
            src="${this.getMainTurretImage(turret)}"
            alt="${turret.name ?? ''}"
          />
        </span>
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
      ['Debug', cheats.debugMode]
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
    return (turret.fireTimer ?? 0) > 0 ? mainHudAssets.turret1On : mainHudAssets.turret1Off;
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

  private renderWaveCard(state: HudState, waveRemaining: number, waveTotal: number): string {
    if (state.infinite) {
      return `
        <div class="main-wave-card infinite">
          <strong>STAGE ${Math.max(1, state.stage)} INFINITE WAR</strong>
          <b>Timer ${this.formatTimer(state.infiniteElapsed)}</b>
        </div>
      `;
    }

    return `
      <div class="main-wave-card">
        <strong>STAGE ${Math.max(1, state.stage)} WAVES (${Math.max(1, state.waveInStage)}/${state.wavesPerStage})</strong>
        <b>${waveRemaining}/${waveTotal} Zombies are remaining</b>
      </div>
    `;
  }

  private formatNumber(value: number): string {
    return Math.max(0, Math.floor(value)).toLocaleString();
  }

  private formatTimer(seconds: number): string {
    const totalSeconds = Math.max(0, Math.floor(seconds));
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const rest = totalSeconds % 60;
    return [hours, minutes, rest].map(value => String(value).padStart(2, '0')).join(':');
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
    const derivedTurretStats = selectedTurret ? this.getDerivedTurretStats(selectedTurret) : null;
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
      : derivedTurretStats
        ? {
            str: Math.round(derivedTurretStats.str),
            dex: Math.round(derivedTurretStats.dex),
            int: Math.round(derivedTurretStats.int)
          }
        : { str: 0, dex: 0, int: 0 };

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
          <h2>
            <span>Soldiers <span>(${hiredCount}/5)</span></span>
            <button class="prep-level-up prep-level-up-soldier" type="button" aria-label="Level up ${selectedTurret ? 'turret' : 'soldier'}" title="Level up ${selectedTurret ? 'turret' : 'soldier'} - 5 Rubi">
              <img src="${preparationUiAssets.levelUp}" alt="Level up" />
            </button>
            <button class="prep-reset-soldiers" type="button" aria-label="Reset soldiers">
              <img src="${preparationUiAssets.reset}" alt="Reset" />
            </button>
          </h2>
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
                  ? this.renderPreparationTurretInfoPanel(selectedTurret, derivedTurretStats ?? this.getDerivedTurretStats(selectedTurret))
                  : ''
            }
          </div>
          <div class="prep-soldier-name">
            <strong>${selectedName}${soldier ? ` (LV${soldier.level})` : selectedTurret ? ` (LV${selectedTurret.level})` : ''}</strong>
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
                <button class="prep-hire prep-hire-soldier${soldier?.hired ? ' fire' : ''}${isRequiredSoldier ? ' locked' : ''}" type="button"${isRequiredSoldier ? ' disabled' : ''}>
                  ${isRequiredSoldier
                    ? 'Hired'
                    : soldier?.hired
                      ? `Fire +${Math.floor((soldier?.hireCost ?? 0) / 2)}`
                      : `Hire -${soldier?.hireCost ?? 0}`}
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
            <h2>
              <span>WEAPON</span>
              <button class="prep-level-up prep-level-up-weapon" type="button" aria-label="Level up weapon" title="Level up weapon - 10 Rubi"${selectedTurret ? ' disabled' : ''}>
                <img src="${preparationUiAssets.levelUp}" alt="Level up" />
              </button>
              <button class="prep-reset-weapons" type="button" aria-label="Reset weapons"${selectedTurret ? ' disabled' : ''}>
                <img src="${preparationUiAssets.reset}" alt="Reset" />
              </button>
            </h2>
            <div class="prep-weapon-body">
              <button class="prep-arrow prep-prev-weapon" type="button" aria-label="Previous weapon"${selectedTurret ? ' disabled' : ''}>
                <img src="${preparationUiAssets.leftArrow}" alt="" />
              </button>
              <div class="prep-weapon-stack">
                <button class="prep-weapon-card" type="button" aria-label="Equip ${weapon.name}"${selectedTurret ? ' disabled' : ''}>
                  ${selectedTurret ? `<img src="${selectedTurret.image}" alt="${selectedTurret.name}" />` : `<img src="${weapon.image}" alt="${weapon.name}" />`}
                </button>
                <div class="prep-weapon-copy">
                  <strong>${selectedTurret ? 'FIXED TURRET WEAPON' : `${weapon.name} (LV${weapon.level})`}</strong>
                  <span>${selectedTurret ? 'Turrets do not equip soldier weapons.' : weapon.summary}</span>
                  <small>${selectedTurret && derivedTurretStats ? `ATK ${this.formatDecimal(derivedTurretStats.damage)} / SPD ${this.formatDecimal(derivedTurretStats.fireRate)} - SHIELD ${derivedTurretStats.maxShield}` : `ATK ${this.formatDecimal(this.getWeaponLevelDamage(weapon))} / SPD ${this.formatDecimal(this.getWeaponLevelFireRate(weapon))} - ${weapon.magazineSize} rounds - ${weapon.trait}`}</small>
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
      .querySelector<HTMLButtonElement>('.prep-level-up-soldier')
      ?.addEventListener('click', handlers.onLevelUpSoldier, { once: true });
    this.overlay
      .querySelector<HTMLButtonElement>('.prep-level-up-weapon')
      ?.addEventListener('click', handlers.onLevelUpWeapon, { once: true });
    this.overlay
      .querySelector<HTMLButtonElement>('.prep-reset-weapons')
      ?.addEventListener('click', handlers.onResetWeapons, { once: true });
    this.overlay
      .querySelector<HTMLButtonElement>('.prep-hire-soldier')
      ?.addEventListener('click', handlers.onHireSoldier, { once: true });
    this.overlay
      .querySelector<HTMLButtonElement>('.prep-hire-turret')
      ?.addEventListener('click', handlers.onHireTurret, { once: true });
    this.overlay
      .querySelector<HTMLButtonElement>('.prep-fire-turret')
      ?.addEventListener('click', handlers.onFireTurret, { once: true });
    this.overlay
      .querySelector<HTMLButtonElement>('.prep-reset-soldiers')
      ?.addEventListener('click', handlers.onResetPersonnel, { once: true });
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
    onNext: () => void,
    onInfinite?: () => void,
    primaryLabel?: string
  ): void {
    const nextLabel = primaryLabel ?? (hasNextStage ? 'Next Stage' : 'Exit');
    this.overlay.className = 'overlay visible';
    this.overlay.innerHTML = `
      <section class="panel stage-clear-panel">
        <img class="next-stage-image" src="${imageAssets.nextStage}" alt="Next Stage" />
        <h2>Stage ${stage} Clear</h2>
        <p class="clear-reward">+${this.formatNumber(reward.gold)} Gold / +${reward.rubi} Rubi</p>
        <p>${hasNextStage ? 'Next stage begins with stronger zombies.' : 'All prepared stages are cleared.'}</p>
        ${hasNextStage || !onInfinite
          ? `<button class="stage-next" type="button">${nextLabel}</button>`
          : `
            <div class="stage-clear-actions">
              <button class="stage-title" type="button">${nextLabel}</button>
              <button class="stage-infinite" type="button">Infinite War</button>
            </div>
          `}
      </section>
    `;
    this.overlay.querySelector<HTMLButtonElement>('.stage-next, .stage-title')?.addEventListener('click', onNext, {
      once: true
    });
    this.overlay.querySelector<HTMLButtonElement>('.stage-infinite')?.addEventListener('click', onInfinite ?? onNext, {
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

  showSettings(settings: GameSettings, handlers: SettingsHandlers): void {
    this.overlay.className = 'overlay visible';
    this.overlay.innerHTML = `
      <section class="panel settings-panel">
        <h2>SETTINGS</h2>
        <div class="settings-grid">
          <label class="setting-row">
            <span>Monster Type</span>
            <select class="setting-input" data-setting="monsterType">
              ${this.renderMonsterTypeOption('dummy', 'Dummy', settings.monsterType)}
              ${this.renderMonsterTypeOption('mech', 'Mech', settings.monsterType)}
              ${this.renderMonsterTypeOption('zombie', 'Zombie', settings.monsterType)}
            </select>
          </label>
          <label class="setting-row">
            <span>Monster Texture</span>
            <select class="setting-input" data-setting="zombieMaterialMode">
              ${this.renderMaterialOption('shiny-metal', 'Shiny Metal', settings.zombieMaterialMode)}
              ${this.renderMaterialOption('plain-metal', 'Plain Metal', settings.zombieMaterialMode)}
              ${this.renderMaterialOption('mesh-toon', 'MeshToon', settings.zombieMaterialMode)}
              ${this.renderMaterialOption('mesh-lambert', 'MeshLambert', settings.zombieMaterialMode)}
            </select>
          </label>
          <label class="setting-row">
            <span>Monster / Spawn</span>
            <input
              class="setting-input"
              data-setting="zombieSpawnBatchSize"
              type="number"
              min="1"
              max="50"
              step="1"
              value="${settings.zombieSpawnBatchSize}"
            />
          </label>
          ${this.renderSettingToggle('soundEnabled', 'Sound', settings.soundEnabled)}
          ${this.renderSettingToggle('autoFire', 'Auto Fire', settings.autoFire)}
          ${this.renderSettingToggle('autoTargeting', 'Auto Targeting', settings.autoTargeting)}
          ${this.renderSettingToggle('randomBuffs', 'Random Buff', settings.randomBuffs)}
          ${this.renderSettingToggle('infiniteWar', 'Infinite War', settings.infiniteWar)}
          ${this.renderSettingToggle('infiniteLoop', 'Infinite Loop', settings.infiniteLoop)}
        </div>
        <button class="settings-resume" type="button">Resume</button>
      </section>
    `;

    const emitChange = (event: Event): void => {
      const material = this.overlay.querySelector<HTMLSelectElement>('[data-setting="zombieMaterialMode"]');
      const monsterType = this.overlay.querySelector<HTMLSelectElement>('[data-setting="monsterType"]');
      const batch = this.overlay.querySelector<HTMLInputElement>('[data-setting="zombieSpawnBatchSize"]');
      const infiniteWar = this.overlay.querySelector<HTMLInputElement>('[data-setting="infiniteWar"]');
      const infiniteLoop = this.overlay.querySelector<HTMLInputElement>('[data-setting="infiniteLoop"]');
      const changedSetting = (event.currentTarget as HTMLElement | null)?.dataset.setting;
      if (changedSetting === 'infiniteWar' && infiniteWar?.checked && infiniteLoop) {
        infiniteLoop.checked = false;
      }
      if (changedSetting === 'infiniteLoop' && infiniteLoop?.checked && infiniteWar) {
        infiniteWar.checked = false;
      }
      const readToggle = (id: keyof GameSettings): boolean =>
        Boolean(this.overlay.querySelector<HTMLInputElement>(`[data-setting="${id}"]`)?.checked);

      handlers.onChange({
        zombieMaterialMode: (material?.value ?? settings.zombieMaterialMode) as ZombieMaterialMode,
        monsterType: (monsterType?.value ?? settings.monsterType) as MonsterType,
        zombieSpawnBatchSize: Math.max(1, Math.min(50, Number.parseInt(batch?.value ?? '2', 10) || 2)),
        soundEnabled: readToggle('soundEnabled'),
        autoFire: readToggle('autoFire'),
        autoTargeting: readToggle('autoTargeting'),
        randomBuffs: readToggle('randomBuffs'),
        infiniteWar: readToggle('infiniteWar'),
        infiniteLoop: readToggle('infiniteLoop')
      });
    };

    for (const input of this.overlay.querySelectorAll<HTMLInputElement | HTMLSelectElement>('.setting-input')) {
      input.addEventListener('change', emitChange);
    }
    this.overlay.querySelector<HTMLButtonElement>('.settings-resume')?.addEventListener('click', handlers.onResume, {
      once: true
    });
  }

  private renderMaterialOption(
    value: ZombieMaterialMode,
    label: string,
    selected: ZombieMaterialMode
  ): string {
    return `<option value="${value}"${value === selected ? ' selected' : ''}>${label}</option>`;
  }

  private renderMonsterTypeOption(
    value: MonsterType,
    label: string,
    selected: MonsterType
  ): string {
    return `<option value="${value}"${value === selected ? ' selected' : ''}>${label}</option>`;
  }

  private renderSettingToggle(
    id: keyof GameSettings,
    label: string,
    checked: boolean
  ): string {
    return `
      <label class="setting-row setting-toggle-row">
        <span>${label}</span>
        <input
          class="setting-input setting-toggle"
          data-setting="${id}"
          type="checkbox"
          ${checked ? 'checked' : ''}
        />
      </label>
    `;
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
    debugMode: boolean;
  }, handlers: {
    onInfiniteAmmo: () => void;
    onPowerShot: () => void;
    onNoReload: () => void;
    onJumpStage: () => void;
    onDebugMode: () => void;
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
          <button class="cheat-debug" type="button">Debug Mode: ${cheats.debugMode ? 'ON' : 'OFF'}</button>
          <button class="cheat-back" type="button">Back</button>
        </div>
      </section>
    `;
    this.overlay.querySelector<HTMLButtonElement>('.cheat-infinite')?.addEventListener('click', handlers.onInfiniteAmmo, { once: true });
    this.overlay.querySelector<HTMLButtonElement>('.cheat-power')?.addEventListener('click', handlers.onPowerShot, { once: true });
    this.overlay.querySelector<HTMLButtonElement>('.cheat-reload')?.addEventListener('click', handlers.onNoReload, { once: true });
    this.overlay.querySelector<HTMLButtonElement>('.cheat-stage')?.addEventListener('click', handlers.onJumpStage, { once: true });
    this.overlay.querySelector<HTMLButtonElement>('.cheat-debug')?.addEventListener('click', handlers.onDebugMode, { once: true });
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

  showExplosion(
    xPercent: number,
    yPercent: number,
    variant: 'grenade' | 'air-strike' = 'grenade',
    delayMs = 0
  ): void {
    window.setTimeout(() => {
      const explosion = document.createElement('span');
      explosion.className = `screen-explosion ${variant}`;
      explosion.style.left = `${Math.max(-8, Math.min(108, xPercent))}%`;
      explosion.style.top = `${Math.max(-8, Math.min(108, yPercent))}%`;
      explosion.innerHTML = `
        <i class="explosion-core"></i>
        <i class="explosion-ring"></i>
        <i class="explosion-sparks"></i>
      `;
      this.shell.append(explosion);
      window.setTimeout(() => explosion.remove(), variant === 'air-strike' ? 980 : 760);
    }, delayMs);
  }

  showAirStrikeExplosions(): void {
    const blasts = [
      [18, 32, 0], [42, 27, 120], [69, 34, 210], [84, 48, 330],
      [31, 55, 430], [57, 50, 560], [75, 64, 680], [45, 69, 820],
      [22, 74, 940], [88, 73, 1060]
    ];

    for (const [x, y, delay] of blasts) {
      const jitterX = (Math.random() - 0.5) * 8;
      const jitterY = (Math.random() - 0.5) * 7;
      this.showExplosion(x + jitterX, y + jitterY, 'air-strike', delay);
    }
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
          <input
            class="rank-name-input"
            type="text"
            name="shelter-defence-rank-entry"
            maxlength="10"
            autocomplete="off"
            autocapitalize="off"
            autocorrect="off"
            spellcheck="false"
            aria-autocomplete="none"
            readonly
          />
        </label>
        <button class="rank-name-submit" type="button">OK</button>
      </section>
    `;

    const input = this.overlay.querySelector<HTMLInputElement>('.rank-name-input');
    input?.setAttribute('autocomplete', 'off');
    input?.addEventListener('focus', () => input.removeAttribute('readonly'), { once: true });
    window.setTimeout(() => input?.removeAttribute('readonly'), 80);
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
        <button class="prep-hire prep-hire-turret" type="button"${canHire ? '' : ' disabled'}>
          Hire -${turret.hireCost} (${totalInstalled}/${turretSlots.length})
        </button>
        <button class="prep-hire fire prep-fire-turret" type="button"${installedCount > 0 ? '' : ' disabled'}>
          Fire +${Math.floor(turret.hireCost / 2)} (${installedCount})
        </button>
      </div>
    `;
  }

  private getDerivedPreparationStats(
    soldier: PreparationSoldier,
    weapon: PreparationWeapon
  ): DerivedPreparationStats {
    const soldierLevelMultiplier = this.getLevelMultiplier(soldier.level);
    const str = soldier.stats.str * soldierLevelMultiplier * weapon.statScale.str;
    const dex = soldier.stats.dex * soldierLevelMultiplier * weapon.statScale.dex;
    const int = soldier.stats.int * soldierLevelMultiplier * weapon.statScale.int;
    const weaponDamage = this.getWeaponLevelDamage(weapon);
    const weaponFireRate = this.getWeaponLevelFireRate(weapon);
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
      damage: weaponDamage * damageMultiplier,
      fireRate: weaponFireRate * speedMultiplier,
      criticalChance: Math.min(0.95, weapon.criticalChance * criticalMultiplier)
    };
  }

  private getWeaponLevelDamage(weapon: PreparationWeapon): number {
    return weapon.damage * this.getLevelMultiplier(weapon.level);
  }

  private getWeaponLevelFireRate(weapon: PreparationWeapon): number {
    return weapon.fireRate * this.getLevelMultiplier(weapon.level);
  }

  private getLevelMultiplier(level: number): number {
    return 1 + (Math.max(1, level) - 1) * 0.1;
  }

  private getDerivedTurretStats(turret: PreparationTurret): DerivedPreparationTurretStats {
    const multiplier = this.getLevelMultiplier(turret.level);
    return {
      str: turret.stats.str * multiplier,
      dex: turret.stats.dex * multiplier,
      int: turret.stats.int * multiplier,
      damage: turret.damage * multiplier,
      fireRate: turret.fireRate * multiplier,
      criticalChance: Math.min(0.95, turret.criticalChance * multiplier),
      maxShield: Math.ceil(turret.maxShield * multiplier)
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
          <span>DAMAGE</span><em>${this.formatDecimal(this.getWeaponLevelDamage(weapon))}</em>
          <span>SPEED</span><em>${this.formatDecimal(this.getWeaponLevelFireRate(weapon))}</em>
          <span>CRIT</span><em>${this.formatPercent(weapon.criticalChance)}</em>
        </div>

        <div class="prep-info-block">
          <b>SOLDIER</b>
          <span>STR</span><em>${this.formatDecimal(soldier.stats.str * this.getLevelMultiplier(soldier.level))}</em>
          <span>DEX</span><em>${this.formatDecimal(soldier.stats.dex * this.getLevelMultiplier(soldier.level))}</em>
          <span>INT</span><em>${this.formatDecimal(soldier.stats.int * this.getLevelMultiplier(soldier.level))}</em>
          <span>HEALTH</span><em>${Math.ceil(soldier.stats.str * this.getLevelMultiplier(soldier.level)) * 10}</em>
          <span>DAMAGE%</span><em>${this.formatScalePercent((soldier.stats.str * this.getLevelMultiplier(soldier.level)) / 100)}</em>
          <span>SPEED%</span><em>${this.formatScalePercent((soldier.stats.dex * this.getLevelMultiplier(soldier.level)) / 100)}</em>
          <span>CRIT%</span><em>${this.formatScalePercent((soldier.stats.int * this.getLevelMultiplier(soldier.level)) / 100)}</em>
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

  private renderPreparationTurretInfoPanel(
    turret: PreparationTurret,
    derived: DerivedPreparationTurretStats
  ): string {
    return `
      <aside class="prep-soldier-tooltip turret-tooltip">
        <strong>${turret.name} (LV${turret.level})</strong>

        <div class="prep-info-block">
          <b>WEAPON</b>
          <span>TYPE</span><em>GUN</em>
          <span>STR</span><em>${this.formatDecimal(derived.str)}</em>
          <span>DEX</span><em>${this.formatDecimal(derived.dex)}</em>
          <span>INT</span><em>${this.formatDecimal(derived.int)}</em>
          <span>DAMAGE</span><em>${this.formatDecimal(derived.damage)}</em>
          <span>SPEED</span><em>${this.formatDecimal(derived.fireRate)}</em>
          <span>SHIELD</span><em>${derived.maxShield}</em>
        </div>

        <div class="prep-info-block empty">
          <b>SOLDIER</b>
        </div>

        <div class="prep-info-block final">
          <b>FINAL</b>
          <span>STR</span><em>${this.formatDecimal(derived.str)}</em>
          <span>DEX</span><em>${this.formatDecimal(derived.dex)}</em>
          <span>INT</span><em>${this.formatDecimal(derived.int)}</em>
          <span>HEALTH</span><em>${derived.maxShield}</em>
          <span>DAMAGE</span><em>${this.formatDecimal(derived.damage)}</em>
          <span>SPEED</span><em>${this.formatDecimal(derived.fireRate)}</em>
          <span>CRIT</span><em>${this.formatPercent(derived.criticalChance)}</em>
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

