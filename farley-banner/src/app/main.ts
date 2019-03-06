import * as PIXI from 'pixi.js';
import { assets } from './asset/assets';
import { AssetUtil } from './asset/asset-util';
import { Background } from './components/background';
import { LogoText } from './components/logo-text';
import CanvasRenderer = PIXI.CanvasRenderer;
import WebGLRenderer = PIXI.WebGLRenderer;
import Container = PIXI.Container;
import { fonts } from './asset/fonts';

export class Main {

  private static SCROLLSPEED = 5;

  private readonly height: number;
  private readonly width: number;
  private readonly stage: Container;
  private renderer: WebGLRenderer | CanvasRenderer;

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
    Promise.all([
      AssetUtil.loadAssets(assets),
      AssetUtil.loadFonts(fonts)
    ]).then(() => {
      this.makeStage();
      PIXI.ticker.shared.add((time) => {
        this.update(time)
      });
    }).catch(err => {
      console.error(`Failed to load assets/fonts:`, err);
    });
  }

  makeStage() {
    const background = new Background(assets.background.id);
    const farley = new LogoText('STUDIO\nFARLEY');
    this.stage.addChild(background);
    this.stage.addChild(farley);
    this.renderer.render(this.stage);
  }

  update(time: number) {
      this.renderer.render(this.stage);
  }

}