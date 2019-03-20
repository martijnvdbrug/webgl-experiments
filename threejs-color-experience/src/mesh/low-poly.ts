import { Geometry, Material, MeshLambertMaterial, OctahedronGeometry } from 'three';
import { RotatingMesh } from './rotating-mesh';
import { LowPolyOptions } from './interface/low-poly-options';

export class LowPoly extends RotatingMesh {

  geo: Geometry;
  material: Material;

  constructor(options: LowPolyOptions) {

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