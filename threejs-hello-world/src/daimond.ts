import { JSONLoader } from 'three';

export class Diamond {

  constructor() {
    //setting up loader for a model
    const loader = new JSONLoader();
    //load model and clone it
    loader.load('https://raw.githubusercontent.com/PavelLaptev/test-rep/master/threejs-post/diamond.json', function(geometry) {
      const material = new THREE.MeshPhongMaterial({
        color: Math.random() * 0xff00000 - 0xff00000,
        shading: THREE.FlatShading
      });
      const diamond = new THREE.Mesh(geometry, material);
      diamond.position.x = Math.random() * -distance * 6;
      diamond.position.y = Math.random() * -distance * 2;
      diamond.position.z = Math.random() * distance * 3;
      diamond.rotation.y = Math.random() * 2 * Math.PI;
      diamond.scale.x = diamond.scale.y = diamond.scale.z = Math.random() * 50 + 10;
    });
  }
}