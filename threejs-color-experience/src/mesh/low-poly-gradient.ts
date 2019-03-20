import {
  Geometry,
  Material,
  Mesh,
  MeshLambertMaterial,
  OctahedronGeometry,
  SphereGeometry
} from 'three';
import { GeoUtil } from '../util/geo-util';
import { RotatingMesh } from './rotating-mesh';
import { LowPolyOptions } from './interface/low-poly-options';
import { GradientMaterial } from '../material/gradient-material';
import { LowPolyGradientOptions } from './interface/low-poly-gradient-options';

export class LowPolyGradient extends RotatingMesh {

  geo: Geometry;
  material: Material;

  constructor(options: LowPolyGradientOptions) {

    const geo = new OctahedronGeometry(1, 2);

    geo.computeFlatVertexNormals();

    const material = new GradientMaterial(
        options.color1,
        options.color2
    );

    super(geo, material);
    this.geo = geo;
    this.material = material;
    this.position.x = options.x;
    this.position.y = options.y;
    this.position.z = options.z;
    this.rotation.x = -0.3;
  }
}