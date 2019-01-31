export class LogoText extends PIXI.Text {

  constructor(text: string, height: number, width: number) {
    super(text, {fontFamily: 'Playfair Black', fontSize: height, fill: 0xffffff});
    this.width = width;
    this.height = height;
  }
}