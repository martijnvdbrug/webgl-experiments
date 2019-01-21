
export class Far extends PIXI.extras.TilingSprite {

  static readonly RESOURCE = 'assets/bg-far.png';
  static readonly DELTA_X = 0.32;
  viewportX: number;

  constructor(width: number, height: number) {
    const texture = PIXI.RenderTexture.fromImage('assets/bg-far.png');
    super(texture, width, height);
    this.position.x = 0;
    this.position.y = 0;
    this.tilePosition.x = 0;
    this.tilePosition.y = 0;
    this.viewportX = 0;
  }

  setViewportX(viewportX: number) {

    const distanceTravelled = viewportX - this.viewportX;
    this.viewportX = viewportX;
    this.tilePosition.x -= (distanceTravelled * Far.DELTA_X);
  }
}