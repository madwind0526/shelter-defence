import {
  AmbientLight,
  Color,
  DirectionalLight,
  Fog,
  Mesh,
  MeshBasicMaterial,
  PlaneGeometry,
  Scene,
  SRGBColorSpace,
  Texture,
  TextureLoader,
  Vector2,
  Vector3,
  WebGLRenderer
} from 'three';
import { AudioManager } from './AudioManager';
import { imageAssets } from './AssetUrls';
import { EnemyManager } from './Enemy';
import { Input } from './Input';
import { Player } from './Player';
import { PreparationState } from './PreparationState';
import {
  defaultStageRoadProfile,
  StageRoadMaskLoader,
  StageRoadProfile
} from './StageRoadMask';
import { UpgradeSystem } from './UpgradeSystem';
import { WeaponController } from './Weapon';
import { WeaponView } from './WeaponView';
import { WaveManager } from './WaveManager';
import {
  GameMode,
  PreparationSnapshot,
  BarricadeSnapshot,
  PreparationSoldier,
  PreparationWeapon,
  SoldierHealthSnapshot,
  TurretSnapshot,
  Upgrade,
  WeaponDefinition
} from './types';
import { Hud } from '../ui/Hud';

type MainControlAction = 'menu' | 'settings' | 'pause';

interface SoldierCombatState {
  soldierId: string;
  health: number;
  maxHealth: number;
  fireCooldown: number;
  reloadTimer: number;
  ammo: number;
  magazines: number;
  weaponId: string;
  definition: WeaponDefinition;
}

interface ClearReward {
  gold: number;
  rubi: number;
  magazines: number;
}

interface PendingDamagePopup {
  amount: number;
  critical: boolean;
  point: Vector3;
  timer: number;
}

export class Game {
  private readonly hud: Hud;
  private readonly scene = new Scene();
  private readonly renderer = new WebGLRenderer({ antialias: true });
  private readonly player = new Player();
  private readonly input: Input;
  private readonly audio = new AudioManager();
  private readonly enemies = new EnemyManager(this.scene);
  private readonly weapon = new WeaponController(this.scene);
  private readonly weaponView = new WeaponView(this.player.camera);
  private readonly waves = new WaveManager(this.enemies);
  private readonly upgrades = new UpgradeSystem(this.player, this.weapon);
  private readonly preparation = new PreparationState();
  private readonly size = new Vector2();
  private readonly textureLoader = new TextureLoader();
  private readonly stageBackgrounds = new Map<number, Texture>();
  private readonly roadMaskLoader = new StageRoadMaskLoader(imageAssets.stageRoadMasks);
  private readonly roadTopWorldPoint = new Vector3(0, 0, -36);
  private stageRoadProfile: StageRoadProfile = defaultStageRoadProfile;
  private currentStageNumber = 1;
  private preparationFromRun = false;

  private mode: GameMode = 'ready';
  private lastTime = 0;
  private animationId = 0;
  private grenadeCount = 0;
  private grenadeTimer = 0;
  private airStrikeCount = 0;
  private airStrikeTimer = 0;
  private pausedControl: MainControlAction | null = null;
  private activeSoldierId: string | null = null;
  private activeWeaponId: string | null = null;
  private cheatModeUsed = false;
  private cheatJumpUsed = false;
  private readonly aim = new Vector2(0, 0);
  private score = 0;
  private readonly soldierCombat = new Map<string, SoldierCombatState>();
  private readonly pendingDamagePopups = new Map<number, PendingDamagePopup>();
  private readonly turretFireCooldowns = new Map<number, number>();
  private readonly barricade: BarricadeSnapshot = {
    health: 1500,
    maxHealth: 1500
  };
  private readonly barricadeTarget = {
    get health(): number {
      return this.owner.barricade.health;
    },
    z: -4.5,
    halfWidth: 8,
    damage: (amount: number): void => this.damageBarricade(amount),
    owner: this
  };
  private turrets: TurretSnapshot[] = Array.from({ length: 4 }, () => ({
    installed: false,
    shield: 0,
    maxShield: 100
  }));
  private readonly soldierTarget = {
    get position() {
      return this.owner.player.position;
    },
    damage: (amount: number): void => this.damageSoldier(amount),
    owner: this
  };

  constructor(root: HTMLElement) {
    this.hud = new Hud(root);
    this.input = new Input(this.hud.getCanvasHost());
    this.configureRenderer();
    this.createWorld();
    this.bindEvents();
    this.showIntro();
  }

  start(): void {
    this.resize();
    this.lastTime = performance.now();
    this.animationId = requestAnimationFrame(this.tick);
  }

  private beginRun(): void {
    this.audio.stopGameStart();
    this.audio.unlock();
    this.resetRunProgress();
    this.setupCombatantsFromPreparation();
    this.resetAim();
    this.alignStageMapToBackground();
    this.mode = 'playing';
    this.hud.hideOverlay();
    void this.hud.getCanvasHost().requestPointerLock();
  }

