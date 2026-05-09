import {
  AmbientLight,
  BoxGeometry,
  Color,
  DirectionalLight,
  Fog,
  Mesh,
  MeshBasicMaterial,
  PlaneGeometry,
  Raycaster,
  Scene,
  SRGBColorSpace,
  Texture,
  TextureLoader,
  Vector2,
  Vector3,
  WebGLRenderer
} from 'three';
import { AudioManager } from './AudioManager';
import { imageAssets, mainHudAssets, upgradeAssets } from './AssetUrls';
import { EnemyManager, type EnemyKillReward } from './Enemy';
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
  GameSettings,
  MAX_TURRET_SLOTS,
  PreparationSnapshot,
  ActiveEffectSnapshot,
  BarricadeSnapshot,
  PreparationSoldier,
  PreparationTurret,
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

type PotionEffectId = 'potion-health' | 'potion-dex' | 'potion-int';

interface PotionEffectState {
  id: PotionEffectId;
  label: string;
  image: string;
  remaining: number;
}

const POTION_EFFECT_DURATION = 10;
const HEALTH_POTION_HEAL_PER_SECOND = 3.5;
const DEX_POTION_FIRE_RATE_MULTIPLIER = 1.15;
const INT_POTION_CRITICAL_BONUS = 0.1;
const CROSSHAIR_FIRE_BLINK_INTERVAL = 0.12;
const INFINITE_KILL_BUFF_CHANCE = 0.01;
const BASE_BARRICADE_HEALTH = 1500;
const GRENADE_SPLASH_RADIUS = 5.5;
const GRENADE_SPLASH_DAMAGE = 315;
const GRENADE_SPLASH_MAX_TARGETS = 10;
const AIR_STRIKE_DAMAGE = 800;
const HUD_UPDATE_INTERVAL = 1 / 20;

