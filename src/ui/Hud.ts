import { PreparationSnapshot, Upgrade } from '../game/types';
import { hudAssets, introAssets, preparationUiAssets } from '../game/AssetUrls';

interface HudState {
  health: number;
  maxHealth: number;
  ammo: number;
  magazine: number;
  wave: number;
  enemies: number;
  kills: number;
  weaponName: string;
  reloading: boolean;
  reloadProgress: number;
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
  onBuyItem: (itemId: string) => void;
  onResetItems: () => void;
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
    const party = [
      { label: 'P1', health: state.health, max: state.maxHealth },
      { label: 'P2', health: 100, max: 100 },
      { label: 'P3', health: 100, max: 100 },
      { label: 'P4', health: 100, max: 100 }
    ];

    this.stats.innerHTML = `
      <div class="party-stack">
        ${party
          .map(
            player => `
              <div class="hud-panel player-panel" style="--panel: url('${hudAssets.playerPanel}')">
                <span class="avatar"></span>
                <span class="panel-label">${player.label}</span>
                <span class="panel-value">${Math.ceil(player.health)} / ${player.max}</span>
                <span class="hp-fill" style="width: ${(player.health / player.max) * 41}%"></span>
              </div>
            `
          )
          .join('')}
      </div>

      <div class="hud-panel barricade-panel" style="--panel: url('${hudAssets.barricadePanel}')">
        <span class="panel-label">BARRICADE</span>
        <span class="panel-value">4500 / 4500</span>
        <span class="hp-fill" style="width: 55%"></span>
      </div>

      <div class="helper-health-stack">
        <div class="hud-panel helper-health-panel" style="--panel: url('${hudAssets.helperHealthPanel}')">
          <span class="panel-label">DRONE</span>
          <span class="panel-value">100 / 100</span>
          <span class="hp-fill cyan" style="width: 40%"></span>
        </div>
        <div class="hud-panel helper-health-panel" style="--panel: url('${hudAssets.helperHealthPanel}')">
          <span class="panel-label">TURRET</span>
          <span class="panel-value">150 / 150</span>
          <span class="hp-fill cyan" style="width: 40%"></span>
        </div>
      </div>

      <div class="hud-panel wave-panel" style="--panel: url('${hudAssets.wavePanel}')">
        <span>WAVE ${state.wave}</span>
      </div>
      <div class="hud-panel counter-panel enemies-counter" style="--panel: url('${hudAssets.counterPanel}')">
        <small>ENEMIES</small>
        <b>${state.enemies}</b>
      </div>
      <div class="hud-panel counter-panel kills-counter" style="--panel: url('${hudAssets.counterPanel}')">
        <small>KILLS</small>
        <b>${state.kills}</b>
      </div>

      <div class="top-controls">
        <div class="hud-panel mode-toggle" style="--panel: url('${hudAssets.togglePanel}')"><span>AUTO</span></div>
        <div class="hud-panel control-button" style="--panel: url('${hudAssets.squareButton}')"><span>SET</span></div>
        <div class="hud-panel control-button" style="--panel: url('${hudAssets.squareButton}')"><span>II</span></div>
      </div>

      <div class="hud-panel weapon-panel" style="--panel: url('${hudAssets.weaponPanel}')">
        <span class="weapon-title">${state.weaponName}</span>
        <span class="ammo-value">${state.ammo} / ${state.magazine}</span>
        <span class="reload-text">${state.reloading ? `RELOADING ${Math.round(state.reloadProgress * 100)}%` : 'READY'}</span>
        <span class="reload-fill" style="width: ${state.reloading ? state.reloadProgress * 24 : 24}%"></span>
      </div>

      <div class="special-bar">
        ${['ART', 'GRN', 'AIR', 'MINE']
          .map(
            (label, index) => `
              <div class="hud-panel special-button" style="--panel: url('${hudAssets.specialButton}')">
                <span>${label}</span>
                <b>${index + 1}</b>
              </div>
            `
          )
          .join('')}
      </div>

      <div class="hud-panel helper-command-panel" style="--panel: url('${hudAssets.helperCommandPanel}')">
        <span class="helper-command-title">HELPER</span>
        <span class="helper-command drone-command">DRONE</span>
        <span class="helper-command turret-command">TURRET</span>
      </div>
    `;
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
    const soldier = state.soldiers[state.selectedSoldierIndex];
    const weapon = state.weapons[state.selectedWeaponIndex];
    const equippedWeapon =
      state.weapons.find(candidate => candidate.id === soldier.equippedWeaponId) ?? weapon;
    const hiredCount = state.soldiers.filter(candidate => candidate.hired).length;

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
              <b>${state.gold.toLocaleString()}G</b>
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
            <img class="prep-soldier-art" src="${soldier.image}" alt="${soldier.name}" />
            <button class="prep-arrow prep-next-soldier" type="button" aria-label="Next soldier">
              <img src="${preparationUiAssets.rightArrow}" alt="" />
            </button>
          </div>
          <div class="prep-soldier-name">
            <strong>${soldier.name}</strong>
            <span>${soldier.role}</span>
          </div>
          <div class="prep-stats">
            <span>STR <b>${soldier.stats.str}</b></span>
            <span>DEX <b>${soldier.stats.dex}</b></span>
            <span>INT <b>${soldier.stats.int}</b></span>
          </div>
          <button class="prep-hire" type="button"${soldier.hired ? ' disabled' : ''}>
            ${soldier.hired ? 'Hired' : `Hire ${soldier.hireCost}G`}
          </button>
        </section>

