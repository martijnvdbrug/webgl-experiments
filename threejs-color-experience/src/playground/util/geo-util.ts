import { Geometry } from 'three';

export class GeoUtil {

  static jitter(geo: Geometry, per: number): Geometry {
    // remap value from the range of [smin,smax] to [emin,emax]
    const map = (val, smin, smax, emin, emax) => (emax - emin) * (val - smin) / (smax - smin) + emin;
    //randomly displace the x,y,z coords by the `per` value
    geo.vertices.forEach(v => {
      v.x += map(Math.random(), 0, 1, -per, per);
      v.y += map(Math.random(), 0, 1, -per, per);
      v.z += map(Math.random(), 0, 1, -per, per);
    });
    return geo;
  }


  static chopBottom(geo: Geometry, bottom: number) {
    geo.vertices.forEach(v => v.y = Math.max(v.y,bottom));
    return geo;
  }


}