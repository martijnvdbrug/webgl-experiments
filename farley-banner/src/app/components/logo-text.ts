import * as PIXI from 'pixi.js';
import {GlitchFilter} from '@pixi/filter-glitch';

export class LogoText extends PIXI.Text {

  glitchFilter: GlitchFilter;

  constructor(text: string) {
    super(text, {
      fontFamily: 'Source Sans Pro',
      fontSize: '21vw',
      fill: 0xffffff,
    });
    this.position.y = (window.innerHeight - this.height) / 2;
    this.position.x = (window.innerWidth - this.width) / 2;
    this.glitchFilter = new GlitchFilter;
    this.interactive = true;
    this.buttonMode = true;
    this
        .on('mousedown', this.glitch)
        .on('touchstart', this.glitch)
        .on('mouseover', this.glitch);

  }

  glitch(){
    this.filters = [this.glitchFilter];
    let counter = 0;
    PIXI.ticker.shared.add((time) => {
      if (counter > 10) {
        this.filters = [];
        console.log(counter)
        counter = 0;
      }
      counter++
    })
  }

  glitchOff(time: number){
    this.filters = [];
  }
}