import {
  AmbientLight,
  Camera,
  DirectionalLight,
  DoubleSide,
  GridHelper,
  Light,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  PlaneGeometry,
  Raycaster,
  Scene,
  Vector2,
  WebGLRenderer
} from 'three';
import { ColorMesh } from './mesh/color-mesh';
import { DownloadUtil } from './util/download-util';
import { DragControls } from './controls/drag-controls';
import { ColorableInterface } from '../colorable.interface';
import { CanRing } from './mesh/can-ring';
import { CanColor } from '../palette/interface/can-color';

export class ColorScene extends Scene implements ColorableInterface {

  raycaster = new Raycaster();
  mouse = new Vector2();
  private readonly renderer: WebGLRenderer;
  private readonly meshes: ColorMesh[] = [];
  private readonly camera: Camera;
  private readonly lights: Light[] = [];
  private readonly controls: DragControls;

  constructor(canvasId: string) {

    super();

    this.camera = new PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.01, 150);
    this.camera.position.x = 0;
    this.camera.position.y = 15;
    this.camera.position.z = 15;
    this.camera.rotation.x = -0.6;

    // Lights
    this.lights.push(new AmbientLight(0xffffff, 0.3));
    this.lights.push(new DirectionalLight(0xffffff, 0.7));
    this.lights[1].position.set(1, 1, 0).normalize();
    this.lights.push(new DirectionalLight(0xffffff, 0.7));
    this.lights[2].position.set(-3, -1, 0).normalize();
    this.add(...this.lights);

    // Controls
    const geo = new PlaneGeometry(window.innerWidth, window.innerHeight, 32);
    geo.rotateX(Math.PI / 2);
    const material = new MeshBasicMaterial({color: 0xffff00, side: DoubleSide});
    const plane = new Mesh(geo, material);
    // this.add(plane);
    this.controls = new DragControls(this.meshes, this.camera, plane);

    // Grid
    this.add(new GridHelper(10, 10));

    // Render
    this.renderer = this.getRenderer(document.getElementById(canvasId) as HTMLCanvasElement);
    this.render();
  }

  download() {
    DownloadUtil.downloadScene([this, this.camera, ...this.meshes]).catch(err => console.error(err));
  }

  render() {
    requestAnimationFrame(this.render.bind(this));
    this.renderer.render(this, this.camera);
    // this.meshes.forEach(m => m.rotate(0.01));
  }

  getRenderer(canvas: HTMLCanvasElement): WebGLRenderer {
    const renderer = new WebGLRenderer({
      antialias: true,
      canvas
    });
    renderer.setClearColor('#464646');
    renderer.setSize(window.innerWidth, window.innerHeight);
    return renderer;
  }

  addColor(color: CanColor): void {
    const mesh = new CanRing({
      color: color.color,
      x: -1,
      y: 0,
      z: 0
    });
    this.meshes.push(mesh);
    this.add(mesh);
  }

  removeColor(color: CanColor): void {
    throw new Error('Method not implemented.');
  }
}