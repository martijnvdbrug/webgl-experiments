import * as PIXI from 'pixi.js';
import Container = PIXI.Container;
import { Layer } from './layer';
import { assets } from '../asset/assets';
import { LogoText } from './logo-text';

export class Parallax {

  private readonly assets: typeof assets;
  private readonly stage: Container;
  private readonly viewportX: number;
  private readonly height: number;
  private readonly width: number;
  private moveableLayers: Layer[] = [];

  constructor(stage: Container, height: number, width: number) {
    this.assets = assets;
    this.viewportX = 0;
    this.stage = stage;
    this.height = height;
    this.width = width;
    this.addSprites();
  }

  addSprites(): void {
    const stars = new Layer(assets.stars.id, this.height, this.width, 0.1);
    const text = new LogoText('\nFARLEY', this.height, this.width);
    const silhouette = new Layer(assets.silhouette.id, this.height, this.width, 0.05);
    this.moveableLayers.push(stars);
    this.moveableLayers.push(silhouette);
    this.stage.addChild(stars);
    this.stage.addChild(text);
    this.stage.addChild(silhouette);
  }

  moveViewportXBy(units: number): void {
    const newViewportX = this.viewportX + units;
    this.moveableLayers.forEach(layer => {
      layer.moveX(newViewportX);
    });
  }
}