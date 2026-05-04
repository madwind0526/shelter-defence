export class Input {
  private readonly keys = new Set<string>();
  private shootHeld = false;
  private reloadRequested = false;

  constructor(private readonly target: HTMLElement) {
    window.addEventListener('keydown', this.handleKeyDown);
    window.addEventListener('keyup', this.handleKeyUp);
    target.addEventListener('mousedown', this.handleMouseDown);
    window.addEventListener('mouseup', this.handleMouseUp);
  }

  dispose(): void {
    window.removeEventListener('keydown', this.handleKeyDown);
    window.removeEventListener('keyup', this.handleKeyUp);
    this.target.removeEventListener('mousedown', this.handleMouseDown);
    window.removeEventListener('mouseup', this.handleMouseUp);
  }

  isDown(code: string): boolean {
    return this.keys.has(code);
  }

  isShooting(): boolean {
    return this.shootHeld;
  }

  consumeReload(): boolean {
    const requested = this.reloadRequested;
    this.reloadRequested = false;
    return requested;
  }

  private readonly handleKeyDown = (event: KeyboardEvent): void => {
    this.keys.add(event.code);

    if (event.code === 'KeyR') {
      this.reloadRequested = true;
    }
  };

  private readonly handleKeyUp = (event: KeyboardEvent): void => {
    this.keys.delete(event.code);
  };

  private readonly handleMouseDown = (event: MouseEvent): void => {
    if (event.button === 0) {
      this.shootHeld = true;
    }
  };

  private readonly handleMouseUp = (event: MouseEvent): void => {
    if (event.button === 0) {
      this.shootHeld = false;
    }
  };
}
