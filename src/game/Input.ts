export class Input {
  private readonly keys = new Set<string>();
  private readonly requestedActions = new Set<string>();
  private shootHeld = false;
  private shootRequested = false;
  private shootReleased = false;
  private reloadRequested = false;

  constructor(private readonly target: HTMLElement) {
    window.addEventListener('keydown', this.handleKeyDown);
    window.addEventListener('keyup', this.handleKeyUp);
    document.addEventListener('pointerlockchange', this.handlePointerLockChange);
    target.addEventListener('mousedown', this.handleMouseDown);
    window.addEventListener('mouseup', this.handleMouseUp);
  }

  dispose(): void {
    window.removeEventListener('keydown', this.handleKeyDown);
    window.removeEventListener('keyup', this.handleKeyUp);
    document.removeEventListener('pointerlockchange', this.handlePointerLockChange);
    this.target.removeEventListener('mousedown', this.handleMouseDown);
    window.removeEventListener('mouseup', this.handleMouseUp);
  }

  isDown(code: string): boolean {
    return this.keys.has(code);
  }

  isShooting(): boolean {
    return this.shootHeld;
  }

  consumeShootRelease(): boolean {
    const released = this.shootReleased;
    this.shootReleased = false;
    return released;
  }

  consumeShootRequest(): boolean {
    const requested = this.shootRequested;
    this.shootRequested = false;
    return requested;
  }

  consumeReload(): boolean {
    const requested = this.reloadRequested;
    this.reloadRequested = false;
    return requested;
  }

  consumeAction(code: string): boolean {
    const requested = this.requestedActions.has(code);
    this.requestedActions.delete(code);
    return requested;
  }

  private readonly handleKeyDown = (event: KeyboardEvent): void => {
    if (['F1', 'F2', 'F3', 'F4', 'F5', 'F8', 'F12', 'Space'].includes(event.code)) {
      event.preventDefault();
    }

    this.keys.add(event.code);

    if (event.code === 'KeyR') {
      this.reloadRequested = true;
    }

    if (!event.repeat) {
      this.requestedActions.add(event.code);
    }
  };

  private readonly handleKeyUp = (event: KeyboardEvent): void => {
    this.keys.delete(event.code);
  };

  private readonly handleMouseDown = (event: MouseEvent): void => {
    if (event.button === 0 && document.pointerLockElement === this.target) {
      this.shootHeld = true;
      this.shootRequested = true;
    }
  };

  private readonly handleMouseUp = (event: MouseEvent): void => {
    if (event.button === 0) {
      this.shootReleased = this.shootHeld || this.shootReleased;
      this.shootHeld = false;
    }
  };

  private readonly handlePointerLockChange = (): void => {
    if (document.pointerLockElement !== this.target) {
      this.shootReleased = this.shootHeld || this.shootReleased;
      this.shootHeld = false;
    }
  };
}
