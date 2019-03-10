import {
  BoxGeometry,
  Camera,
  Mesh, MeshBasicMaterial,
  MeshNormalMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer
} from 'three';

function init() {

  const camera: Camera = new PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
  camera.position.z = 4;

  const scene = new Scene();

  const geometry = new BoxGeometry(1, 1, 1);
  const material = new MeshBasicMaterial({color: '#433F81'});
  const cube = new Mesh(geometry, material);

  scene.add( cube );

  const renderer = new WebGLRenderer( {
    antialias: true,
    canvas: document.getElementById('canvas') as HTMLCanvasElement
  });
  renderer.setClearColor("#000000");
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.render(scene, camera);
}

init();