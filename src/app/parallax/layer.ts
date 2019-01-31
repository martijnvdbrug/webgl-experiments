import { AssetUtil } from '../asset/asset-util';

export class Layer extends PIXI.extras.TilingSprite {

  private readonly deltaX: number;

  constructor(name: string, height: number, width: number, delta: number) {
    const texture = PIXI.loader.resources[name].texture;
    const scale = AssetUtil.getScale(width, texture.width, height, texture.height);
    super(texture, texture.width * scale, texture.height * scale);
    this.tileScale.y = scale;
    this.tileScale.x = scale;
    this.position.x = 0;
    this.position.y = 0;
    this.tilePosition.x = 0;
    this.tilePosition.y = 0;
    this.deltaX = delta;
  }

  moveX(viewportX: number) {
    this.tilePosition.x -= (viewportX * this.deltaX);
  }
}