import { RotatingMesh } from '../rotating-mesh';

export class MeshManager {


  static getMeshes<T extends RotatingMesh>(MeshType: new (...args) => T): T[] {
    const meshes: T[] = [];
    // https://coolors.co/6a0136-bfab25-b81365-026c7c-055864
    meshes.push(new MeshType({
      color: '#E53D00',
      x: 0,
      y: 0,
      z: 0
    }));

    meshes.push(new MeshType({
      color: '#FFE900',
      x: 2,
      y: 0,
      z: 0
    }));

    meshes.push(new MeshType({
      color: '#FFE900',
      x: 0,
      y: 0,
      z: -2
    }));

    return meshes;
  }

}