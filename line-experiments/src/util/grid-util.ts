import {
  CircleGeometry,
  Geometry, Group,
  Line,
  LineBasicMaterial,
  LineSegments,
  Mesh,
  Object3D
} from 'three';

export class GridUtil {

  static gridify(geo: Geometry, color: number): Object3D {

    // const material = new MeshLambertMaterial();

    // return new Mesh(geo, material);
    return undefined;
  }

  static createSphereOfQuadsWireframe(radius, widthSegments, heightSegments, color, showWidthSegments, showHeightSegments) {
    const sphereObj = new Group();

    if (showWidthSegments) {
      // width segments
      const arcGeom = this.createArc(radius, heightSegments, false);
      const widthSector = Math.PI * 2 / widthSegments;
      for (let ws = 0; ws < widthSegments; ws++) {
        const arcGeomTmp = arcGeom.clone();
        arcGeomTmp.rotateY(widthSector * ws);
        const arcLine = new Line(arcGeomTmp, new LineBasicMaterial({
          color: color
        }));
        sphereObj.add(arcLine);
      }
    }

    if (showHeightSegments) {
      //height segments
      const heightSector = Math.PI / heightSegments;
      for (let hs = 1; hs < heightSegments; hs++) {
        const hRadius = Math.sin(hs * heightSector) * radius;
        const height = Math.cos(hs * heightSector) * radius;
        const arcHeightGeom = this.createArc(hRadius, widthSegments, true);
        arcHeightGeom.rotateX(Math.PI / 2);
        arcHeightGeom.translate(0, height, 0);
        const arcHeightLine = new Line(arcHeightGeom, new LineBasicMaterial({
          color: color
        }));
        sphereObj.add(arcHeightLine);
      }
    }
    return sphereObj;
  }

  static createArc(radius, segments, full) {
    const geom = new CircleGeometry(radius, segments, Math.PI / 2, full ? Math.PI * 2 : Math.PI);
    geom.vertices.shift();
    if (full) geom.vertices.push(geom.vertices[0].clone());
    return geom;
  }


}