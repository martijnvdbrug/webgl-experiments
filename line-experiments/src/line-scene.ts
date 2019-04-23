import {
  AmbientLight,
  Camera, Color,
  DirectionalLight,
  DoubleSide,
  Light,
  LineBasicMaterial,
  LineSegments,
  Mesh,
  MeshBasicMaterial,
  MeshLambertMaterial,
  MeshPhongMaterial,
  PerspectiveCamera,
  Plane,
  PlaneGeometry,
  Scene, SphereGeometry,
  WebGLRenderer
} from 'three';
import { GeoUtil } from './util/geo-util';
import { GridUtil } from './util/grid-util';
import { HorizontalLineMaterial } from './material/horizontal-line.material';
import { HorizontalLinePlaneGeometry } from './geometry/horizontal-line-plane.geometry';

export class LineScene extends Scene {

  private readonly renderer: WebGLRenderer;
  private readonly camera: Camera;

  constructor() {

    super();

    this.camera = new PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.01, 150);
    this.camera.position.x = 0;
    this.camera.position.y = 15;
    this.camera.position.z = 15;
    this.camera.rotation.x = -0.6;

    // const geo = new PlaneGeometry( 25, 15, 10, 10 );
    const geo = new HorizontalLinePlaneGeometry( 25, 15, 10, 10 );
    geo.rotateX(Math.PI / 2);
    // GeoUtil.jitter(geo, 0.1);

    const material = new MeshLambertMaterial({color: 0xDFF3E4, wireframe: true});
/*    const material = new HorizontalLineMaterial({
      color1 : { type : "c", value : new Color(0xffffff)},
      alpha1: { type: "f", value: 1.0, min: 0.0, max: 1.0},
      color2 : { type : "c", value : new Color(0x505050)},
      alpha2: { type: "f", value: 1.0, min: 0.0, max: 1.0},
      lines: { type:"f", value: 14, min: 1, max: 100},
      linewidth: { type: "f", value: 5.0, min: 0.0, max: 100.0},
    });*/
    // const plane = GridUtil.createSphereOfQuadsWireframe(2, 32, 16, "aqua", false, true);
    const plane = new Mesh(geo, material);
    this.add(plane);



    // Lights
    const dirLight = new DirectionalLight(0xffffff, 0.7);
    dirLight.position.set(10, 5, 7);
    this.add(dirLight);

    this.renderer = this.getRenderer();
    this.render();
  }

  render() {
    requestAnimationFrame(this.render.bind(this));
    // this.meshes.forEach(m => m.rotate(0.01));
    this.renderer.render(this, this.camera);
  }

  getRenderer(): WebGLRenderer {
    const renderer = new WebGLRenderer({
      antialias: true,
      canvas: document.getElementById('canvas') as HTMLCanvasElement
    });
    renderer.setClearColor('#464646');
    renderer.setSize(window.innerWidth, window.innerHeight);
    return renderer;
  }
}