  private showIntro(): void {
    this.mode = 'ready';
    this.audio.unlock();
    this.audio.playGameStart();
    this.hud.showIntro(
      () => this.openPreparation(),
      () => this.beginRun()
    );
  }

  private openPreparation(fromRun = false): void {
    this.preparationFromRun = fromRun;
    this.mode = fromRun ? 'paused' : 'ready';
    this.hud.showPreparation(this.preparation.snapshot(), {
      onBack:        () => fromRun ? this.resumeFromPreparation() : this.showIntro(),
      onStart:       () => fromRun ? this.resumeFromPreparation() : this.beginRun(),
      onPrevSoldier: () => {
        this.preparation.selectSoldier(-1);
        this.openPreparation(fromRun);
      },
      onNextSoldier: () => {
        this.preparation.selectSoldier(1);
        this.openPreparation(fromRun);
      },
      onPrevWeapon: () => {
        this.preparation.selectWeapon(-1);
        this.openPreparation(fromRun);
      },
      onNextWeapon: () => {
        this.preparation.selectWeapon(1);
        this.openPreparation(fromRun);
      },
      onEquipWeapon: () => {
        this.preparation.equipSelectedWeapon();
        this.openPreparation(fromRun);
      },
      onHire: () => {
        this.preparation.hireSelectedSoldier();
        this.openPreparation(fromRun);
      },
      onFireTurret: () => {
        this.preparation.fireSelectedTurret();
        this.openPreparation(fromRun);
      },
      onBuyItem: (itemId: string) => {
        this.preparation.buyItem(itemId);
        this.openPreparation(fromRun);
      },
      onResetItems: () => {
        this.preparation.resetItems();
        this.openPreparation(fromRun);
      }
    });
  }

  private restart(): void {
    this.enemies.clear();
    window.location.reload();
  }

  private resetRunProgress(): void {
    this.enemies.clear();
    this.waves.reset();
    this.upgrades.resetStageUpgrades();
    this.weapon.resetAll();
    this.player.maxHealth = 100;
    this.player.health = 100;
    this.player.incomingDamageMultiplier = 1;
    this.score = 0;
    this.activeSoldierId = null;
    this.activeWeaponId = null;
    this.soldierCombat.clear();
    this.pendingDamagePopups.clear();
    this.turretFireCooldowns.clear();
    this.resetSpecialCounters();
    this.resetBarricade();
    this.cheatModeUsed = false;
    this.cheatJumpUsed = false;
    this.turrets = Array.from({ length: 4 }, () => ({
      installed: false,
      shield: 0,
      maxShield: 100
    }));
    this.setStageBackground(1);
  }

  private readonly tick = (time: number): void => {
    const delta = Math.min((time - this.lastTime) / 1000, 0.05);
    this.lastTime = time;

    this.update(delta);
    this.renderer.render(this.scene, this.player.camera);
    this.animationId = requestAnimationFrame(this.tick);
  };

  private update(delta: number): void {
    this.handleMainControlHotkeys();

    if (this.mode === 'playing') {
      this.weapon.update(delta);
      this.weaponView.update(delta);
      this.syncActiveSoldierWeapon();
      this.updateSoldierCombatTimers(delta);
      this.updateSpecialCounters(delta);
      this.handleGameplayHotkeys();
      this.handleSquadFire();
      this.handleShootRelease();
      this.updateTurretFire(delta);
      this.player.update();
      this.enemies.update(delta, this.soldierTarget, this.barricadeTarget);

      if (this.input.consumeReload()) {
        this.reloadLivingSoldiers();
      }

      const waveState = this.waves.update(delta, this.player);
      if (waveState === 'waveComplete') {
        this.openUpgradeMenu(this.applyWaveClearRewards());
      }
      if (waveState === 'stageComplete') {
        this.openStageClearPanel(this.applyStageClearRewards());
      }

      if (this.getAliveSoldiers().length <= 0) {
        this.mode = 'gameover';
        this.stopLivingSoldierWeaponShots();
        document.exitPointerLock();
        this.audio.playGameOver();
        this.hud.showGameOver(
          this.score,
          this.waves.stage,
          () => this.resetToFreshIntro(),
          () => this.audio.playRank()
        );
      }
    }

    this.updateFloatingDamagePopups(delta);

    const snapshot = this.enemies.getSnapshot();
    const preparationSnapshot = this.preparation.snapshot();
    const waveSnapshot = this.waves.getSnapshot();
    this.hud.update({
      health: this.player.health,
      maxHealth: this.player.maxHealth,
      ammo: this.weapon.ammo,
      magazine: this.weapon.definition.magazineSize,
      wave: waveSnapshot.wave,
      stage: waveSnapshot.stage,
      waveInStage: waveSnapshot.waveInStage,
      waveTotal: waveSnapshot.total,
      wavesPerStage: waveSnapshot.wavesPerStage,
      waveRemaining: waveSnapshot.remaining,
      kills: snapshot.killed,
      score: this.score,
      weaponName: this.weapon.definition.name,
      reloading: this.weapon.isReloading(),
      reloadProgress: this.weapon.getReloadProgress(),
      loadout: preparationSnapshot,
      grenadeCount: this.grenadeCount,
      airStrikeCount: this.airStrikeCount,
      turrets: this.turrets.map(turret => ({ ...turret })),
      barricade: { ...this.barricade },
      soldierHealth: this.getSoldierHealthSnapshots(preparationSnapshot),
      enemyHealthBars: this.enemies.getHealthBars(this.player.camera),
      cheats: {
        visible: this.cheatModeUsed,
        infiniteAmmo: this.weapon.infiniteAmmo,
        powerShot: this.weapon.powerShot,
        noReload: this.weapon.noReload,
        jumpUsed: this.cheatJumpUsed
      },
      aimX: this.aim.x,
      aimY: this.aim.y
    });
  }

