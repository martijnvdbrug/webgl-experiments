import { Camera, Mesh, Object3D, Raycaster, Vector2, Vector3 } from 'three';

export class DragControls {

  raycaster = new Raycaster();
  mouse = new Vector2();
  objects: Object3D[];
  camera: Camera;
  selected: Object3D;
  plane: Mesh;
  startPosition = new Vector3;

  constructor(objects: Object3D[], camera: Camera, plane: Mesh) {
    this.objects = objects;
    this.camera = camera;
    this.plane = plane;
    this.objects.push(plane);

    window.addEventListener('mousemove', this.onMouseMove.bind(this), false);
    window.addEventListener('touchmove', this.onMouseMove.bind(this), false);
    window.addEventListener('mousedown', this.onMouseDown.bind(this), false);
    window.addEventListener('touchstart', this.onMouseDown.bind(this), false);
    window.addEventListener('touchend', this.onMouseUp.bind(this), false);
  }

  onMouseMove(event) {
    // calculate mouse position in normalized device coordinates
    // (-1 to +1) for both components

    this.updateCursorPosition(event);

    if (this.selected) { // Move object if one is selected
      this.raycaster.setFromCamera(this.mouse, this.camera);

      const intersects = this.raycaster.intersectObject(this.plane);
      if (this.selected.id === this.plane.id) { //
        // move  camera backward
        this.camera.position.z -= intersects[0].point.z - this.startPosition.z;
      } else {
        this.selected.position.copy(intersects[0].point);
      }
    }
  }

  onMouseDown(event) {

    this.updateCursorPosition(event);

    this.raycaster.setFromCamera(this.mouse, this.camera);
    const intersects = this.raycaster.intersectObjects([...this.objects, this.plane]);
    // Assuming there is only 1 intersect
    if (intersects.length > 0) {
      this.startPosition.copy(intersects[0].point);
      this.selected = intersects[0].object;
    }
  }

  onMouseUp(event) {
    this.selected = undefined;
  }

  updateCursorPosition(event) {

    if (event.targetTouches) { // Mobile
      this.mouse.x = (event.targetTouches[0].pageX / window.innerWidth) * 2 - 1;
      this.mouse.y = -(event.targetTouches[0].pageY / window.innerHeight) * 2 + 1;
    } else { // Desktop
      this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    }
  }

}