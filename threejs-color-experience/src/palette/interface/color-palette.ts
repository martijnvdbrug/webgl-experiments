import { PaletteCanvas } from '../palette-canvas';
import { colors } from '../colors';

export class ColorPalette {

  element: HTMLElement;
  canvas: PaletteCanvas;

  constructor(elementId: string, canvas: PaletteCanvas) {
    this.element = document.getElementById(elementId);
    this.canvas = canvas;
    this.initColors();
  }

  initColors(){
    colors.forEach(color => {
      this.element.innerHTML += `<li> <i class="large material-icons" style="color:${color.color}">stop</i> ${color.name}</li>`
    });
  }


}