  private resetSpecialCounters(): void {
    this.grenadeCount = 0;
    this.grenadeTimer = 0;
    this.airStrikeCount = 0;
    this.airStrikeTimer = 0;
  }

  private resetAim(): void {
    this.aim.set(0, -0.26);
    this.weaponView.setAim(this.aim.x, this.aim.y);
  }

  private resetBarricade(): void {
    this.barricade.health = this.barricade.maxHealth;
  }

  private alignStageMapToBackground(): void {
    this.player.resetView(this.getAlignedStagePitch());
    this.player.update();
    this.player.camera.updateProjectionMatrix();
    this.weaponView.setAim(this.aim.x, this.aim.y);
  }

  private getAlignedStagePitch(): number {
    const targetY = this.stageRoadProfile.topFraction;
    const lowPitch = -0.45;
    const highPitch = 0.75;
    const lowY = this.projectRoadTopY(lowPitch);
    const highY = this.projectRoadTopY(highPitch);
    const increasing = highY > lowY;
    const minY = Math.min(lowY, highY);
    const maxY = Math.max(lowY, highY);

    if (targetY <= minY) return increasing ? lowPitch : highPitch;
    if (targetY >= maxY) return increasing ? highPitch : lowPitch;

    let low = lowPitch;
    let high = highPitch;
    for (let i = 0; i < 16; i += 1) {
      const mid = (low + high) / 2;
      const midY = this.projectRoadTopY(mid);
      if ((midY < targetY) === increasing) {
        low = mid;
      } else {
        high = mid;
      }
    }

    return (low + high) / 2;
  }

  private projectRoadTopY(pitch: number): number {
    this.player.resetView(pitch);
    this.player.update();
    this.player.camera.updateMatrixWorld(true);
    const projected = this.roadTopWorldPoint.clone().project(this.player.camera);
    return -projected.y * 0.5 + 0.5;
  }

  private updateSpecialCounters(delta: number): void {
    this.grenadeTimer += delta;
    while (this.grenadeTimer >= 10) {
      this.grenadeTimer -= 10;
      this.grenadeCount += 1;
    }

    this.airStrikeTimer += delta;
    while (this.airStrikeTimer >= 30) {
      this.airStrikeTimer -= 30;
      this.airStrikeCount += 1;
    }
  }

  private handleGameplayHotkeys(): void {
    const itemHotkeys: Array<[string, string]> = [
      ['Digit1', 'potion-health'],
      ['Digit2', 'potion-dex'],
      ['Digit3', 'potion-int'],
      ['Digit4', 'repair-kit']
    ];

    for (const [code, itemId] of itemHotkeys) {
      if (this.input.consumeAction(code)) {
        this.usePreparedItem(itemId);
      }
    }

    if (this.input.consumeAction('F4')) {
      this.useGrenade();
    }

    if (this.input.consumeAction('F5')) {
      this.useAirStrike();
    }
  }

  private handleShootRelease(): void {
    if (!this.input.consumeShootRelease()) {
      return;
    }

    this.audio.stopWeaponShots(
      this.getAliveSoldiers().map(combat => combat.definition.soundId),
      90
    );
  }

  private usePreparedItem(itemId: string): void {
    if (!this.preparation.useItem(itemId)) {
      return;
    }

    if (itemId === 'potion-health') {
      this.healMostWoundedSoldier(35);
    }

    if (itemId === 'repair-kit') {
      this.repairBarricade(350);
    }
  }

  private useGrenade(): void {
    if (this.grenadeCount <= 0) {
      return;
    }

    this.grenadeCount -= 1;
    const killedBefore = this.enemies.getSnapshot().killed;
    this.enemies.damageAll(80, 6);
    this.awardIndirectKills(this.enemies.getSnapshot().killed - killedBefore);
    this.audio.playWeaponShot('explosion');
  }

