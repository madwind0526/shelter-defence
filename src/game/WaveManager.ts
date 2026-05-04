import { MathUtils, Vector3 } from 'three';
import { EnemyManager } from './Enemy';
import { Player } from './Player';

export class WaveManager {
  wave = 0;

  private enemiesToSpawn = 0;
  private spawnTimer = 0;
  private breakTimer = 1.2;
  private awaitingUpgrade = false;

  constructor(private readonly enemies: EnemyManager) {}

  update(delta: number, player: Player): 'none' | 'waveComplete' {
    if (this.awaitingUpgrade) {
      return 'none';
    }

    if (this.enemiesToSpawn <= 0 && this.enemies.getCount() === 0) {
      if (this.wave > 0) {
        this.awaitingUpgrade = true;
        return 'waveComplete';
      }

      this.startNextWave();
    }

    if (this.breakTimer > 0) {
      this.breakTimer -= delta;
      return 'none';
    }

    this.spawnTimer -= delta;
    if (this.enemiesToSpawn > 0 && this.spawnTimer <= 0) {
      this.enemies.spawn(this.getSpawnPosition(player.position), this.wave);
      this.enemiesToSpawn -= 1;
      this.spawnTimer = MathUtils.clamp(0.9 - this.wave * 0.04, 0.32, 0.9);
    }

    return 'none';
  }

  continueAfterUpgrade(): void {
    this.awaitingUpgrade = false;
    this.startNextWave();
  }

  private startNextWave(): void {
    this.wave += 1;
    this.enemiesToSpawn = 5 + this.wave * 3;
    this.spawnTimer = 0.3;
    this.breakTimer = 0.9;
  }

  private getSpawnPosition(playerPosition: Vector3): Vector3 {
    const laneWidth = MathUtils.clamp(18 + this.wave * 1.5, 18, 34);
    const x = playerPosition.x + MathUtils.randFloatSpread(laneWidth * 2);
    const z = playerPosition.z - MathUtils.randFloat(28, 42);

    return new Vector3(
      MathUtils.clamp(x, -37, 37),
      0,
      MathUtils.clamp(z, -37, 37)
    );
  }
}
