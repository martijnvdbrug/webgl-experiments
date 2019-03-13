import {
  AmbientLight,
  Camera,
  DirectionalLight, Light,
  PerspectiveCamera,
  Scene,
  WebGLRenderer
} from 'three';
import { Cloud } from './mesh/cloud';
import { LowPolyBall } from './mesh/low-poly-ball';
import { RotatingMesh } from './mesh/rotating-mesh';
import { DownloadUtil } from './util/download-util';

export class CloudScene extends Scene{

  private readonly renderer: WebGLRenderer;
  private readonly mesh: RotatingMesh;
  private readonly camera: Camera;
  private readonly lights: Light[] = [];

  constructor() {

    super();

    this.camera = new PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.01, 1000);
    this.camera.position.z = 4;

    // this.mesh = new Cloud();
    this.mesh = new LowPolyBall({
      color: '#ff07e0',
      x: 0,
      y: 0,
      z: 0
    });
    this.add(this.mesh);

    // Lights
    this.lights.push(new AmbientLight(0xffffff, 0.3));
    this.lights.push(new DirectionalLight(0xffffff, 0.7));
    this.lights[1].position.set(1, 1, 0).normalize();
    this.lights.push(new DirectionalLight(0xffffff, 0.7));
    this.lights[2].position.set(-3, -1, 0).normalize();
    this.add(...this.lights);

    this.renderer = this.getRenderer();
    this.render();
  }

  download() {
    DownloadUtil.downloadScene([this, this.camera, this.mesh]).catch(err => console.error(err));
  }

  render() {
    requestAnimationFrame(this.render.bind(this));
    this.mesh.rotate(0.01);
    this.renderer.render(this, this.camera);
  }

  getRenderer(): WebGLRenderer{
    const renderer = new WebGLRenderer({
      antialias: true,
      canvas: document.getElementById('canvas') as HTMLCanvasElement
    });
    renderer.setClearColor('#464646');
    renderer.setSize(window.innerWidth, window.innerHeight);
    return renderer;
  }
}