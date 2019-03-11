import {
  AmbientLight,
  Camera,
  DirectionalLight,
  PerspectiveCamera,
  Scene,
  WebGLRenderer
} from 'three';
import { Cloud } from './cloud';

export class CloudScene {

  cloud: Cloud;
  scene: Scene;
  camera: Camera;
  renderer: WebGLRenderer;

  constructor() {
    this.camera = new PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.01, 1000);
    this.camera.position.z = 4;

    this.scene = new Scene();

    this.cloud = new Cloud();
    this.scene.add(this.cloud);

    const light = new DirectionalLight(0xffffff, 0.7);
    light.position.set(1, 1, 0).normalize();
    this.scene.add(light);
    this.scene.add(new AmbientLight(0xffffff, 0.3));
    const light2 = new DirectionalLight(0xff5566, 0.7);
    light2.position.set(-3, -1, 0).normalize();
    this.scene.add(light2);

    this.renderer = new WebGLRenderer({
      antialias: true,
      canvas: document.getElementById('canvas') as HTMLCanvasElement
    });
    this.renderer.setClearColor('#000000');
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.render();
  }

  render() {
    requestAnimationFrame(this.render.bind(this));
    this.cloud.rotate(0.01);
    this.renderer.render(this.scene, this.camera);
  }
}