import { Geometry, Material, Mesh, MeshLambertMaterial, SphereGeometry } from 'three';
import { GeoUtil } from './geo-util';

export class Cloud extends Mesh {

  geo: Geometry;
  material: Material;

  constructor() {
    const geo = new Geometry();
    const tuft1 = new SphereGeometry(1.5, 7, 8);
    tuft1.translate(-2, 0, 0);
    geo.merge(tuft1);

    const tuft2 = new SphereGeometry(1.5, 7, 8);
    tuft2.translate(2, 0, 0);
    geo.merge(tuft2);

    const tuft3 = new SphereGeometry(2.0, 7, 8);
    tuft3.translate(0, 0, 0);
    geo.merge(tuft3);
    GeoUtil.jitter(geo, 0.15);
    GeoUtil.chopBottom(geo, -0.5);
    geo.computeFlatVertexNormals();

    const material = new MeshLambertMaterial({
      color: 'white',
      flatShading: true
    });

    super(geo, material);
    this.geo = geo;
    this.material = material;
  }

  rotate(angle: number){
    this.rotation.y += angle;
  }

}