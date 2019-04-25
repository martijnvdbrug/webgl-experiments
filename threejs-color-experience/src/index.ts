import { ColorScene } from './color-scene';
import { ColorPalette } from './palette/interface/color-palette';

const colorScene = new ColorScene('canvas');
const colorPalette = new ColorPalette('color-palette', colorScene);