        <aside class="prep-inventory-strip">
          <div class="prep-equipped-weapon">
            <img src="${equippedWeapon.image}" alt="${equippedWeapon.name}" />
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
          <div class="prep-weapon-section">
            <h2>WEAPON</h2>
            <div class="prep-weapon-body">
              <button class="prep-arrow prep-prev-weapon" type="button" aria-label="Previous weapon">
                <img src="${preparationUiAssets.leftArrow}" alt="" />
              </button>
              <div class="prep-weapon-stack">
                <button class="prep-weapon-card" type="button" aria-label="Equip ${weapon.name}">
                  <img src="${weapon.image}" alt="${weapon.name}" />
                </button>
                <div class="prep-weapon-copy">
                  <strong>${weapon.name}</strong>
                  <span>${weapon.summary}</span>
                  <small>${weapon.magazineSize} rounds - ${weapon.trait}</small>
                </div>
              </div>
              <button class="prep-arrow prep-next-weapon" type="button" aria-label="Next weapon">
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
                      <small>${item.priceGold}G</small>
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
    for (const itemButton of this.overlay.querySelectorAll<HTMLButtonElement>('.prep-item-card')) {
      itemButton.addEventListener('click', () => handlers.onBuyItem(itemButton.dataset.itemId ?? ''), {
        once: true
      });
    }
    this.overlay
      .querySelector<HTMLButtonElement>('.prep-reset-items')
      ?.addEventListener('click', handlers.onResetItems, { once: true });
  }

  showUpgrades(choices: Upgrade[], onPick: (upgrade: Upgrade) => void): void {
    this.overlay.className = 'overlay visible';
    this.overlay.innerHTML = `
      <section class="panel upgrade-panel">
        <p class="eyebrow">Wave Cleared</p>
        <h2>Choose an upgrade</h2>
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
        ${choice.icon ? `<img src="${choice.icon}" alt="" />` : ''}
        <strong>${choice.title}</strong>
        <span>${choice.detail}</span>
      `;
      button.addEventListener('click', () => onPick(choice), { once: true });
      grid.append(button);
    }
  }

  showGameOver(kills: number, wave: number, onRestart: () => void): void {
    this.overlay.className = 'overlay visible';
    this.overlay.innerHTML = `
      <section class="panel">
        <p class="eyebrow">Run Ended</p>
        <h2>Wave ${wave}</h2>
        <p>${kills} enemies eliminated.</p>
        <button type="button">Restart</button>
      </section>
    `;
    this.overlay.querySelector('button')?.addEventListener('click', onRestart, {
      once: true
    });
  }

  hideOverlay(): void {
    this.overlay.className = 'overlay';
    this.overlay.innerHTML = '';
  }

  private formatItemCount(count: number): string {
    return String(Math.min(999, Math.max(0, count))).padStart(3, '0');
  }
}
