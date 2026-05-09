import { MathUtils, Vector3 } from 'three';
import { enemyModelAssets } from './AssetUrls';
import { EnemyManager, type EnemySpawnKind, type EnemySpawnOptions } from './Enemy';
import { Player } from './Player';
import { defaultStageRoadProfile, StageRoadProfile } from './StageRoadMask';
import { MonsterType, WaveSnapshot } from './types';

type WaveState = 'none' | 'waveComplete' | 'stageComplete';
type SpawnKind = EnemySpawnKind;
type WaveMode = 'stage' | 'infinite';

interface SpawnRequest {
  kind: SpawnKind;
  modelVariantId?: string;
}

const DEFAULT_WAVES_PER_STAGE = 5;
const WAVE_NORMAL_COUNTS = [20, 40, 60, 80, 100];
const BASE_ZOMBIE_HEALTH = 100;
const STAGE_HEALTH_MULTIPLIER = 1.5;
const ZOMBIE_MODEL_CHOICES_PER_WAVE = 3;
const DEBUG_MODEL_REVIEW_COUNT = 20;
const DEBUG_SPAWN_INTERVAL = 1;
const DEFAULT_SPAWN_BATCH_SIZE = 2;
const INFINITE_SPAWN_INTERVAL = 0.35;
const INFINITE_MIN_SPAWN_BATCH_SIZE = 6;
const INFINITE_DIFFICULTY_INTERVAL = 10;
const INFINITE_DIFFICULTY_MULTIPLIER = 1.1;
const INFINITE_RESPAWN_THRESHOLD_RATIO = 0.1;
const MAX_ACTIVE_DUMMY_ENEMIES = 140;
const MAX_ACTIVE_GLB_ENEMIES = 60;

export class WaveManager {
  wave = 0;
  stage = 1;
  waveInStage = 0;

  private spawnQueue: SpawnRequest[] = [];
  private enemiesTotal = 0;
  private spawnTimer = 0;
  private breakTimer = 1.2;
  private awaitingContinue = false;
  private roadProfile: StageRoadProfile = defaultStageRoadProfile;
  private activeModelVariantIds: string[] = [];
  private debugMode = false;
  private mode: WaveMode = 'stage';
  private infiniteElapsed = 0;
  private infiniteModelIndex = 0;
  private infiniteSurgeCount = 0;
  private infiniteSurgeSize = 0;
  private infiniteWaitingForThreshold = false;
  private infiniteWaitingForCap = false;
  private spawnBatchSize = DEFAULT_SPAWN_BATCH_SIZE;
  private monsterType: MonsterType = 'dummy';

  constructor(private readonly enemies: EnemyManager) {}

  setRoadProfile(profile: StageRoadProfile): void {
    this.roadProfile = profile;
  }

  reset(): void {
    this.wave = 0;
    this.stage = 1;
    this.waveInStage = 0;
    this.spawnQueue = [];
    this.enemiesTotal = 0;
    this.spawnTimer = 0;
    this.breakTimer = 1.2;
    this.awaitingContinue = false;
    this.roadProfile = defaultStageRoadProfile;
    this.activeModelVariantIds = [];
    this.mode = 'stage';
    this.infiniteElapsed = 0;
    this.infiniteModelIndex = 0;
    this.infiniteSurgeCount = 0;
    this.infiniteSurgeSize = 0;
    this.infiniteWaitingForThreshold = false;
    this.infiniteWaitingForCap = false;
  }

  setDebugMode(enabled: boolean): void {
    this.debugMode = enabled;
  }

  setSpawnBatchSize(count: number): void {
    this.spawnBatchSize = MathUtils.clamp(Math.floor(count), 1, 50);
  }

  setMonsterType(type: MonsterType): void {
    this.monsterType = type;
    this.activeModelVariantIds = this.pickMonsterModelVariantIds();
    this.infiniteModelIndex = 0;
  }

