import * as PIXI from 'pixi.js';
import { assets } from './assets';

export class AssetUtil {

  static async loadAssets(fromAssets: typeof assets): Promise<void> {
    return new Promise((resolve, reject) => {
      Object.keys(fromAssets).forEach(assetName => {
        const asset = fromAssets[assetName];
        console.log(`loading ${asset.id}`);
        PIXI.loader.add(asset.id, asset.path);
      });
      PIXI.loader.once('complete', () => {
        console.log('Loaded sprites');
        resolve();
      });
      PIXI.loader.on('error', err => {
        console.error(`Error loading sprites`, err);
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

}