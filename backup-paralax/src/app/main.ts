import * as PIXI from 'pixi.js';
import Container = PIXI.Container;
import CanvasRenderer = PIXI.CanvasRenderer;
import WebGLRenderer = PIXI.WebGLRenderer;
import { assets } from './asset/assets';
import { AssetUtil } from './asset/asset-util';
import { Parallax } from './parallax/parallax';

export class Main {

  private static SCROLLSPEED = 5;

  private readonly height: number;
  private readonly width: number;
  private readonly stage: Container;
  private renderer: WebGLRenderer | CanvasRenderer;
  private parallax: Parallax;

  constructor() {
    this.height = window.innerHeight;
    this.width = window.innerWidth;
    this.stage = new PIXI.Container();
    this.renderer = PIXI.autoDetectRenderer(
        this.width,
        this.height,
        {
          view: document.getElementById('canvas') as HTMLCanvasElement,
          transparent: true
        }
    );
    console.log(`Using screenheight ${this.height} and screenwidth ${this.width}`);
    AssetUtil.loadAssets(assets).then( () => {
      this.parallax = new Parallax(this.stage, this.height, this.width);
      this.update();
    });
  }

  update() {
    this.parallax.moveViewportXBy(Main.SCROLLSPEED);
    this.renderer.render(this.stage);
    requestAnimationFrame(() => this.update());
  }

}