const DEFAULT_GAME_SETTINGS: GameSettings = {
  zombieMaterialMode: 'plain-metal',
  monsterType: 'dummy',
  zombieSpawnBatchSize: 2,
  soundEnabled: true,
  autoFire: false,
  autoTargeting: false,
  randomBuffs: false,
  infiniteWar: false,
  infiniteLoop: false
};

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
  private debugMode = false;
  private readonly aim = new Vector2(0, 0);
  private score = 0;
  private readonly soldierCombat = new Map<string, SoldierCombatState>();
  private readonly pendingDamagePopups = new Map<number, PendingDamagePopup>();
  private readonly activePotionEffects = new Map<PotionEffectId, PotionEffectState>();
  private readonly activeUpgradeEffects: ActiveEffectSnapshot[] = [];
  private readonly settings: GameSettings = { ...DEFAULT_GAME_SETTINGS };
  private readonly grenadeRaycaster = new Raycaster();
  private readonly debugWorldMeshes: Mesh[] = [];
  private readonly turretFireCooldowns = new Map<number, number>();
  private readonly turretShotCounts = new Map<number, number>();
  private crosshairPulseTimer = 0;
  private crosshairFireBlinkTimer = 0;
  private hudUpdateTimer = 0;
  private autoTargetLocked = false;
  private readonly barricade: BarricadeSnapshot = {
    health: BASE_BARRICADE_HEALTH,
    maxHealth: BASE_BARRICADE_HEALTH
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
  private turrets: TurretSnapshot[] = Array.from({ length: MAX_TURRET_SLOTS }, () => ({
    installed: false,
    fireTimer: 0,
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
    this.enemies.setKillRewardHandler((reward) => this.awardZombieKill(reward));
    this.bindEvents();
    this.applySettings();
    this.showIntro();
    this.preloadStageAssets();
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
      onLevelUpSoldier: () => {
        this.preparation.levelUpSelectedSoldier();
        this.openPreparation(fromRun);
      },
      onLevelUpWeapon: () => {
        this.preparation.levelUpSelectedWeapon();
        this.openPreparation(fromRun);
      },
      onResetWeapons: () => {
        this.preparation.resetWeapons();
        this.openPreparation(fromRun);
      },
      onHireSoldier: () => {
        this.preparation.hireSelectedSoldier();
        this.openPreparation(fromRun);
      },
      onHireTurret: () => {
        this.preparation.hireSelectedTurret();
        this.openPreparation(fromRun);
      },
      onFireTurret: () => {
        this.preparation.fireSelectedTurret();
        this.openPreparation(fromRun);
      },
      onResetPersonnel: () => {
        this.preparation.resetPersonnel();
        this.openPreparation(fromRun);
      },
      onBuyItem: (itemId: string, count = 1) => {
        this.preparation.buyItem(itemId, count);
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
    this.activePotionEffects.clear();
    this.activeUpgradeEffects.length = 0;
    this.turretFireCooldowns.clear();
    this.turretShotCounts.clear();
    this.resetSpecialCounters();
    this.resetBarricade();
    this.cheatModeUsed = false;
    this.setDebugMode(false, false);
    this.turrets = Array.from({ length: MAX_TURRET_SLOTS }, () => ({
      installed: false,
      fireTimer: 0,
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
      this.updatePotionEffects(delta);
      this.handleGameplayHotkeys();
      this.updateAutoTargeting(delta);
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
        if (this.debugMode) {
          this.advanceDebugStage();
        } else {
          this.openStageClearPanel(this.applyStageClearRewards());
        }
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
    this.crosshairPulseTimer = Math.max(0, this.crosshairPulseTimer - delta);
    this.updateCrosshairFireBlink(delta);
    this.hud.updateAim(this.aim.x, this.aim.y, this.getCrosshairPulse());

    if (this.mode === 'playing') {
      this.hudUpdateTimer -= delta;
      if (this.hudUpdateTimer > 0) return;
      this.hudUpdateTimer = HUD_UPDATE_INTERVAL;
    } else {
      this.hudUpdateTimer = 0;
    }

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
      infinite: waveSnapshot.infinite,
      infiniteElapsed: waveSnapshot.infiniteElapsed,
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
      enemyHealthBars: this.enemies.getHealthBars(this.player.camera, this.debugMode),
      activeEffects: this.getActiveEffectSnapshots(preparationSnapshot),
      cheats: {
        visible: this.cheatModeUsed,
        infiniteAmmo: this.weapon.infiniteAmmo,
        powerShot: this.weapon.powerShot,
        noReload: this.weapon.noReload,
        debugMode: this.debugMode
      },
      aimX: this.aim.x,
      aimY: this.aim.y,
      crosshairPulse: this.getCrosshairPulse()
    });
  }

  private updateCrosshairFireBlink(delta: number): void {
    if (this.isFiringInputActive()) {
      this.crosshairFireBlinkTimer += delta;
      return;
    }

    this.crosshairFireBlinkTimer = 0;
  }

  private getCrosshairPulse(): number {
    if (this.isFiringInputActive()) {
      return Math.floor(this.crosshairFireBlinkTimer / CROSSHAIR_FIRE_BLINK_INTERVAL) % 2 === 0
        ? 1
        : 0;
    }

    return Math.min(1, this.crosshairPulseTimer / 0.16);
  }

  private isFiringInputActive(): boolean {
    return this.mode === 'playing' && (this.input.isShooting() || this.settings.autoFire);
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
    this.barricade.maxHealth = this.getAnaisBarricadeMaxHealth();
    this.barricade.health = this.barricade.maxHealth;
  }

  private syncBarricadeMaxHealthFromAnais(): void {
    const previousMaxHealth = Math.max(1, this.barricade.maxHealth);
    const healthRatio = this.barricade.health / previousMaxHealth;
    this.barricade.maxHealth = this.getAnaisBarricadeMaxHealth();
    this.barricade.health = Math.min(
      this.barricade.maxHealth,
      Math.max(0, Math.round(this.barricade.maxHealth * healthRatio))
    );
  }

  private getAnaisBarricadeMaxHealth(): number {
    const anais = this.preparation.snapshot().soldiers.find(soldier => soldier.id === 'anais');
    if (!anais) return BASE_BARRICADE_HEALTH;
    const baseStr = Math.max(1, anais.stats.str);
    const levelMultiplier = 1 + (Math.max(1, anais.level) - 1) * 0.1;
    const currentStr = anais.stats.str * levelMultiplier;
    return Math.max(1, Math.round(BASE_BARRICADE_HEALTH * (currentStr / baseStr)));
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
      this.extendPotionEffect('potion-health', 'Health Potion', mainHudAssets.potionHealth);
    }

    if (itemId === 'potion-dex') {
      this.extendPotionEffect('potion-dex', 'Agility Potion', mainHudAssets.potionDex);
    }

    if (itemId === 'potion-int') {
      this.extendPotionEffect('potion-int', 'Intelligence Potion', mainHudAssets.potionInt);
    }

    if (itemId === 'repair-kit') {
      this.repairBarricade(350);
      this.repairTurrets(350);
    }
  }

  private extendPotionEffect(id: PotionEffectId, label: string, image: string): void {
    const current = this.activePotionEffects.get(id);
    this.activePotionEffects.set(id, {
      id,
      label,
      image,
      remaining: (current?.remaining ?? 0) + POTION_EFFECT_DURATION
    });
  }

  private updatePotionEffects(delta: number): void {
    const healthEffect = this.activePotionEffects.get('potion-health');
    if (healthEffect) {
      this.healAllCombatants(HEALTH_POTION_HEAL_PER_SECOND * delta);
    }

    for (const [id, effect] of this.activePotionEffects.entries()) {
      effect.remaining -= delta;
      if (effect.remaining <= 0) {
        this.activePotionEffects.delete(id);
      }
    }
  }

  private useGrenade(): void {
    if (this.grenadeCount <= 0) {
      return;
    }

    this.grenadeCount -= 1;
    this.hud.showExplosion(50 + this.aim.x * 50, 50 - this.aim.y * 50, 'grenade');
    this.grenadeRaycaster.setFromCamera(this.aim, this.player.camera);
    const impact = this.enemies.getAimImpactPoint(this.grenadeRaycaster, 34);
    const results = this.enemies.damageAround(
      impact,
      GRENADE_SPLASH_RADIUS,
      GRENADE_SPLASH_DAMAGE,
      0.35,
      GRENADE_SPLASH_MAX_TARGETS
    );
    for (const result of results) {
      this.queueFloatingDamage(result.enemyId, result.point, result.amount, false);
    }
    this.audio.playWeaponShot('explosion');
  }

  private useAirStrike(): void {
    if (this.airStrikeCount <= 0) {
      return;
    }

    this.airStrikeCount -= 1;
    this.hud.showAirStrikeExplosions();
    this.enemies.damageAll(AIR_STRIKE_DAMAGE);
    this.audio.playWeaponShot('fallingBomb');
    for (const delay of [280, 520, 760]) {
      window.setTimeout(() => this.audio.playWeaponShot('explosion'), delay);
    }
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
    const autoFireActive = this.settings.autoFire && this.mode === 'playing';
    if (
      document.pointerLockElement !== this.hud.getCanvasHost() ||
      (!shootRequested && !this.input.isShooting() && !autoFireActive) ||
      this.enemies.getCount() <= 0
    ) {
      return;
    }

    let kicked = false;
    let shotFired = false;
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
        this.getEffectiveSoldierWeaponDefinition(combat.definition),
        this.weapon.damageMultiplier,
        this.weapon.powerShot,
        this.aim
      );
      combat.fireCooldown = 1 / Math.max(
        0.1,
        combat.definition.fireRate * this.weapon.fireRateMultiplier * this.getPotionFireRateMultiplier()
      );
      shotFired = true;

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

      if (this.weapon.noReload && combat.ammo <= 0) {
        combat.ammo = combat.definition.magazineSize;
      } else if (combat.ammo <= 0 && this.startSoldierReload(combat)) {
        this.audio.playReload();
      }
    }

    if (kicked) {
      this.weaponView.kick();
    }
    if (shotFired) {
      this.crosshairPulseTimer = 0.16;
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
    const rangeZ = this.barricadeTarget.z - 2.8;

    for (const [index, turret] of this.turrets.entries()) {
      if (!turret.installed || turret.shield <= 0) continue;
      turret.fireTimer = Math.max(0, (turret.fireTimer ?? 0) - delta);

      const cooldown = (this.turretFireCooldowns.get(index) ?? 0) - delta;
      if (cooldown > 0) {
        this.turretFireCooldowns.set(index, cooldown);
        continue;
      }

      if (!this.enemies.hasEnemyInRange(rangeZ)) continue;

      const criticalChance = Math.min(
        0.95,
        (turret.criticalChance ?? 0) + this.getPotionCriticalBonus()
      );
      const critical = !this.weapon.powerShot && Math.random() < criticalChance;
      const damage = this.weapon.powerShot
        ? 999999
        : (turret.damage ?? 80) * this.weapon.damageMultiplier * (critical ? 2 : 1);
      const fireRate =
        (turret.fireRate ?? 2) * this.weapon.fireRateMultiplier * this.getPotionFireRateMultiplier();
      const outcome = this.enemies.damageFirstInRange(damage, rangeZ);
      if (!outcome) continue;

      this.queueFloatingDamage(
        outcome.enemyId,
        outcome.point,
        damage,
        this.weapon.powerShot || critical
      );
      this.audio.playWeaponShot('turret1');
      turret.fireTimer = 0.06;

      const shots = (this.turretShotCounts.get(index) ?? 0) + 1;
      this.turretShotCounts.set(index, shots % 100);
      this.turretFireCooldowns.set(index, shots % 100 === 0 ? 1.0 : 1 / fireRate);
    }
  }

  private awardZombieKill(reward: EnemyKillReward): void {
    const scoreGain = 50 + Math.floor(Math.random() * 101);
    const goldGain = 20 + Math.floor(Math.random() * 61);
    this.score += scoreGain;
    this.preparation.addGold(goldGain);
    if (reward.kind === 'midBoss') {
      this.preparation.addRubi(this.randomInt(10, 20));
    } else if (reward.kind === 'bigBoss') {
      this.preparation.addRubi(this.randomInt(20, 40));
    }
    this.maybeApplyInfiniteKillBuff();
  }

  private maybeApplyInfiniteKillBuff(): void {
    if (
      !this.waves.isInfiniteWar() ||
      Math.random() >= INFINITE_KILL_BUFF_CHANCE
    ) {
      return;
    }

    const buffs = [
      {
        label: 'Hot Rounds',
        image: upgradeAssets.hotRounds,
        apply: () => {
          this.weapon.damageMultiplier *= 1.18;
        }
      },
      {
        label: 'Light Trigger',
        image: upgradeAssets.lightTrigger,
        apply: () => {
          this.weapon.fireRateMultiplier *= 1.15;
        }
      },
      {
        label: 'Fast Hands',
        image: upgradeAssets.fastHands,
        apply: () => {
          this.weapon.reloadMultiplier *= 0.86;
        }
      },
      {
        label: 'Reinforced Nest',
        image: upgradeAssets.reinforcedNest,
        apply: () => {
          this.player.incomingDamageMultiplier *= 0.9;
        }
      },
      {
        label: 'Field Kit',
        image: upgradeAssets.fieldKit,
        apply: () => {
          this.player.maxHealth += 18;
          this.player.heal(30);
          for (const combat of this.soldierCombat.values()) {
            if (combat.health <= 0) continue;
            combat.maxHealth += 18;
            combat.health = Math.min(combat.maxHealth, combat.health + 30);
          }
          for (const turret of this.turrets) {
            if (!turret.installed || turret.shield <= 0) continue;
            turret.maxShield += 18;
            turret.shield = Math.min(turret.maxShield, turret.shield + 30);
          }
        }
      }
    ];
    const buff = buffs[this.randomInt(0, buffs.length - 1)];
    buff.apply();
    this.activeUpgradeEffects.push({
      id: `infinite-${performance.now().toFixed(0)}-${buff.label}`,
      label: `Infinite ${buff.label}`,
      image: buff.image
    });
    if (this.activeUpgradeEffects.length > 10) {
      this.activeUpgradeEffects.splice(0, this.activeUpgradeEffects.length - 10);
    }
    this.refreshActiveWeaponDefinition();
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

  private damageSoldier(amount: number): void {
    const target = this.getAliveSoldiers()[0];
    if (!target) return;

    target.health = Math.max(0, target.health - amount * this.player.incomingDamageMultiplier);
    if (target.health <= 0 && target.soldierId === this.activeSoldierId) {
      this.activeSoldierId = null;
      this.activeWeaponId = null;
    }
  }

  private healAllCombatants(amount: number): void {
    for (const soldier of this.getAliveSoldiers()) {
      soldier.health = Math.min(soldier.maxHealth, soldier.health + amount);
    }
    this.repairTurrets(amount);
  }

  private getEffectiveSoldierWeaponDefinition(definition: WeaponDefinition): WeaponDefinition {
    return {
      ...definition,
      fireRate: definition.fireRate * this.getPotionFireRateMultiplier(),
      criticalChance: Math.min(0.95, definition.criticalChance + this.getPotionCriticalBonus())
    };
  }

  private getPotionFireRateMultiplier(): number {
    return this.activePotionEffects.has('potion-dex') ? DEX_POTION_FIRE_RATE_MULTIPLIER : 1;
  }

  private getPotionCriticalBonus(): number {
    return this.activePotionEffects.has('potion-int') ? INT_POTION_CRITICAL_BONUS : 0;
  }

  private getActiveEffectSnapshots(snapshot: PreparationSnapshot): ActiveEffectSnapshot[] {
    const effects: ActiveEffectSnapshot[] = [...this.activeUpgradeEffects];
    const jacket = snapshot.items.find(item => item.id === 'jacket' && item.count > 0);

    if (jacket) {
      effects.push({
        id: 'jacket',
        label: jacket.name,
        image: mainHudAssets.jacket
      });
    }

    for (const effect of this.activePotionEffects.values()) {
      effects.push({
        id: effect.id,
        label: effect.label,
        image: effect.image,
        seconds: effect.remaining
      });
    }

    return effects;
  }

  private boostCombatantFireRate(multiplier: number): void {
    for (const soldier of this.getAliveSoldiers()) {
      soldier.definition.fireRate *= multiplier;
    }
    for (const turret of this.turrets) {
      if (!turret.installed || turret.shield <= 0) continue;
      turret.fireRate = (turret.fireRate ?? 2) * multiplier;
    }
    this.refreshActiveWeaponDefinition();
  }

  private boostCombatantCriticalChance(amount: number): void {
    for (const soldier of this.getAliveSoldiers()) {
      soldier.definition.criticalChance = Math.min(
        0.95,
        soldier.definition.criticalChance + amount
      );
    }
    for (const turret of this.turrets) {
      if (!turret.installed || turret.shield <= 0) continue;
      turret.criticalChance = Math.min(0.95, (turret.criticalChance ?? 0) + amount);
    }
    this.refreshActiveWeaponDefinition();
  }

  private applySettings(): void {
    this.normalizeExclusiveSettings();
    this.enemies.setZombieMaterialMode(this.settings.zombieMaterialMode);
    this.enemies.setMonsterType(this.settings.monsterType);
    this.waves.setMonsterType(this.settings.monsterType);
    this.waves.setSpawnBatchSize(this.settings.zombieSpawnBatchSize);
    this.audio.setMuted(!this.settings.soundEnabled);
  }

  private normalizeExclusiveSettings(): void {
    if (!this.settings.infiniteWar || !this.settings.infiniteLoop) return;
    this.settings.infiniteLoop = false;
  }

  private updateAutoTargeting(delta: number): void {
    if (!this.settings.autoTargeting || this.enemies.getCount() <= 0) {
      this.autoTargetLocked = false;
      return;
    }

    const targetAim = this.enemies.getNearestTargetAim(this.player.camera, this.aim);
    if (!targetAim) {
      this.autoTargetLocked = false;
      return;
    }

    this.autoTargetLocked = true;
    const tracking = Math.min(1, delta * 12);
    this.aim.lerp(targetAim, tracking);
    this.aim.x = Math.max(-0.96, Math.min(0.96, this.aim.x));
    this.aim.y = Math.max(-0.86, Math.min(0.86, this.aim.y));
    this.weaponView.setAim(this.aim.x, this.aim.y);
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

  private repairTurrets(amount: number): void {
    for (const turret of this.turrets) {
      if (!turret.installed) continue;
      turret.shield = Math.min(turret.maxShield, turret.shield + amount);
    }
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

    if (action === 'settings') {
      this.hud.showSettings(this.settings, {
        onChange: (nextSettings) => {
          Object.assign(this.settings, nextSettings);
          this.applySettings();
          this.openMainControlPanel('settings');
        },
        onResume: () => this.resumeFromMainControlPanel()
      });
      return;
    }

    const details: Record<MainControlAction, string> = {
      menu: 'Run menu selected with F1.',
      settings: 'Settings selected with F2.',
      pause: 'Game paused with F3.'
    };
    this.hud.showMainControlPanel(action.toUpperCase(), details[action], () => this.resumeFromMainControlPanel());
  }

  private openCheatMenu(): void {
    this.mode = 'paused';
    this.pausedControl = 'menu';
    this.hud.showCheatMenu(
      {
        infiniteAmmo: this.weapon.infiniteAmmo,
        powerShot: this.weapon.powerShot,
        noReload: this.weapon.noReload,
        debugMode: this.debugMode
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
        onDebugMode: () => this.toggleDebugModeFromCheat(),
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
    }
    this.resumeFromMainControlPanel();
  }

  private toggleDebugModeFromCheat(): void {
    this.cheatModeUsed = true;
    this.setDebugMode(!this.debugMode, true);
    this.openCheatMenu();
  }

  private setDebugMode(enabled: boolean, restartWave: boolean): void {
    this.debugMode = enabled;
    this.waves.setDebugMode(enabled);
    this.enemies.setDebugHitboxesVisible(enabled);
    this.setDebugWorldVisibility(enabled);

    if (!restartWave) return;

    this.enemies.clear();
    this.upgrades.resetStageUpgrades();
    this.waves.jumpToWave(this.waves.stage);
    this.setStageBackground(this.waves.stage);
    this.setupCombatantsFromPreparation();
    this.resetBarricade();
    this.resetAim();
    this.alignStageMapToBackground();
  }

  private advanceDebugStage(): void {
    this.enemies.clear();
    this.upgrades.resetStageUpgrades();
    this.waves.continueAfterStageClear();
    this.setStageBackground(this.waves.stage);
    this.setupCombatantsFromPreparation();
    this.resetBarricade();
    this.resetAim();
    this.alignStageMapToBackground();
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
    this.syncBarricadeMaxHealthFromAnais();
    const magazineCount = this.getPreparedMagazineCount(snapshot);
    this.soldierCombat.clear();
    this.activeSoldierId = null;
    this.activeWeaponId = null;
    this.turretFireCooldowns.clear();
    this.turretShotCounts.clear();

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
      ...this.createTurretSnapshot(turret),
      fireTimer: 0
    }));

    while (this.turrets.length < MAX_TURRET_SLOTS) {
      this.turrets.push({ installed: false, fireTimer: 0, shield: 0, maxShield: 100 });
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

  private refreshActiveWeaponDefinition(): void {
    const active = this.activeSoldierId ? this.soldierCombat.get(this.activeSoldierId) : null;
    if (!active) return;
    this.weapon.definition = { ...active.definition };
    this.weapon.ammo = active.ammo;
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
    const soldierLevelMultiplier = 1 + (soldier.level - 1) * 0.1;
    const weaponLevelMultiplier = 1 + (weapon.level - 1) * 0.1;
    const str = soldier.stats.str * soldierLevelMultiplier * weapon.statScale.str;
    const dex = soldier.stats.dex * soldierLevelMultiplier * weapon.statScale.dex;
    const int = soldier.stats.int * soldierLevelMultiplier * weapon.statScale.int;
    const weaponDamage = weapon.damage * weaponLevelMultiplier;
    const weaponFireRate = weapon.fireRate * weaponLevelMultiplier;
    return {
      str,
      dex,
      int,
      health: Math.max(1, Math.ceil(str) * 10),
      damage: weaponDamage * (str / 100),
      fireRate: weaponFireRate * (dex / 100),
      criticalChance: Math.min(0.95, weapon.criticalChance * (int / 100))
    };
  }

  private createTurretSnapshot(turret: PreparationTurret | null): TurretSnapshot {
    if (!turret) {
      return {
        installed: false,
        shield: 0,
        maxShield: 100
      };
    }

    const derived = this.getDerivedTurretStats(turret);
    return {
      installed: true,
      id: turret.id,
      name: turret.name,
      image: turret.image,
      kind: turret.kind,
      level: turret.level,
      damage: derived.damage,
      fireRate: derived.fireRate,
      criticalChance: derived.criticalChance,
      shield: derived.maxShield,
      maxShield: derived.maxShield
    };
  }

  private getDerivedTurretStats(turret: PreparationTurret): {
    damage: number;
    fireRate: number;
    criticalChance: number;
    maxShield: number;
  } {
    const levelMultiplier = 1 + (Math.max(1, turret.level) - 1) * 0.1;
    return {
      damage: turret.damage * levelMultiplier,
      fireRate: turret.fireRate * levelMultiplier,
      criticalChance: Math.min(0.95, turret.criticalChance * levelMultiplier),
      maxShield: Math.ceil(turret.maxShield * levelMultiplier)
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

  private applyUpgradeToCombatants(upgradeId: Upgrade['id']): void {
    if (upgradeId === 'magazine') {
      for (const combat of this.soldierCombat.values()) {
        combat.definition.magazineSize += 4;
        combat.ammo = Math.min(combat.definition.magazineSize, combat.ammo + 4);
      }
      this.refreshActiveWeaponDefinition();
      return;
    }

    if (upgradeId === 'maxHealth') {
      for (const combat of this.soldierCombat.values()) {
        if (combat.health <= 0) continue;
        combat.maxHealth += 18;
        combat.health = Math.min(combat.maxHealth, combat.health + 30);
      }
      for (const turret of this.turrets) {
        if (!turret.installed || turret.shield <= 0) continue;
        turret.maxShield += 18;
        turret.shield = Math.min(turret.maxShield, turret.shield + 30);
      }
    }
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
    const choices = this.upgrades.getChoices();

    if (this.settings.randomBuffs) {
      this.applyUpgradeChoice(choices[this.randomInt(0, choices.length - 1)]);
      return;
    }

    this.mode = 'upgrade';
    this.stopLivingSoldierWeaponShots();
    document.exitPointerLock();
    this.hud.showUpgrades(choices, reward, (upgrade: Upgrade) => this.applyUpgradeChoice(upgrade));
  }

  private applyUpgradeChoice(upgrade: Upgrade): void {
    upgrade.apply();
    if (upgrade.icon) {
      this.activeUpgradeEffects.push({
        id: `upgrade-${this.activeUpgradeEffects.length}-${upgrade.id}`,
        label: upgrade.title,
        image: upgrade.icon
      });
    }
    this.applyUpgradeToCombatants(upgrade.id);
    this.audio.unlock();
    this.hud.hideOverlay();
    this.waves.continueAfterUpgrade();
    this.alignStageMapToBackground();
    this.mode = 'playing';
    void this.hud.getCanvasHost().requestPointerLock();
  }

  private openStageClearPanel(reward: ClearReward): void {
    this.mode = 'upgrade';
    this.stopLivingSoldierWeaponShots();
    this.upgrades.resetStageUpgrades();
    this.activeUpgradeEffects.length = 0;
    const hasNextStage = this.waves.stage < imageAssets.stageBackgrounds.length;

    if (this.settings.infiniteLoop) {
      if (hasNextStage) {
        this.continueToNextStage();
        return;
      }
      if (!this.settings.infiniteWar) {
        this.restartStageLoop();
        return;
      }
    }

    if (!hasNextStage && this.settings.infiniteWar) {
      this.startInfiniteWar();
      return;
    }

    document.exitPointerLock();
    this.hud.showStageClear(this.waves.stage, reward, hasNextStage, () => {
      this.audio.unlock();
      this.hud.hideOverlay();
      if (!hasNextStage) {
        if (this.settings.infiniteLoop) {
          this.restartStageLoop();
          return;
        }
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
    },
    !hasNextStage ? () => this.startInfiniteWar() : undefined,
    !hasNextStage && this.settings.infiniteLoop ? 'Loop Stage 1' : undefined);
  }

  private continueToNextStage(): void {
    this.audio.unlock();
    this.hud.hideOverlay();
    this.waves.continueAfterStageClear();
    this.setStageBackground(this.waves.stage);
    this.resetBarricade();
    this.setupCombatantsFromPreparation();
    this.resetAim();
    this.alignStageMapToBackground();
    this.mode = 'playing';
    this.requestGameplayPointerLock();
  }

  private restartStageLoop(): void {
    this.audio.unlock();
    this.hud.hideOverlay();
    this.enemies.clear();
    this.upgrades.resetStageUpgrades();
    this.activeUpgradeEffects.length = 0;
    this.waves.jumpToWave(1);
    this.setStageBackground(1);
    this.resetBarricade();
    this.setupCombatantsFromPreparation();
    this.resetAim();
    this.alignStageMapToBackground();
    this.mode = 'playing';
    this.requestGameplayPointerLock();
  }

  private startInfiniteWar(): void {
    this.audio.unlock();
    this.hud.hideOverlay();
    this.enemies.clear();
    this.upgrades.resetStageUpgrades();
    this.activeUpgradeEffects.length = 0;
    this.waves.startInfiniteWar(imageAssets.stageBackgrounds.length);
    this.setStageBackground(this.waves.stage);
    this.resetBarricade();
    this.setupCombatantsFromPreparation();
    this.resetAim();
    this.alignStageMapToBackground();
    this.mode = 'playing';
    this.requestGameplayPointerLock();
  }

  private requestGameplayPointerLock(): void {
    if (document.pointerLockElement !== this.hud.getCanvasHost()) {
      void this.hud.getCanvasHost().requestPointerLock();
    }
  }

  private randomInt(min: number, max: number): number {
    return Math.floor(min + Math.random() * (max - min + 1));
  }

  private createDebugMaterial(color: string): MeshBasicMaterial {
    return new MeshBasicMaterial({
      color,
      transparent: true,
      opacity: 0,
      depthWrite: false
    });
  }

  private registerDebugWorldMesh(mesh: Mesh): Mesh {
    mesh.visible = this.debugMode;
    this.debugWorldMeshes.push(mesh);
    return mesh;
  }

  private setDebugWorldVisibility(visible: boolean): void {
    for (const mesh of this.debugWorldMeshes) {
      mesh.visible = visible;
      const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
      const debugOpacity = typeof mesh.userData.debugOpacity === 'number'
        ? mesh.userData.debugOpacity
        : 0.5;
      for (const material of materials) {
        if ('opacity' in material) {
          material.transparent = true;
          material.opacity = visible ? debugOpacity : 0;
          material.depthWrite = false;
          material.needsUpdate = true;
        }
      }
    }
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

    const floor = this.registerDebugWorldMesh(new Mesh(
      new PlaneGeometry(84, 84),
      this.createDebugMaterial('#0d1412')
    ));
    floor.rotation.x = -Math.PI / 2;
    this.scene.add(floor);

    const buildingMaterial = this.createDebugMaterial('#315879');
    for (const x of [-23, 23]) {
      const buildingZone = this.registerDebugWorldMesh(new Mesh(
        new PlaneGeometry(22, 84),
        buildingMaterial
      ));
      buildingZone.rotation.x = -Math.PI / 2;
      buildingZone.position.set(x, 0.018, -11);
      this.scene.add(buildingZone);
    }

    const road = this.registerDebugWorldMesh(new Mesh(
      new PlaneGeometry(17, 84),
      this.createDebugMaterial('#1c2424')
    ));
    road.rotation.x = -Math.PI / 2;
    road.position.set(0, 0.014, -11);
    this.scene.add(road);

    const stripeMaterial = this.createDebugMaterial('#d9c778');
    for (let z = -44; z < 8; z += 7) {
      const stripe = this.registerDebugWorldMesh(new Mesh(new PlaneGeometry(0.26, 3.2), stripeMaterial));
      stripe.rotation.x = -Math.PI / 2;
      stripe.position.set(0, 0.05, z);
      this.scene.add(stripe);
    }

    const barricadeDebug = this.registerDebugWorldMesh(new Mesh(
      new BoxGeometry(this.barricadeTarget.halfWidth * 2, 1.8, 0.35),
      this.createDebugMaterial('#f04d4d')
    ));
    barricadeDebug.userData.debugOpacity = 0.2;
    barricadeDebug.position.set(0, 0.9, this.barricadeTarget.z);
    this.scene.add(barricadeDebug);

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
    if (this.mode === 'playing' && this.settings.autoTargeting && this.autoTargetLocked) {
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
    void this.roadMaskLoader.load(stageNumber).then(profile => {
      if (this.currentStageNumber !== stageNumber) return;
      this.stageRoadProfile = profile;
      this.waves.setRoadProfile(profile);
      this.alignStageMapToBackground();
    });
  }

  private preloadStageAssets(): void {
    window.setTimeout(() => {
      imageAssets.stageBackgrounds.forEach((url, index) => {
        const stageNumber = index + 1;
        if (this.stageBackgrounds.has(stageNumber)) return;
        const texture = this.textureLoader.load(url);
        texture.colorSpace = SRGBColorSpace;
        this.stageBackgrounds.set(stageNumber, texture);
      });

      for (let stageNumber = 1; stageNumber <= imageAssets.stageRoadMasks.length; stageNumber += 1) {
        void this.roadMaskLoader.load(stageNumber);
      }
    }, 750);
  }
}
