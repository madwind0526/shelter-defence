import {
  AmbientLight,
  BoxGeometry,
  Color,
  DirectionalLight,
  Fog,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  PlaneGeometry,
  Scene,
  TextureLoader,
  Vector2,
  WebGLRenderer
} from 'three';
import { AudioManager } from './AudioManager';
import { imageAssets } from './AssetUrls';
import { EnemyManager } from './Enemy';
import { Input } from './Input';
import { Player } from './Player';
import { PreparationState } from './PreparationState';
import { UpgradeSystem } from './UpgradeSystem';
import { WeaponController } from './Weapon';
import { WeaponView } from './WeaponView';
import { WaveManager } from './WaveManager';
import { GameMode, Upgrade } from './types';
import { Hud } from '../ui/Hud';

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

  private mode: GameMode = 'ready';
  private lastTime = 0;
  private animationId = 0;

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
    this.audio.unlock();
    this.mode = 'playing';
    this.hud.hideOverlay();
    void this.hud.getCanvasHost().requestPointerLock();
  }

  private showIntro(): void {
    this.mode = 'ready';
    this.hud.showIntro(
      () => this.openPreparation(),
      () => this.beginRun()
    );
  }

  private openPreparation(): void {
    this.mode = 'ready';
    this.hud.showPreparation(this.preparation.snapshot(), {
      onBack:        () => this.showIntro(),
      onStart:       () => this.beginRun(),
      onPrevSoldier: () => {
        this.preparation.selectSoldier(-1);
        this.openPreparation();
      },
      onNextSoldier: () => {
        this.preparation.selectSoldier(1);
        this.openPreparation();
      },
      onPrevWeapon: () => {
        this.preparation.selectWeapon(-1);
        this.openPreparation();
      },
      onNextWeapon: () => {
        this.preparation.selectWeapon(1);
        this.openPreparation();
      },
      onEquipWeapon: () => {
        this.preparation.equipSelectedWeapon();
        this.openPreparation();
      },
      onHire: () => {
        this.preparation.hireSelectedSoldier();
        this.openPreparation();
      },
      onBuyItem: (itemId: string) => {
        this.preparation.buyItem(itemId);
        this.openPreparation();
      },
      onResetItems: () => {
        this.preparation.resetItems();
        this.openPreparation();
      }
    });
  }

  private restart(): void {
    this.enemies.clear();
    window.location.reload();
  }

  private readonly tick = (time: number): void => {
    const delta = Math.min((time - this.lastTime) / 1000, 0.05);
    this.lastTime = time;

    this.update(delta);
    this.renderer.render(this.scene, this.player.camera);
    this.animationId = requestAnimationFrame(this.tick);
  };

  private update(delta: number): void {
    this.weapon.update(delta);
    this.weaponView.update(delta);

    if (this.mode === 'playing') {
      this.player.update();
      this.enemies.update(delta, this.player);

      if (this.input.consumeReload()) {
        if (this.weapon.tryReload()) {
          this.audio.playReload();
        }
      }

      if (this.input.isShooting()) {
        const fireOutcome = this.weapon.tryFire(this.player.camera, this.enemies);
        if (fireOutcome.result !== 'none') {
          this.weaponView.kick();
          this.audio.playWeaponShot(this.weapon.definition.soundId);
        }
        if (fireOutcome.reloadStarted) {
          this.audio.playReload();
        }
      }

      const waveState = this.waves.update(delta, this.player);
      if (waveState === 'waveComplete') {
        this.openUpgradeMenu();
      }

      if (this.player.health <= 0) {
        this.mode = 'gameover';
        document.exitPointerLock();
        const snapshot = this.enemies.getSnapshot();
        this.hud.showGameOver(snapshot.killed, this.waves.wave, () =>
          this.restart()
        );
      }
    }

    const snapshot = this.enemies.getSnapshot();
    this.hud.update({
      health: this.player.health,
      maxHealth: this.player.maxHealth,
      ammo: this.weapon.ammo,
      magazine: this.weapon.definition.magazineSize,
      wave: this.waves.wave,
      enemies: snapshot.remaining,
      kills: snapshot.killed,
      weaponName: this.weapon.definition.name,
      reloading: this.weapon.isReloading(),
      reloadProgress: this.weapon.getReloadProgress()
    });
  }

  private openUpgradeMenu(): void {
    this.mode = 'upgrade';
    document.exitPointerLock();
    this.hud.showUpgrades(this.upgrades.getChoices(), (upgrade: Upgrade) => {
      upgrade.apply();
      this.hud.hideOverlay();
      this.waves.continueAfterUpgrade();
      this.mode = 'playing';
      void this.hud.getCanvasHost().requestPointerLock();
    });
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

    const backdropTexture = this.textureLoader.load(imageAssets.stage1Background);
    backdropTexture.colorSpace = 'srgb';
    const backdrop = new Mesh(
      new PlaneGeometry(76, 42.4),
      new MeshBasicMaterial({
        map: backdropTexture,
        fog: false
      })
    );
    backdrop.position.set(0, 17.2, -44);
    this.scene.add(backdrop);

    const floor = new Mesh(
      new PlaneGeometry(84, 84),
      new MeshStandardMaterial({
        color: '#18201b',
        roughness: 0.9,
        metalness: 0.05
      })
    );
    floor.rotation.x = -Math.PI / 2;
    this.scene.add(floor);

    const road = new Mesh(
      new PlaneGeometry(17, 84),
      new MeshStandardMaterial({
        color: '#272c2d',
        roughness: 0.96,
        metalness: 0.02
      })
    );
    road.rotation.x = -Math.PI / 2;
    road.position.set(0, 0.014, -11);
    this.scene.add(road);

    const stripeMaterial = new MeshStandardMaterial({
      color: '#d9c778',
      roughness: 0.72
    });
    for (let z = -44; z < 8; z += 7) {
      const stripe = new Mesh(new BoxGeometry(0.26, 0.035, 3.2), stripeMaterial);
      stripe.position.set(0, 0.05, z);
      this.scene.add(stripe);
    }

    const bunkerMaterial = new MeshStandardMaterial({
      color: '#55605b',
      roughness: 0.86,
      metalness: 0.12
    });
    const barricade = new Mesh(new BoxGeometry(12, 1.1, 0.9), bunkerMaterial);
    barricade.position.set(0, 0.55, 4.1);
    this.scene.add(barricade);

    const leftPost = new Mesh(new BoxGeometry(0.7, 2.4, 0.7), bunkerMaterial);
    leftPost.position.set(-6.4, 1.2, 4.1);
    const rightPost = leftPost.clone();
    rightPost.position.x = 6.4;
    this.scene.add(leftPost, rightPost);

    const wallMaterial = new MeshStandardMaterial({
      color: '#3d4544',
      roughness: 0.9,
      metalness: 0.04
    });
    const rustMaterial = new MeshStandardMaterial({
      color: '#7f674b',
      roughness: 0.86,
      metalness: 0.12
    });

    for (let i = 0; i < 14; i += 1) {
      const side = i % 2 === 0 ? -1 : 1;
      const height = 2.2 + Math.random() * 4.8;
      const depth = 3 + Math.random() * 4;
      const building = new Mesh(
        new BoxGeometry(4 + Math.random() * 4, height, depth),
        wallMaterial
      );
      building.position.set(
        side * (12 + Math.random() * 10),
        height / 2,
        -42 + i * 4
      );
      this.scene.add(building);
    }

    for (let i = 0; i < 18; i += 1) {
      const side = Math.random() > 0.5 ? -1 : 1;
      const debris = new Mesh(
        new BoxGeometry(0.6 + Math.random() * 1.8, 0.35 + Math.random(), 0.5 + Math.random() * 1.5),
        Math.random() > 0.55 ? rustMaterial : wallMaterial
      );
      debris.position.set(
        side * (7.2 + Math.random() * 6),
        debris.geometry.parameters.height / 2,
        -39 + Math.random() * 40
      );
      debris.rotation.y = Math.random() * Math.PI;
      this.scene.add(debris);
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

    this.player.look(event.movementX, event.movementY);
  };

  private readonly resize = (): void => {
    const bounds = this.hud.getCanvasHost().getBoundingClientRect();
    this.size.set(Math.max(1, bounds.width), Math.max(1, bounds.height));
    this.renderer.setSize(this.size.x, this.size.y);
    this.player.camera.aspect = this.size.x / this.size.y;
    this.player.camera.updateProjectionMatrix();
  };
}
