import * as PIXI from 'pixi.js';
import { GradientFilter } from './gradient.filter';

export class Background extends PIXI.Sprite {

  constructor(name: string) {
    const texture = PIXI.loader.resources[name].texture;
    // const texture = PIXI.Texture.fromVideo('assets/background.mp4');
    super(texture);
    this.height = window.innerHeight;
    this.width= window.innerWidth;
    const gradient = new GradientFilter([234,96,96], [113,23,234]);
    this.filters = [gradient];
  }
}