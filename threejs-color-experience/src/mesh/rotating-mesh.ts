import { Geometry, Material, Mesh } from 'three';

export class RotatingMesh extends Mesh {

  constructor(geo: Geometry, mat: Material) {
    super(geo, mat);
    // TODO: add interactiveness
  }

  rotate(angle: number) {
    this.rotation.y += angle;
  }

}