  private useAirStrike(): void {
    if (this.airStrikeCount <= 0) {
      return;
    }

    this.airStrikeCount -= 1;
    const killedBefore = this.enemies.getSnapshot().killed;
    this.enemies.damageAll(160);
    this.awardIndirectKills(this.enemies.getSnapshot().killed - killedBefore);
    this.audio.playWeaponShot('fallingBomb');
  }

  private updateSoldierCombatTimers(delta: number): void {
    for (const combat of this.soldierCombat.values()) {
      combat.fireCooldown = Math.max(0, combat.fireCooldown - delta);
      if (combat.reloadTimer <= 0) continue;

      combat.reloadTimer -= delta;
      if (combat.reloadTimer <= 0) {
        combat.ammo = combat.definition.magazineSize;
        combat.reloadTimer = 0;
      }
    }
  }

  private handleSquadFire(): void {
    const shootRequested = this.input.consumeShootRequest();
    if (
      document.pointerLockElement !== this.hud.getCanvasHost() ||
      (!shootRequested && !this.input.isShooting()) ||
      this.enemies.getCount() <= 0
    ) {
      return;
    }

    let kicked = false;
    for (const combat of this.getAliveSoldiers()) {
      if (combat.fireCooldown > 0 || combat.reloadTimer > 0) continue;

      if (combat.ammo <= 0 && (this.weapon.infiniteAmmo || this.weapon.noReload)) {
        combat.ammo = combat.definition.magazineSize;
      }

      if (combat.ammo <= 0) {
        if (this.startSoldierReload(combat)) {
          this.audio.playReload();
        }
        continue;
      }

      if (!this.weapon.infiniteAmmo) {
        combat.ammo -= 1;
      }

      const outcome = this.weapon.fireDefinition(
        this.player.camera,
        this.enemies,
        combat.definition,
        this.weapon.damageMultiplier,
        this.weapon.powerShot,
        this.aim
      );
      combat.fireCooldown = 1 / Math.max(
        0.1,
        combat.definition.fireRate * this.weapon.fireRateMultiplier
      );

      if (outcome.result !== 'none') {
        kicked = true;
        this.audio.playWeaponShot(combat.definition.soundId);
      }

      if (
        (outcome.result === 'hit' || outcome.result === 'killed') &&
        outcome.hitPoint &&
        outcome.damageAmount
      ) {
        this.queueFloatingDamage(
          outcome.hitEnemyId,
          outcome.hitPoint,
          outcome.damageAmount,
          Boolean(outcome.critical)
        );
      }

      if (outcome.result === 'killed') {
        this.awardZombieKill();
      }

      if (this.weapon.noReload && combat.ammo <= 0) {
        combat.ammo = combat.definition.magazineSize;
      } else if (combat.ammo <= 0 && this.startSoldierReload(combat)) {
        this.audio.playReload();
      }
    }

    if (kicked) {
      this.weaponView.kick();
    }
  }

  private reloadLivingSoldiers(): void {
    let started = false;
    for (const combat of this.getAliveSoldiers()) {
      started = this.startSoldierReload(combat) || started;
    }
    if (started) {
      this.audio.playReload();
    }
  }

  private startSoldierReload(combat: SoldierCombatState): boolean {
    if (
      combat.reloadTimer > 0 ||
      combat.ammo >= combat.definition.magazineSize ||
      combat.magazines <= 0
    ) {
      return false;
    }

    combat.magazines -= 1;
    combat.reloadTimer = combat.definition.reloadTime * this.weapon.reloadMultiplier;
    return true;
  }

  private updateTurretFire(delta: number): void {
    for (const [index, turret] of this.turrets.entries()) {
      if (!turret.installed || turret.shield <= 0) continue;
      const cooldown = (this.turretFireCooldowns.get(index) ?? 0) - delta;

      if (cooldown > 0) {
        this.turretFireCooldowns.set(index, cooldown);
        continue;
      }

      if (this.enemies.getCount() <= 0) {
        this.turretFireCooldowns.set(index, 0);
        continue;
      }

      const damage = turret.damage ?? (turret.kind === 'flame' ? 72 : 95);
      const maxTargets = turret.kind === 'flame' ? 3 : 1;
      const fireRate = turret.fireRate ?? (turret.kind === 'flame' ? 6 : 4.2);
      const killedBefore = this.enemies.getSnapshot().killed;
      this.enemies.damageAll(damage, maxTargets);
      this.awardIndirectKills(this.enemies.getSnapshot().killed - killedBefore);
      this.audio.playWeaponShot(turret.kind === 'flame' ? 'turret2' : 'turret1');
      this.turretFireCooldowns.set(index, 1 / fireRate);
    }
  }

  private awardZombieKill(): void {
    const scoreGain = 50 + Math.floor(Math.random() * 101);
    const goldGain = 20 + Math.floor(Math.random() * 61);
    this.score += scoreGain;
    this.preparation.addGold(goldGain);
  }

