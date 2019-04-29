import { colors } from '../colors';
import { eventBus } from '../../index';
import { ColorEvents } from '../../events/color-events';

export class ColorPalette {

  element: HTMLElement;

  constructor(elementId: string) {
    this.element = document.getElementById(elementId);
    this.initColors();
  }

  initColors() {
    colors.forEach(c => {
      const li = document.createElement('li');
      li.innerHTML = `<i class="material-icons" style="color:${c.color}">stop</i> ${c.name}`;
      li.addEventListener('click', () => eventBus.dispatchEvent(new CustomEvent(ColorEvents.AddColorEvent, {detail: {color: c}})));
      this.element.appendChild(li);
    });
  }
}