  update(delta: number, player: Player): WaveState {
    if (this.mode === 'infinite') {
      this.updateInfinite(delta, player);
      return 'none';
    }

    if (this.awaitingContinue) {
      return 'none';
    }

    if (this.spawnQueue.length <= 0 && this.enemies.getCount() === 0) {
      if (this.wave > 0) {
        this.awaitingContinue = true;
        return this.waveInStage >= this.getWavesPerStage() ? 'stageComplete' : 'waveComplete';
      }

      this.startNextWave();
    }

    if (this.breakTimer > 0) {
      this.breakTimer -= delta;
      return 'none';
    }

    this.spawnTimer -= delta;
    if (this.spawnQueue.length > 0 && this.spawnTimer <= 0) {
      if (!this.enemies.isMonsterTypeReady(this.monsterType)) {
        this.spawnTimer = 0.2;
        return 'none';
      }
      if (this.enemies.getCount() >= this.getActiveEnemyLimit()) {
        this.spawnTimer = 0.25;
        return 'none';
      }

      for (let i = 0; i < this.spawnBatchSize && this.spawnQueue.length > 0; i += 1) {
        const request = this.spawnQueue.shift() ?? { kind: 'normal' };
        this.enemies.spawn(this.getSpawnPosition(player.position), this.getSpawnOptions(request));
      }
      this.spawnTimer = this.getSpawnInterval();
    }

    return 'none';
  }

  continueAfterUpgrade(): void {
    this.awaitingContinue = false;
    this.startNextWave();
  }

  continueAfterStageClear(): void {
    this.awaitingContinue = false;
    this.stage += 1;
    this.waveInStage = 0;
    this.startNextWave();
  }

  jumpToWave(stage: number): void {
    this.mode = 'stage';
    this.stage = Math.max(1, Math.floor(stage));
    this.wave = this.getGlobalWaveOffset(this.stage);
    this.waveInStage = 0;
    this.awaitingContinue = false;
    this.startNextWave();
  }

  startInfiniteWar(stage: number): void {
    this.mode = 'infinite';
    this.stage = Math.max(1, Math.floor(stage));
    this.wave = this.getGlobalWaveOffset(this.stage);
    this.waveInStage = 0;
    this.awaitingContinue = false;
    this.spawnQueue = [];
    this.enemiesTotal = 0;
    this.spawnTimer = 0.15;
    this.breakTimer = 0;
    this.infiniteElapsed = 0;
    this.infiniteModelIndex = 0;
    this.infiniteSurgeCount = 0;
    this.infiniteWaitingForThreshold = false;
    this.infiniteWaitingForCap = false;
    this.startNextInfiniteSurge('start');
  }

  getSnapshot(): WaveSnapshot {
    return {
      stage: this.stage,
      wave: this.wave,
      waveInStage: this.waveInStage,
      wavesPerStage: this.getWavesPerStage(),
      total: this.enemiesTotal,
      remaining: this.spawnQueue.length + this.enemies.getCount(),
      infinite: this.mode === 'infinite',
      infiniteElapsed: this.infiniteElapsed
    };
  }

  isInfiniteWar(): boolean {
    return this.mode === 'infinite';
  }

  private startNextWave(): void {
    if (this.waveInStage >= this.getWavesPerStage()) {
      this.stage += 1;
      this.waveInStage = 0;
    }

    this.wave += 1;
    this.waveInStage += 1;
    this.activeModelVariantIds = this.pickMonsterModelVariantIds();
    this.spawnQueue = this.createSpawnQueue(this.waveInStage);
    this.enemiesTotal = this.spawnQueue.length;
    this.spawnTimer = 0.3;
    this.breakTimer = 0.9;
  }

  private createSpawnQueue(waveInStage: number): SpawnRequest[] {
    if (this.debugMode) {
      return this.createSequentialModelReviewQueue(DEBUG_MODEL_REVIEW_COUNT);
    }

    const normalCount = WAVE_NORMAL_COUNTS[waveInStage - 1] ?? WAVE_NORMAL_COUNTS[0];

    if (waveInStage === 4) {
      const firstHalf = this.createNormalSpawnRequests(normalCount / 2);
      const secondHalf = this.createNormalSpawnRequests(normalCount / 2);
      return [...firstHalf, { kind: 'midBoss' }, ...secondHalf];
    }

    if (waveInStage === 5) {
      return [
        { kind: 'midBoss' },
        { kind: 'midBoss' },
        ...this.createNormalSpawnRequests(normalCount),
        { kind: 'bigBoss' }
      ];
    }

    return this.createNormalSpawnRequests(normalCount);
  }

  private createNormalSpawnRequests(count: number): SpawnRequest[] {
    return Array.from({ length: count }).map(() => ({ kind: 'normal' }));
  }

