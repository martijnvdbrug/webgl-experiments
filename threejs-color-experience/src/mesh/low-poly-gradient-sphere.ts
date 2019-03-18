import { Geometry, Material, Mesh, MeshLambertMaterial, SphereGeometry } from 'three';
import { GeoUtil } from '../util/geo-util';
import { RotatingMesh } from './rotating-mesh';
import { LowPolySphereOptions } from './interface/low-poly-sphere-options';
import { GradientMaterial } from '../material/gradient-material';
import { LowPolyGradientSphereOptions } from './interface/low-poly-gradient-sphere-options';

export class LowPolyGradientSphere extends RotatingMesh {

  geo: Geometry;
  material: Material;

  constructor(options: LowPolyGradientSphereOptions) {

    const geo = new SphereGeometry(1, 7, 8);

    GeoUtil.jitter(geo, 0.05);
    geo.computeFlatVertexNormals();

    const material = new GradientMaterial();

    super(geo, material);
    this.geo = geo;
    this.material = material;
    this.position.x = options.x;
    this.position.y = options.y;
    this.position.z = options.z;
    this.rotation.x = -0.3;
  }
}