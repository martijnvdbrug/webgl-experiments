import { CanColor } from './palette/interface/can-color';

export interface ColorableInterface {
  addColor(color: CanColor): void;

  /**
   * Remove ALL instances of a color
   * @param color
   */
  removeColor(color: CanColor): void;
}