  private createSequentialModelReviewQueue(countPerVariant: number): SpawnRequest[] {
    const modelVariantIds = this.getMonsterModelVariantIds();
    if (modelVariantIds.length === 0) {
      return this.createNormalSpawnRequests(countPerVariant);
    }

    return modelVariantIds.flatMap((modelVariantId) =>
      Array.from({ length: countPerVariant }).map(() => ({
        kind: 'normal',
        modelVariantId
      }))
    );
  }

  private updateInfinite(delta: number, player: Player): void {
    this.infiniteElapsed += delta;

    if (this.spawnQueue.length <= 0) {
      const activeCount = this.enemies.getCount();
      const threshold = this.getInfiniteRespawnThreshold();
      if (activeCount > threshold) {
        if (!this.infiniteWaitingForThreshold) {
          this.logInfiniteSpawn('pause', {
            activeCount,
            threshold,
            surge: this.infiniteSurgeCount
          });
        }
        this.infiniteWaitingForThreshold = true;
        this.spawnTimer = 0.25;
        return;
      }

      this.startNextInfiniteSurge('threshold', activeCount);
    }

    this.spawnTimer -= delta;
    if (this.spawnTimer > 0) return;
    if (!this.enemies.isMonsterTypeReady(this.monsterType)) {
      this.spawnTimer = 0.2;
      return;
    }
    const activeBefore = this.enemies.getCount();
    const activeLimit = this.getActiveEnemyLimit();
    if (activeBefore >= activeLimit) {
      if (!this.infiniteWaitingForCap) {
        this.logInfiniteSpawn('cap', {
          activeCount: activeBefore,
          activeLimit,
          queued: this.spawnQueue.length,
          surge: this.infiniteSurgeCount
        });
      }
      this.infiniteWaitingForCap = true;
      this.spawnTimer = 0.25;
      return;
    }
    this.infiniteWaitingForCap = false;

    const spawnCount = Math.min(
      this.getInfiniteSpawnBatchSize(),
      this.spawnQueue.length,
      activeLimit - activeBefore
    );

    for (let i = 0; i < spawnCount; i += 1) {
      const request = this.spawnQueue.shift() ?? this.createInfiniteSpawnRequest();
      this.enemies.spawn(this.getSpawnPosition(player.position), this.getSpawnOptions(request));
      this.enemiesTotal += 1;
    }
    this.logInfiniteSpawn('spawn', {
      spawned: spawnCount,
      batchSize: this.getInfiniteSpawnBatchSize(),
      activeBefore,
      activeAfter: activeBefore + spawnCount,
      activeLimit,
      queued: this.spawnQueue.length,
      surge: this.infiniteSurgeCount
    });
    this.spawnTimer = INFINITE_SPAWN_INTERVAL;
  }

  private startNextInfiniteSurge(reason: 'start' | 'threshold', activeCount = this.enemies.getCount()): void {
    this.infiniteSurgeCount += 1;
    this.spawnQueue = this.createFinalWaveSpawnQueue();
    this.infiniteSurgeSize = this.spawnQueue.length;
    this.infiniteWaitingForThreshold = false;
    this.logInfiniteSpawn('surge', {
      reason,
      activeCount,
      queued: this.spawnQueue.length,
      threshold: this.getInfiniteRespawnThreshold(),
      surge: this.infiniteSurgeCount
    });
  }

  private createFinalWaveSpawnQueue(): SpawnRequest[] {
    const finalWaveNormalCount = WAVE_NORMAL_COUNTS[DEFAULT_WAVES_PER_STAGE - 1] ?? WAVE_NORMAL_COUNTS[0];
    return [
      this.createInfiniteSpawnRequest('midBoss'),
      this.createInfiniteSpawnRequest('midBoss'),
      ...Array.from({ length: finalWaveNormalCount }).map(() => this.createInfiniteSpawnRequest('normal')),
      this.createInfiniteSpawnRequest('bigBoss')
    ];
  }

  private createInfiniteSpawnRequest(kind?: SpawnKind): SpawnRequest {
    const roll = Math.random();
    const spawnKind: SpawnKind = kind ?? (roll < 0.025 ? 'bigBoss' : roll < 0.115 ? 'midBoss' : 'normal');
    const modelVariantIds = this.getMonsterModelVariantIds();
    const modelVariantId = modelVariantIds[
      this.infiniteModelIndex % Math.max(1, modelVariantIds.length)
    ];
    this.infiniteModelIndex += 1;
    return { kind: spawnKind, modelVariantId };
  }