  private queueFloatingDamage(
    enemyId: number | undefined,
    point: Vector3,
    amount: number,
    critical: boolean
  ): void {
    if (typeof enemyId !== 'number') {
      this.showFloatingDamage(undefined, point, amount, critical);
      return;
    }

    const pending = this.pendingDamagePopups.get(enemyId);
    if (pending) {
      pending.amount += amount;
      pending.critical = pending.critical || critical;
      pending.point.copy(point);
      pending.timer = 0.07;
      return;
    }

    this.pendingDamagePopups.set(enemyId, {
      amount,
      critical,
      point: point.clone(),
      timer: 0.07
    });
  }

  private updateFloatingDamagePopups(delta: number): void {
    for (const [enemyId, popup] of this.pendingDamagePopups.entries()) {
      popup.timer -= delta;
      if (popup.timer > 0) continue;

      this.pendingDamagePopups.delete(enemyId);
      this.showFloatingDamage(enemyId, popup.point, popup.amount, popup.critical);
    }
  }

  private showFloatingDamage(
    enemyId: number | undefined,
    point: Vector3,
    amount: number,
    critical: boolean
  ): void {
    const overhead = typeof enemyId === 'number'
      ? this.enemies.getOverheadScreenPosition(enemyId, this.player.camera)
      : null;
    const fallback = point.clone().project(this.player.camera);
    const x = overhead?.x ?? (fallback.x * 0.5 + 0.5) * 100;
    const y = overhead?.y ?? (-fallback.y * 0.5 + 0.5) * 100;
    if (x >= -10 && x <= 110 && y >= -10 && y <= 110) {
      this.hud.showFloatingDamage(amount, x, y, critical);
    }
  }

  private awardIndirectKills(count: number): void {
    for (let i = 0; i < Math.max(0, count); i += 1) {
      this.awardZombieKill();
    }
  }

  private damageSoldier(amount: number): void {
    const target = this.getAliveSoldiers()[0];
    if (!target) return;

    target.health = Math.max(0, target.health - amount * this.player.incomingDamageMultiplier);
    if (target.health <= 0 && target.soldierId === this.activeSoldierId) {
      this.activeSoldierId = null;
      this.activeWeaponId = null;
    }
  }

  private healMostWoundedSoldier(amount: number): void {
    const target = this.getAliveSoldiers()
      .filter(soldier => soldier.health < soldier.maxHealth)
      .sort((a, b) => a.health / a.maxHealth - b.health / b.maxHealth)[0];
    if (!target) return;
    target.health = Math.min(target.maxHealth, target.health + amount);
  }

  private damageBarricade(amount: number): void {
    this.barricade.health = Math.max(0, this.barricade.health - amount);
  }

  private repairBarricade(amount: number): void {
    this.barricade.health = Math.min(
      this.barricade.maxHealth,
      this.barricade.health + amount
    );
  }

  private handleMainControlHotkeys(): void {
    const actions: Array<[string, MainControlAction]> = [
      ['F1', 'menu'],
      ['F2', 'settings'],
      ['F3', 'pause'],
      ['Space', 'pause']
    ];

    for (const [code, action] of actions) {
      if (!this.input.consumeAction(code)) continue;
      if (this.mode === 'playing') {
        this.openMainControlPanel(action);
        return;
      }
      if (this.mode === 'paused') {
        if (this.pausedControl === action) {
          this.resumeFromMainControlPanel();
        } else {
          this.openMainControlPanel(action);
        }
        return;
      }
    }
  }

  private openMainControlPanel(action: MainControlAction): void {
    this.mode = 'paused';
    this.pausedControl = action;
    this.stopLivingSoldierWeaponShots();
    document.exitPointerLock();

    if (action === 'menu') {
      this.hud.showMainMenu({
        onPreparation: () => this.openPreparation(true),
        onExit: () => this.resetToFreshIntro(),
        onCheat: () => this.openCheatMenu(),
        onResume: () => this.resumeFromMainControlPanel()
      });
      return;
    }

    const details: Record<MainControlAction, string> = {
      menu: 'Run menu selected with F1.',
      settings: 'Settings will be implemented later.',
      pause: 'Game paused with F3.'
    };
    const title = action === 'settings' ? 'SETTINGS' : action.toUpperCase();
    this.hud.showMainControlPanel(title, details[action], () => this.resumeFromMainControlPanel());
  }

  private openCheatMenu(): void {
    this.mode = 'paused';
    this.pausedControl = 'menu';
    this.hud.showCheatMenu(
      {
        infiniteAmmo: this.weapon.infiniteAmmo,
        powerShot: this.weapon.powerShot,
        noReload: this.weapon.noReload
      },
      {
        onInfiniteAmmo: () => {
          this.cheatModeUsed = true;
          this.weapon.infiniteAmmo = !this.weapon.infiniteAmmo;
          this.openCheatMenu();
        },
        onPowerShot: () => {
          this.cheatModeUsed = true;
          this.weapon.powerShot = !this.weapon.powerShot;
          this.openCheatMenu();
        },
        onNoReload: () => {
          this.cheatModeUsed = true;
          this.weapon.noReload = !this.weapon.noReload;
          this.openCheatMenu();
        },
        onJumpStage: () => this.jumpToStageFromCheat(),
        onRank: () => this.showRankPlaceholder(),
        onBack: () => this.openMainControlPanel('menu')
      }
    );
  }

