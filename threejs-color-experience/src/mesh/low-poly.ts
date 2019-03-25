import { Geometry, Material, MeshLambertMaterial, OctahedronGeometry } from 'three';
import { ColorMesh } from './color-mesh';
import { ColorOptions } from './interface/color-options';

export class LowPoly extends ColorMesh {

  geo: Geometry;
  material: Material;

  constructor(options: ColorOptions) {

    // const geo = new SphereGeometry(1, 7, 8);
    const geo = new OctahedronGeometry(1, 2);


    // GeoUtil.jitter(geo, 0.05);
    geo.computeFlatVertexNormals();

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
    this.rotation.x = -0.3;
  }
}