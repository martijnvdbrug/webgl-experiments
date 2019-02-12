import * as PIXI from 'pixi.js';
import { GradientFilter } from './gradient.filter';

export class Background extends PIXI.Sprite {

  constructor(name: string, height: number, width: number) {
    const texture = PIXI.loader.resources[name].texture;
    super(texture);
    const gradient = new GradientFilter([113,23,234], [234,96,96]);
    this.filters = [gradient];
  }
}