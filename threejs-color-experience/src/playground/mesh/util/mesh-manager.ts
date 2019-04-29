import { ColorMesh } from '../color-mesh';

export class MeshManager {

  // Creates meshes based on given object
  static createMeshes(mesh: new (...args) => ColorMesh): ColorMesh[] {
    const meshes: ColorMesh[] = [];
    // https://coolors.co/540d6e-ee4266-0fff95-ffd23f-0ead69
    meshes.push(new mesh({
      color: '#0FFF95',
      x: -1,
      y: 0,
      z: 0
    }));

    meshes.push(new mesh({
      color: '#FFD23F',
      x: 1,
      y: 0,
      z: 0
    }));

    meshes.push(new mesh({
      color: '#0EAD69',
      x: -1,
      y: 0,
      z: -2
    }));

    meshes.push(new mesh({
      color: '#ffffff',
      x: 1,
      y: 0,
      z: -4
    }));

    meshes.push(new mesh({
      color: '#282828',
      x: -1,
      y: 0,
      z: -4
    }));

    meshes.push(new mesh({
      color: '#540D6E',
      x: 1,
      y: 0,
      z: -2
    }));

    meshes.push(new mesh({
      color: '#EE4266',
      x: 3,
      y: 0,
      z: -2
    }));

    console.log(meshes[6]);

    return meshes;
  }


}