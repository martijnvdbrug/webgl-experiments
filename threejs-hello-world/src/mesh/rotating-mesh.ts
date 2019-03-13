import { Mesh } from 'three';

export class RotatingMesh extends Mesh{

  rotate(angle: number){
    this.rotation.y += angle;
  }

}