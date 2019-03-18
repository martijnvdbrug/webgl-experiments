import { Geometry, Material, Mesh, MeshLambertMaterial, SphereGeometry } from 'three';
import { GeoUtil } from '../util/geo-util';
import { RotatingMesh } from './rotating-mesh';
import { LowPolyBallOptions } from './interface/low-poly-ball-options';

export class LowPolyBall extends RotatingMesh {

  geo: Geometry;
  material: Material;

  constructor(options: LowPolyBallOptions) {

    const geo = new SphereGeometry(1, 7, 8);
    //geo.translate(options.x, options.y, options.z);

    GeoUtil.jitter(geo, 0.05);
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