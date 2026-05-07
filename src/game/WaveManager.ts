import { MathUtils, Vector3 } from 'three';
import { enemyModelAssets } from './AssetUrls';
import { EnemyManager, EnemySpawnOptions } from './Enemy';
import { Player } from './Player';
import { defaultStageRoadProfile, StageRoadProfile } from './StageRoadMask';
import { WaveSnapshot } from './types';

type WaveState = 'none' | 'waveComplete' | 'stageComplete';
type SpawnKind = 'normal' | 'midBoss' | 'bigBoss';

interface SpawnRequest {
  kind: SpawnKind;
  modelVariantId?: string;
}

const DEFAULT_WAVES_PER_STAGE = 5;
const WAVE_NORMAL_COUNTS = [20, 40, 60, 80, 100];
const BASE_ZOMBIE_HEALTH = 100;
const STAGE_HEALTH_MULTIPLIER = 1.5;
const ZOMBIE_MODEL_CHOICES_PER_WAVE = 3;
const ZOMBIE_MODEL_VARIANT_IDS = enemyModelAssets.zombies.map((asset) => asset.id);
const DEBUG_MODEL_REVIEW_COUNT = 20;
const DEBUG_SPAWN_INTERVAL = 1;

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
  }

  setDebugMode(enabled: boolean): void {
    this.debugMode = enabled;
  }

  update(delta: number, player: Player): WaveState {
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
      const request = this.spawnQueue.shift() ?? { kind: 'normal' };
      this.enemies.spawn(this.getSpawnPosition(player.position), this.getSpawnOptions(request));
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
    this.stage = Math.max(1, Math.floor(stage));
    this.wave = this.getGlobalWaveOffset(this.stage);
    this.waveInStage = 0;
    this.awaitingContinue = false;
    this.startNextWave();
  }

  getSnapshot(): WaveSnapshot {
    return {
      stage: this.stage,
      wave: this.wave,
      waveInStage: this.waveInStage,
      wavesPerStage: this.getWavesPerStage(),
      total: this.enemiesTotal,
      remaining: this.spawnQueue.length + this.enemies.getCount()
    };
  }

  private startNextWave(): void {
    if (this.waveInStage >= this.getWavesPerStage()) {
      this.stage += 1;
      this.waveInStage = 0;
    }

    this.wave += 1;
    this.waveInStage += 1;
    this.activeModelVariantIds = this.pickZombieModelVariantIds();
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
    return ZOMBIE_MODEL_VARIANT_IDS.flatMap((modelVariantId) =>
      Array.from({ length: countPerVariant }).map(() => ({
        kind: 'normal',
        modelVariantId
      }))
    );
  }

  private getSpawnOptions(request: SpawnRequest): EnemySpawnOptions {
    const baseHealth = BASE_ZOMBIE_HEALTH * Math.pow(STAGE_HEALTH_MULTIPLIER, this.stage - 1);
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
      wave: this.waveInStage,
      healthMultiplier: bossScale[request.kind],
      damageMultiplier: bossScale[request.kind],
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

  private pickZombieModelVariantIds(): string[] {
    const remainingIds = [...ZOMBIE_MODEL_VARIANT_IDS];
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