  private jumpToStageFromCheat(): void {
    const answer = window.prompt('Jump to stage number', String(Math.max(1, this.waves.stage)));
    const stage = Number.parseInt(answer ?? '', 10);
    if (Number.isFinite(stage) && stage > 0) {
      this.enemies.clear();
      this.upgrades.resetStageUpgrades();
      this.waves.jumpToWave(stage);
      this.setStageBackground(this.waves.stage);
      this.setupCombatantsFromPreparation();
      this.resetBarricade();
      this.resetAim();
      this.alignStageMapToBackground();
      this.cheatModeUsed = true;
      this.cheatJumpUsed = true;
    }
    this.resumeFromMainControlPanel();
  }

  private showRankPlaceholder(): void {
    this.audio.playRank();
    this.hud.showTopRanks(() => this.openCheatMenu());
  }

  private forceGameOver(): void {
    this.mode = 'gameover';
    this.pausedControl = null;
    this.stopLivingSoldierWeaponShots();
    this.audio.playGameOver();
    this.hud.showGameOver(
      this.score,
      this.waves.stage,
      () => this.resetToFreshIntro(),
      () => this.audio.playRank()
    );
  }

  private exitToIntro(): void {
    this.mode = 'ready';
    this.pausedControl = null;
    this.stopLivingSoldierWeaponShots();
    this.enemies.clear();
    this.hud.hideOverlay();
    document.exitPointerLock();
    this.showIntro();
  }

  private resetToFreshIntro(): void {
    this.mode = 'ready';
    this.pausedControl = null;
    this.preparationFromRun = false;
    this.stopLivingSoldierWeaponShots();
    document.exitPointerLock();
    this.preparation.reset();
    this.resetRunProgress();
    this.resetAim();
    this.alignStageMapToBackground();
    this.hud.hideOverlay();
    this.showIntro();
  }

  private resumeFromMainControlPanel(): void {
    if (this.mode !== 'paused') {
      return;
    }

    this.pausedControl = null;
    this.mode = 'playing';
    this.audio.unlock();
    this.hud.hideOverlay();
    void this.hud.getCanvasHost().requestPointerLock();
  }

  private resumeFromPreparation(): void {
    this.preparationFromRun = false;
    this.audio.unlock();
    this.setupCombatantsFromPreparation();
    this.alignStageMapToBackground();
    this.pausedControl = null;
    this.mode = 'playing';
    this.hud.hideOverlay();
    void this.hud.getCanvasHost().requestPointerLock();
  }

  private setupCombatantsFromPreparation(): void {
    const snapshot = this.preparation.snapshot();
    const magazineCount = this.getPreparedMagazineCount(snapshot);
    this.soldierCombat.clear();
    this.activeSoldierId = null;
    this.activeWeaponId = null;
    this.turretFireCooldowns.clear();

    const hiredSoldiers = snapshot.soldiers.filter(candidate => candidate.hired);
    this.weaponView.prepareWeapons(hiredSoldiers.map(soldier => soldier.equippedWeaponId));
    for (const [index, soldier] of hiredSoldiers.entries()) {
      const weapon =
        snapshot.weapons.find(candidate => candidate.id === soldier.equippedWeaponId) ??
        snapshot.weapons[0];
      const derived = this.getDerivedCombatStats(soldier, weapon);
      const definition = this.createWeaponDefinition(soldier, weapon);
      this.soldierCombat.set(soldier.id, {
        soldierId: soldier.id,
        health: derived.health,
        maxHealth: derived.health,
        fireCooldown: index * 0.12,
        reloadTimer: 0,
        ammo: definition.magazineSize,
        magazines: magazineCount,
        weaponId: soldier.equippedWeaponId,
        definition
      });
    }

    this.turrets = snapshot.turretSlots.map(turret => ({
      installed: Boolean(turret),
      id: turret?.id,
      name: turret?.name,
      image: turret?.image,
      kind: turret?.kind,
      damage: turret?.damage,
      fireRate: turret?.fireRate,
      shield: turret?.maxShield ?? 0,
      maxShield: turret?.maxShield ?? 100
    }));

    while (this.turrets.length < 4) {
      this.turrets.push({ installed: false, shield: 0, maxShield: 100 });
    }

    this.syncActiveSoldierWeapon();
  }

