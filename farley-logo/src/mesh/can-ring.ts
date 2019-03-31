import {
  Geometry,
  Material,
  MeshLambertMaterial,
  MeshPhongMaterial,
  OctahedronGeometry,
  TorusGeometry
} from 'three';
import { ColorMesh } from './color-mesh';
import { ColorOptions } from './interface/color-options';
import { GeoUtil } from '../util/geo-util';

export class CanRing extends ColorMesh {

  geo: Geometry;
  material: Material;

  constructor(options: ColorOptions) {

    // const geo = new SphereGeometry(1, 7, 8);
    const geo = new TorusGeometry( 0.5, 0.35, 50, 50 );

    // GeoUtil.jitter(geo, 0.05);
    // geo.computeFlatVertexNormals();

    const material = new MeshPhongMaterial({
      color: options.color,
      // flatShading: true,
      shininess: 100
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