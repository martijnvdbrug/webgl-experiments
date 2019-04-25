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
    colors.forEach(c => {
      const li = document.createElement('li');
      li.innerHTML = `<i class="large material-icons" style="color:${c.color}">stop</i> ${c.name}`;
      li.addEventListener('click', () => this.canvas.addColor(c.color));
      this.element.appendChild(li);
    });
  }


}