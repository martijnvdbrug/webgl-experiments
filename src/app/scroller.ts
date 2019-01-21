import Container = PIXI.Container;
import { Far } from './far';

export class Scroller {

  tiling;
  private readonly far: Far;
  private readonly viewportX: number;

  constructor(stage: Container) {
    this.viewportX = 0;
    // this.far = new Far(2000, 250);

    this.tiling = new Far(2000, 250);
    // this.tiling = new PIXI.extras.TilingSprite(texture, 2000, 250);
    stage.addChild(this.tiling);
  }

  setViewportX(viewportX: number) {

    const distanceTravelled = viewportX - this.viewportX;
    // this.tiling.tilePosition.x -= (distanceTravelled * 0.32);
    this.tiling.setViewportX(viewportX);
  }

  moveViewportXBy(units: number) {
    const newViewportX = this.viewportX + units;
    this.setViewportX(newViewportX);
  }
}