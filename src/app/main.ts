import * as PIXI from 'pixi.js';
import { Far } from './far';
import { Scroller } from './scroller';
import Container = PIXI.Container;
import CanvasRenderer = PIXI.CanvasRenderer;
import WebGLRenderer = PIXI.WebGLRenderer;

export class Main {

  private static MIN_SCROLL_SPEED = 5;

  // private readonly app: Application;
  private readonly stage: Container;
  private renderer: WebGLRenderer | CanvasRenderer;
  private scroller: Scroller;
  private scrollSpeed: number;

  constructor() {
    this.stage = new PIXI.Container();
    this.renderer = PIXI.autoDetectRenderer(
        2000,
        384,
        {view: document.getElementById('canvas') as HTMLCanvasElement}
    );

    this.scrollSpeed = Main.MIN_SCROLL_SPEED;
    this.loadSprites();
  }

  update() {
    this.scroller.moveViewportXBy(this.scrollSpeed);
    this.renderer.render(this.stage);
    requestAnimationFrame(() => this.update());
  }

  loadSprites() {
    const loader = PIXI.loader;
    loader.add('bg-far', 'assets/bg-far.png');
    loader.once('complete', () => this.spritesLoaded());
    loader.load();
  }

  spritesLoaded() {
    console.log('loaded sprites');
    this.scroller = new Scroller(this.stage);
    this.update();
  }
}