  private syncActiveSoldierWeapon(): void {
    const snapshot = this.preparation.snapshot();
    const activeSoldier =
      snapshot.soldiers.find(
        soldier => soldier.id === this.activeSoldierId && soldier.hired && this.isSoldierAlive(soldier.id)
      ) ??
      snapshot.soldiers.find(soldier => soldier.hired && this.isSoldierAlive(soldier.id));

    if (!activeSoldier) {
      this.activeSoldierId = null;
      this.activeWeaponId = null;
      this.player.health = 0;
      return;
    }

    const combat = this.soldierCombat.get(activeSoldier.id);
    if (combat) {
      this.player.maxHealth = combat.maxHealth;
      this.player.health = combat.health;
    }

    const visibleWeaponIds = this.getAliveSoldiers().map(soldier => soldier.weaponId);
    this.weaponView.setWeapons(visibleWeaponIds, activeSoldier.equippedWeaponId);

    const weapon =
      snapshot.weapons.find(candidate => candidate.id === activeSoldier.equippedWeaponId) ??
      snapshot.weapons[0];

    if (
      this.activeSoldierId === activeSoldier.id &&
      this.activeWeaponId === activeSoldier.equippedWeaponId
    ) {
      return;
    }

    this.activeSoldierId = activeSoldier.id;
    this.activeWeaponId = activeSoldier.equippedWeaponId;
    this.weapon.setDefinition(combat?.definition ?? this.createWeaponDefinition(activeSoldier, weapon));
  }

  private getAliveSoldiers(): SoldierCombatState[] {
    return [...this.soldierCombat.values()].filter(soldier => soldier.health > 0);
  }

  private stopLivingSoldierWeaponShots(): void {
    this.audio.stopWeaponShots(
      this.getAliveSoldiers().map(combat => combat.definition.soundId)
    );
  }

  private isSoldierAlive(soldierId: string): boolean {
    return (this.soldierCombat.get(soldierId)?.health ?? 0) > 0;
  }

  private getSoldierHealthSnapshots(snapshot: PreparationSnapshot): SoldierHealthSnapshot[] {
    return snapshot.soldiers.map(soldier => {
      const combat = this.soldierCombat.get(soldier.id);
      return {
        soldierId: soldier.id,
        health: combat?.health ?? 0,
        maxHealth: combat?.maxHealth ?? 1,
        ammo: combat?.ammo ?? 0,
        magazines: combat?.magazines ?? 0
      };
    });
  }

  private getPreparedMagazineCount(snapshot: PreparationSnapshot): number {
    return snapshot.items.find(item => item.id === 'magazine')?.count ?? 0;
  }

  private createWeaponDefinition(
    soldier: PreparationSoldier,
    weapon: PreparationWeapon
  ): WeaponDefinition {
    const derived = this.getDerivedCombatStats(soldier, weapon);
    return {
      id: weapon.id,
      name: weapon.name,
      damage: derived.damage,
      fireRate: derived.fireRate,
      criticalChance: derived.criticalChance,
      magazineSize: weapon.magazineSize,
      reloadTime: weapon.reloadTime,
      range: weapon.range,
      spread: weapon.spread,
      soundId: weapon.soundId
    };
  }

  private getDerivedCombatStats(
    soldier: PreparationSoldier,
    weapon: PreparationWeapon
  ): {
    str: number;
    dex: number;
    int: number;
    health: number;
    damage: number;
    fireRate: number;
    criticalChance: number;
  } {
    const str = soldier.stats.str * weapon.statScale.str;
    const dex = soldier.stats.dex * weapon.statScale.dex;
    const int = soldier.stats.int * weapon.statScale.int;
    return {
      str,
      dex,
      int,
      health: Math.max(1, Math.ceil(str) * 10),
      damage: weapon.damage * (str / 100),
      fireRate: weapon.fireRate * (dex / 100),
      criticalChance: Math.min(0.95, weapon.criticalChance * (int / 100))
    };
  }

  private applyWaveClearRewards(): ClearReward {
    const reward = {
      gold: this.randomInt(10000, 50000),
      rubi: this.randomInt(1, 10),
      magazines: 10
    };
    this.preparation.addGold(reward.gold);
    this.preparation.addRubi(reward.rubi);
    this.preparation.addItemCount('magazine', reward.magazines);
    for (const combat of this.soldierCombat.values()) {
      combat.magazines += reward.magazines;
    }
    return reward;
  }

  private applyStageClearRewards(): ClearReward {
    this.applyWaveClearRewards();
    const reward = {
      gold: this.randomInt(50000, 100000),
      rubi: this.randomInt(10, 20),
      magazines: 0
    };
    this.preparation.addGold(reward.gold);
    this.preparation.addRubi(reward.rubi);
    return reward;
  }

  private openUpgradeMenu(reward: ClearReward): void {
    this.mode = 'upgrade';
    this.stopLivingSoldierWeaponShots();
    document.exitPointerLock();
    this.hud.showUpgrades(this.upgrades.getChoices(), reward, (upgrade: Upgrade) => {
      upgrade.apply();
      this.audio.unlock();
      this.hud.hideOverlay();
      this.waves.continueAfterUpgrade();
      this.alignStageMapToBackground();
      this.mode = 'playing';
      void this.hud.getCanvasHost().requestPointerLock();
    });
  }

