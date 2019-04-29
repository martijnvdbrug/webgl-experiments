import { ColorableInterface } from '../colorable.interface';
import { CanColor } from '../palette/interface/can-color';

export class Shoppingcart implements ColorableInterface{

  element: HTMLElement;
  currentColors: CanColor[] = [];

  constructor(elementId: string) {
    this.element = document.getElementById(elementId);
    this.updateTotal();
  }

  updateTotal() {
    const price = this.currentColors.length * 3.60;
    const text = `${this.currentColors.length}x Loop Color 400ml &nbsp;&nbsp; <strong>${this.toCurrencyFormat(price)}</strong>`;
    this.element.innerHTML = text;
  }

  toCurrencyFormat(num) {
    return '€' + num.toFixed(2).replace('.', ',')
  }

  addColor(color: CanColor): void {
    this.currentColors.push(color);
    this.updateTotal();
  }

  removeColor(color: CanColor): void {
    this.currentColors = this.currentColors.filter(c => c.color != color.color);
  }

}