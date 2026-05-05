export interface StageRoadProfile {
  topFraction: number;
  bottomFraction: number;
  centerFraction: number;
  widthFraction: number;
  laneHalfWidth: number;
}

export const defaultStageRoadProfile: StageRoadProfile = {
  topFraction: 0.61,
  bottomFraction: 1,
  centerFraction: 0.5,
  widthFraction: 0.62,
  laneHalfWidth: 9
};

export class StageRoadMaskLoader {
  private readonly cache = new Map<number, Promise<StageRoadProfile>>();

  constructor(private readonly maskUrls: string[]) {}

  load(stageNumber: number, forceReload = false): Promise<StageRoadProfile> {
    const maskIndex = (Math.max(1, stageNumber) - 1) % this.maskUrls.length;
    const cacheKey = maskIndex + 1;
    const cached = this.cache.get(cacheKey);
    if (cached && !forceReload) {
      return cached;
    }

    const request = this.analyze(
      this.getMaskUrl(maskIndex, forceReload)
    ).catch(() => defaultStageRoadProfile);
    this.cache.set(cacheKey, request);
    return request;
  }

  private getMaskUrl(maskIndex: number, forceReload: boolean): string {
    const url = this.maskUrls[maskIndex];
    if (!forceReload) return url;

    const separator = url.includes('?') ? '&' : '?';
    return `${url}${separator}roadMaskReload=${Date.now()}`;
  }

  private analyze(url: string): Promise<StageRoadProfile> {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = (): void => {
        const canvas = document.createElement('canvas');
        canvas.width = image.naturalWidth || image.width;
        canvas.height = image.naturalHeight || image.height;
        const context = canvas.getContext('2d', { willReadFrequently: true });
        if (!context || canvas.width <= 0 || canvas.height <= 0) {
          reject(new Error('Road mask could not be read.'));
          return;
        }

        context.drawImage(image, 0, 0);
        const pixels = context.getImageData(0, 0, canvas.width, canvas.height).data;
        resolve(this.profileFromPixels(pixels, canvas.width, canvas.height));
      };
      image.onerror = (): void => reject(new Error(`Road mask failed to load: ${url}`));
      image.src = url;
    });
  }

  private profileFromPixels(
    pixels: Uint8ClampedArray,
    width: number,
    height: number
  ): StageRoadProfile {
    let minX = width;
    let maxX = -1;
    let minY = height;
    let maxY = -1;
    let centerTotal = 0;
    let widthTotal = 0;
    let sampledRows = 0;

    for (let y = 0; y < height; y += 1) {
      let rowMinX = width;
      let rowMaxX = -1;

      for (let x = 0; x < width; x += 1) {
        const index = (y * width + x) * 4;
        const red = pixels[index];
        const green = pixels[index + 1];
        const blue = pixels[index + 2];

        if (red + green + blue > 96) continue;

        minX = Math.min(minX, x);
        maxX = Math.max(maxX, x);
        minY = Math.min(minY, y);
        maxY = Math.max(maxY, y);
        rowMinX = Math.min(rowMinX, x);
        rowMaxX = Math.max(rowMaxX, x);
      }

      if (rowMaxX >= rowMinX) {
        centerTotal += (rowMinX + rowMaxX) / 2 / width;
        widthTotal += (rowMaxX - rowMinX + 1) / width;
        sampledRows += 1;
      }
    }

    if (maxX < minX || maxY < minY || sampledRows <= 0) {
      return defaultStageRoadProfile;
    }

    const widthFraction = widthTotal / sampledRows;
    return {
      topFraction: minY / height,
      bottomFraction: maxY / height,
      centerFraction: centerTotal / sampledRows,
      widthFraction,
      laneHalfWidth: Math.min(10, Math.max(4, widthFraction * 18))
    };
  }
}