  private getSpawnOptions(request: SpawnRequest): EnemySpawnOptions {
    const infiniteScale = this.mode === 'infinite'
      ? Math.pow(
          INFINITE_DIFFICULTY_MULTIPLIER,
          Math.floor(this.infiniteElapsed / INFINITE_DIFFICULTY_INTERVAL)
        )
      : 1;
    const stageHealth = this.mode === 'infinite'
      ? BASE_ZOMBIE_HEALTH
      : BASE_ZOMBIE_HEALTH * Math.pow(STAGE_HEALTH_MULTIPLIER, this.stage - 1);
    const baseHealth = this.mode === 'infinite'
      ? stageHealth * infiniteScale
      : stageHealth;
    const bossScale: Record<SpawnKind, number> = {
      normal: 1,
      midBoss: 50,
      bigBoss: 100
    };
    const sizeScale: Record<SpawnKind, number> = {
      normal: 1,
      midBoss: 2,
      bigBoss: 3
    };

    return {
      baseHealth,
      wave: this.mode === 'infinite' ? 1 : this.waveInStage,
      spawnKind: request.kind,
      healthMultiplier: bossScale[request.kind],
      damageMultiplier: bossScale[request.kind] * infiniteScale,
      sizeMultiplier: sizeScale[request.kind],
      modelVariantId: request.modelVariantId,
      modelVariantIds: request.modelVariantId ? undefined : this.activeModelVariantIds
    };
  }

  private getSpawnInterval(): number {
    if (this.debugMode) {
      return DEBUG_SPAWN_INTERVAL;
    }

    return MathUtils.clamp(0.55 - this.waveInStage * 0.035, 0.18, 0.55);
  }

  private pickMonsterModelVariantIds(): string[] {
    const remainingIds = this.getMonsterModelVariantIds();
    const selectedIds: string[] = [];

    while (
      selectedIds.length < ZOMBIE_MODEL_CHOICES_PER_WAVE &&
      remainingIds.length > 0
    ) {
      const index = MathUtils.randInt(0, remainingIds.length - 1);
      const [id] = remainingIds.splice(index, 1);
      selectedIds.push(id);
    }

    return selectedIds;
  }

  private getMonsterModelVariantIds(): string[] {
    if (this.monsterType === 'dummy') return [];

    return enemyModelAssets.zombies.map((asset) => asset.id);
  }

  private getActiveEnemyLimit(): number {
    if (this.mode === 'infinite') {
      return Math.max(
        this.monsterType === 'dummy' ? MAX_ACTIVE_DUMMY_ENEMIES : MAX_ACTIVE_GLB_ENEMIES,
        this.infiniteSurgeSize + this.getInfiniteRespawnThreshold()
      );
    }

    return this.monsterType === 'dummy' ? MAX_ACTIVE_DUMMY_ENEMIES : MAX_ACTIVE_GLB_ENEMIES;
  }

  private getInfiniteRespawnThreshold(): number {
    return Math.max(1, Math.floor(this.infiniteSurgeSize * INFINITE_RESPAWN_THRESHOLD_RATIO));
  }

  private getInfiniteSpawnBatchSize(): number {
    return Math.max(this.spawnBatchSize, INFINITE_MIN_SPAWN_BATCH_SIZE);
  }

  private logInfiniteSpawn(event: string, details: Record<string, number | string>): void {
    console.info('[Infinite War spawn]', event, details);
  }

  private getWavesPerStage(stage = this.stage): number {
    return this.debugMode ? 1 : DEFAULT_WAVES_PER_STAGE;
  }

  private getGlobalWaveOffset(stage: number): number {
    return (stage - 1) * this.getWavesPerStage(stage);
  }

  private getSpawnPosition(playerPosition: Vector3): Vector3 {
    const laneWidth = MathUtils.clamp(
      this.roadProfile.laneHalfWidth + this.waveInStage * 0.12,
      4,
      10
    );
    const x = playerPosition.x + MathUtils.randFloatSpread(laneWidth * 2);
    const z = playerPosition.z - MathUtils.randFloat(28, 42);

    return new Vector3(
      MathUtils.clamp(x, -laneWidth, laneWidth),
      0,
      MathUtils.clamp(z, -37, 37)
    );
  }
}
