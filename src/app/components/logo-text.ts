import * as PIXI from 'pixi.js';
export class LogoText extends PIXI.Text {

  constructor(text: string, height: number, width: number) {
    super(text, {fontFamily : 'Arial', fontSize: '23vw', fill : 0xffffff, align : 'center'});
/*    this.width = width;
    this.height = height;*/
  }
}