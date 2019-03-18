import { RotatingMesh } from '../rotating-mesh';
import { LowPolySphere } from '../low-poly-sphere';
import { LowPolyGradientSphere } from '../low-poly-gradient-sphere';

export class MeshManager {


  static getLowPolyMeshes(): LowPolySphere[] {
    const meshes: LowPolySphere[] = [];
    // https://coolors.co/540d6e-ee4266-0fff95-ffd23f-0ead69
    meshes.push(new LowPolySphere({
      color: '#0FFF95',
      x: 0,
      y: 0,
      z: 1
    }));

    meshes.push(new LowPolySphere({
      color: '#FFD23F',
      x: 2,
      y: 0,
      z: 1
    }));

    meshes.push(new LowPolySphere({
      color: '#0EAD69',
      x: 0,
      y: 0,
      z: -1
    }));

    meshes.push(new LowPolyGradientSphere({
      color1: '#0EAD69',
      color2: '#0EAD69',
      x: 2,
      y: 0,
      z: -1
    }));

    return meshes;
  }


}