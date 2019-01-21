import Container = PIXI.Container;
import { Layer } from './layer';
import { assets } from '../asset/assets';

export class Parallax {

  layers: Layer[] = [];
  private readonly assets: typeof assets;
  private readonly stage: Container;
  private readonly viewportX: number;
  private readonly height: number;
  private readonly width: number;

  constructor(stage: Container, height: number, width: number) {
    this.assets = assets;
    this.viewportX = 0;
    this.stage = stage;
    this.height = height;
    this.width = width;
    this.addSprites();
  }

  addSprites(): void {
    const stars = new Layer(assets.stars.id, this.width, this.height, 0.1);
    this.layers.push(stars);
    const silhouette = new Layer(assets.silhouette.id, this.width, this.height, 0.05);
    this.layers.push(silhouette);
    this.layers.forEach( layer => {
      this.stage.addChild(layer);
    });
  }

  moveViewportXBy(units: number): void {
    const newViewportX = this.viewportX + units;
    this.layers.forEach( layer => {
      layer.moveX(newViewportX);
    });
  }
}