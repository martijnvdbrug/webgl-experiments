import { PlaneGeometry, Vector3 } from 'three';

export class HorizontalLinePlaneGeometry extends PlaneGeometry {

  constructor(
      width?: number,
      height?: number,
      widthSegments?: number,
      heightSegments?: number
  ) {
    super(width, height, widthSegments, heightSegments);
    this.vertices = this.vertices.map( v => {
      if(Math.random() < 0.5) {
        return new Vector3();
      }
    })
  }

}