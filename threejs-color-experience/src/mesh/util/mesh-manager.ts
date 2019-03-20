import { RotatingMesh } from '../rotating-mesh';

export class MeshManager {

  // Creates meshes based on given object
  static createMeshes(mesh1: new (...args) => RotatingMesh, mesh2: new (...args) => RotatingMesh): RotatingMesh[] {
    const meshes: RotatingMesh[] = [];
    // https://coolors.co/540d6e-ee4266-0fff95-ffd23f-0ead69
    meshes.push(new mesh1({
      color: '#0FFF95',
      x: -1,
      y: 0,
      z: 0
    }));

    meshes.push(new mesh1({
      color: '#FFD23F',
      x: 1,
      y: 0,
      z: 0
    }));

    meshes.push(new mesh1({
      color: '#0EAD69',
      x: -1,
      y: 0,
      z: -2
    }));

    meshes.push(new mesh1({
      color: '#ffffff',
      x: 1,
      y: 0,
      z: -4
    }));

    meshes.push(new mesh1({
      color: '#282828',
      x: -1,
      y: 0,
      z: -4
    }));

    meshes.push(new mesh2({
      color1: '#540D6E',
      color2: '#EE4266',
      x: 1,
      y: 0,
      z: -2
    }));

    return meshes;
  }


}