import {
  AmbientLight,
  Camera,
  DirectionalLight, Light,
  PerspectiveCamera,
  Scene,
  WebGLRenderer
} from 'three';
import { Cloud } from './mesh/cloud';
import { LowPolySphere } from './mesh/low-poly-sphere';
import { RotatingMesh } from './mesh/rotating-mesh';
import { DownloadUtil } from './util/download-util';
import { MeshManager } from './mesh/util/mesh-manager';
import { LowPolyGradientSphere } from './mesh/low-poly-gradient-sphere';

export class ColorScene extends Scene{

  private readonly renderer: WebGLRenderer;
  private readonly meshes: RotatingMesh[] = [];
  private readonly camera: Camera;
  private readonly lights: Light[] = [];

  constructor() {

    super();

    this.camera = new PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.01, 150);
    this.camera.position.x = 0;
    this.camera.position.y = 10;
    this.camera.position.z = 10;
    this.camera.rotation.x = -0.5;

    this.meshes = MeshManager.getLowPolyMeshes();
    this.add(...this.meshes);


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
    DownloadUtil.downloadScene([this, this.camera, ...this.meshes]).catch(err => console.error(err));
  }

  render() {
    requestAnimationFrame(this.render.bind(this));
   //this.meshes.forEach(m => m.rotate(0.01));
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