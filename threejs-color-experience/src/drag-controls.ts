import { Camera, Mesh, Object3D, Plane, Raycaster, Vector2 } from 'three';

export class DragControls {

  raycaster = new Raycaster();
  mouse = new Vector2();
  objects: Object3D[];
  camera: Camera;
  selected: Object3D;
  plane: Plane;

  constructor(objects: Object3D[], camera: Camera, plane: Plane) {
    this.objects = objects;
    this.camera = camera;
    this.plane = plane;


    window.addEventListener('mousemove', this.onMouseMove.bind(this), false);
    window.addEventListener('mousedown', this.onMouseDown.bind(this), false);
    window.addEventListener('mouseup', this.onMouseUp.bind(this), false);
  }

  onMouseMove(event) {
    // calculate mouse position in normalized device coordinates
    // (-1 to +1) for both components
    this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    if (this.selected) { // Move object if one is selected
      this.raycaster.setFromCamera(this.mouse, this.camera);
      const intersects = this.raycaster.intersectObject(this.plane);
      if (intersects[0]) {
        this.selected.position.copy(intersects[0].point);
      }
    }
  }

  onMouseDown(event) {
    this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    this.raycaster.setFromCamera(this.mouse, this.camera);
    const intersects = this.raycaster.intersectObjects(this.objects);
    // Assuming there is only 1 intersect
    if (intersects.length > 0) {
      this.selected = intersects[0].object;
      // @ts-ignore
      this.selected.material.color.set(0xff0000);
    }
  }

  onMouseUp(event) {
    this.selected = undefined;
  }


}