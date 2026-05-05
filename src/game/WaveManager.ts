import { MathUtils, Vector3 } from 'three';
import { EnemyManager, EnemySpawnOptions } from './Enemy';
import { Player } from './Player';
import { WaveSnapshot } from './types';

type WaveState = 'none' | 'waveComplete' | 'stageComplete';
type SpawnKind = 'normal' | 'midBoss' | 'bigBoss';

const WAVES_PER_STAGE = 5;
const WAVE_NORMAL_COUNTS = [20, 40, 60, 80, 100];
const BASE_ZOMBIE_HEALTH = 100;
const STAGE_HEALTH_MULTIPLIER = 1.5;

export class WaveManager {
  wave = 0;
  stage = 1;
  waveInStage = 0;

  private spawnQueue: SpawnKind[] = [];
  private enemiesTotal = 0;
  private spawnTimer = 0;
  private breakTimer = 1.2;
  private awaitingContinue = false;

  constructor(private readonly enemies: EnemyManager) {}

  update(delta: number, player: Player): WaveState {
    if (this.awaitingContinue) {
      return 'none';
    }

    if (this.spawnQueue.length <= 0 && this.enemies.getCount() === 0) {
      if (this.wave > 0) {
        this.awaitingContinue = true;
        return this.waveInStage >= WAVES_PER_STAGE ? 'stageComplete' : 'waveComplete';
      }

      this.startNextWave();
    }

    if (this.breakTimer > 0) {
      this.breakTimer -= delta;
      return 'none';
    }

    this.spawnTimer -= delta;
    if (this.spawnQueue.length > 0 && this.spawnTimer <= 0) {
      const kind = this.spawnQueue.shift() ?? 'normal';
      this.enemies.spawn(this.getSpawnPosition(player.position), this.getSpawnOptions(kind));
      this.spawnTimer = MathUtils.clamp(0.55 - this.waveInStage * 0.035, 0.18, 0.55);
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
    this.wave = (this.stage - 1) * WAVES_PER_STAGE;
    this.waveInStage = 0;
    this.awaitingContinue = false;
    this.startNextWave();
  }

  getSnapshot(): WaveSnapshot {
    return {
      stage: this.stage,
      wave: this.wave,
      waveInStage: this.waveInStage,
      wavesPerStage: WAVES_PER_STAGE,
      total: this.enemiesTotal,
      remaining: this.spawnQueue.length + this.enemies.getCount()
    };
  }

  private startNextWave(): void {
    if (this.waveInStage >= WAVES_PER_STAGE) {
      this.stage += 1;
      this.waveInStage = 0;
    }

    this.wave += 1;
    this.waveInStage += 1;
    this.spawnQueue = this.createSpawnQueue(this.waveInStage);
    this.enemiesTotal = this.spawnQueue.length;
    this.spawnTimer = 0.3;
    this.breakTimer = 0.9;
  }

  private createSpawnQueue(waveInStage: number): SpawnKind[] {
    const normalCount = WAVE_NORMAL_COUNTS[waveInStage - 1] ?? WAVE_NORMAL_COUNTS[0];

    if (waveInStage === 4) {
      const firstHalf = Array.from<SpawnKind>({ length: normalCount / 2 }).fill('normal');
      const secondHalf = Array.from<SpawnKind>({ length: normalCount / 2 }).fill('normal');
      return [...firstHalf, 'midBoss', ...secondHalf];
    }

    if (waveInStage === 5) {
      return [
        'midBoss',
        'midBoss',
        ...Array.from<SpawnKind>({ length: normalCount }).fill('normal'),
        'bigBoss'
      ];
    }

    return Array.from<SpawnKind>({ length: normalCount }).fill('normal');
  }

  private getSpawnOptions(kind: SpawnKind): EnemySpawnOptions {
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
      healthMultiplier: bossScale[kind],
      damageMultiplier: bossScale[kind],
      sizeMultiplier: sizeScale[kind]
    };
  }

  private getSpawnPosition(playerPosition: Vector3): Vector3 {
    const laneWidth = MathUtils.clamp(7 + this.waveInStage * 0.35, 7, 10);
    const x = playerPosition.x + MathUtils.randFloatSpread(laneWidth * 2);
    const z = playerPosition.z - MathUtils.randFloat(28, 42);

    return new Vector3(
      MathUtils.clamp(x, -10, 10),
      0,
      MathUtils.clamp(z, -37, 37)
    );
  }
}