  private openStageClearPanel(reward: ClearReward): void {
    this.mode = 'upgrade';
    this.stopLivingSoldierWeaponShots();
    document.exitPointerLock();
    this.upgrades.resetStageUpgrades();
    const hasNextStage = this.waves.stage < imageAssets.stageBackgrounds.length;
    this.hud.showStageClear(this.waves.stage, reward, hasNextStage, () => {
      this.audio.unlock();
      this.hud.hideOverlay();
      if (!hasNextStage) {
        this.resetToFreshIntro();
        return;
      }
      this.waves.continueAfterStageClear();
      this.setStageBackground(this.waves.stage);
      this.resetBarricade();
      this.setupCombatantsFromPreparation();
      this.resetAim();
      this.alignStageMapToBackground();
      this.mode = 'playing';
      void this.hud.getCanvasHost().requestPointerLock();
    });
  }

  private randomInt(min: number, max: number): number {
    return Math.floor(min + Math.random() * (max - min + 1));
  }

  private configureRenderer(): void {
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
    this.renderer.setClearColor('#111518');
    this.renderer.domElement.className = 'game-canvas';
    this.hud.getCanvasHost().prepend(this.renderer.domElement);
  }

  private createWorld(): void {
    this.scene.background = new Color('#111518');
    this.scene.fog = new Fog('#111518', 34, 74);

    this.setStageBackground(1);

    const floor = new Mesh(
      new PlaneGeometry(84, 84),
      new MeshBasicMaterial({
        color: '#0d1412',
        transparent: true,
        opacity: 0.5,
        depthWrite: false
      })
    );
    floor.rotation.x = -Math.PI / 2;
    this.scene.add(floor);

    const road = new Mesh(
      new PlaneGeometry(17, 84),
      new MeshBasicMaterial({
        color: '#1c2424',
        transparent: true,
        opacity: 0.5,
        depthWrite: false
      })
    );
    road.rotation.x = -Math.PI / 2;
    road.position.set(0, 0.014, -11);
    this.scene.add(road);

    const stripeMaterial = new MeshBasicMaterial({
      color: '#d9c778',
      transparent: true,
      opacity: 0.5,
      depthWrite: false
    });
    for (let z = -44; z < 8; z += 7) {
      const stripe = new Mesh(new PlaneGeometry(0.26, 3.2), stripeMaterial);
      stripe.rotation.x = -Math.PI / 2;
      stripe.position.set(0, 0.05, z);
      this.scene.add(stripe);
    }

    const ambient = new AmbientLight('#d9f7ff', 0.42);
    const sun = new DirectionalLight('#fff0c9', 1.7);
    sun.position.set(-8, 14, 6);
    this.scene.add(ambient, sun, this.player.camera);
  }

  private bindEvents(): void {
    window.addEventListener('resize', this.resize);
    document.addEventListener('mousemove', this.handleMouseMove);
    window.addEventListener('beforeunload', () => {
      cancelAnimationFrame(this.animationId);
      this.input.dispose();
    });
  }

  private readonly handleMouseMove = (event: MouseEvent): void => {
    if (document.pointerLockElement !== this.hud.getCanvasHost()) {
      return;
    }

    const sensitivity = 0.0018;
    this.aim.x = Math.max(-0.96, Math.min(0.96, this.aim.x + event.movementX * sensitivity));
    this.aim.y = Math.max(-0.86, Math.min(0.86, this.aim.y - event.movementY * sensitivity));
    this.weaponView.setAim(this.aim.x, this.aim.y);
  };

  private readonly resize = (): void => {
    const bounds = this.hud.getCanvasHost().getBoundingClientRect();
    this.size.set(Math.max(1, bounds.width), Math.max(1, bounds.height));
    this.renderer.setSize(this.size.x, this.size.y);
    this.player.camera.aspect = this.size.x / this.size.y;
    this.player.camera.updateProjectionMatrix();
  };

  private setStageBackground(stage: number): void {
    const assetIndex = (Math.max(1, stage) - 1) % imageAssets.stageBackgrounds.length;
    const stageNumber = assetIndex + 1;
    this.currentStageNumber = stageNumber;
    const cached = this.stageBackgrounds.get(stageNumber);
    if (cached) {
      this.scene.background = cached;
      this.loadStageRoadProfile(stageNumber);
      return;
    }

    const texture = this.textureLoader.load(imageAssets.stageBackgrounds[assetIndex]);
    texture.colorSpace = SRGBColorSpace;
    this.stageBackgrounds.set(stageNumber, texture);
    this.scene.background = texture;
    this.loadStageRoadProfile(stageNumber);
  }

  private loadStageRoadProfile(stageNumber: number): void {
    void this.roadMaskLoader.load(stageNumber, true).then(profile => {
      if (this.currentStageNumber !== stageNumber) return;
      this.stageRoadProfile = profile;
      this.waves.setRoadProfile(profile);
      this.alignStageMapToBackground();
    });
  }
}
