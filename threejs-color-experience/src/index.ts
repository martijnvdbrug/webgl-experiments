import { ColorScene } from './playground/color-scene';
import { ColorPalette } from './palette/interface/color-palette';
import { Shoppingcart } from './shoppingcart/shoppingcart';

export const eventBus = new EventTarget();

const colorScene = new ColorScene('canvas');
const colorPalette = new ColorPalette('color-palette-list');
const cart = new Shoppingcart('total-top');

eventBus.addEventListener('AddColorEvent', (event: CustomEvent) => {
  colorScene.addColor(event.detail.color);
  cart.addColor(event.detail.color);
});
