import { Geometry, Material, MeshLambertMaterial, SphereGeometry } from 'three';
import { ColorMesh } from './color-mesh';
import { ColorOptions } from './interface/color-options';

export class ColorSphere extends ColorMesh {

  geo: Geometry;
  material: Material;

  constructor(options: ColorOptions) {

    // const geo = new SphereGeometry(1, 7, 8);
    const geo = new SphereGeometry(1, 32, 32);


    // GeoUtil.jitter(geo, 0.05);
    // geo.computeFlatVertexNormals();

    const material = new MeshLambertMaterial({
      color: options.color,
      flatShading: true
    });

    super(geo, material);
    this.geo = geo;
    this.material = material;
    this.position.x = options.x;
    this.position.y = options.y;
    this.position.z = options.z;
    this.rotation.x = -1.57079633;
  }
}