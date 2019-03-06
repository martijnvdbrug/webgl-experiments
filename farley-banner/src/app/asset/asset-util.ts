import * as PIXI from 'pixi.js';
import { assets } from './assets';
import WebFont = require('webfontloader');

export class AssetUtil {

  static async loadAssets(fromAssets: typeof assets): Promise<void> {
    return new Promise((resolve, reject) => {
      Object.keys(fromAssets).forEach(assetName => {
        const asset = fromAssets[assetName];
        console.log(`loading ${asset.id}`);
        PIXI.loader.add(asset.id, asset.path);
      });
      PIXI.loader.once('complete', () => {
        resolve();
      });
      PIXI.loader.on('error', err => {
        reject(`Error loading sprites`);
      });
      PIXI.loader.load();
    });
  }

  static getScale(screenWidth: number, textureWidth: number, screenHeight: number, textureHeight: number): number {
    const widthScale = screenWidth / textureWidth;
    const heightScale = screenHeight / textureHeight;
    return widthScale > heightScale ? widthScale : heightScale; // return whichever is greatest
  }


  static loadFonts(fonts: string[]): Promise<void> {
    return new Promise((resolve, reject) => {
      WebFont.load({
        google: {
          families: fonts
        },
        active: resolve,
        inactive: reject
      });
    });
  }


}