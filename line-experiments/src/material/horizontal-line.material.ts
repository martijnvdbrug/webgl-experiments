import { ShaderMaterial } from 'three';

export class HorizontalLineMaterial extends ShaderMaterial {

  constructor(uniforms: any) {
    super(
        {
          uniforms: uniforms,
          vertexShader: `
          varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
}
          `,
          fragmentShader: `uniform vec3 color1;
uniform float alpha1;
uniform vec3 color2;
uniform float alpha2;
uniform float lines;
uniform float linewidth;
varying vec2 vUv;
void main() {
  float p = abs(fract(lines*vUv.y)*2.0-1.0);
  if(p < linewidth / 100.0){
    gl_FragColor = vec4(color1, alpha1);
  }else{
    gl_FragColor = vec4(color2, alpha2);
  }
}`
        });
    this.transparent = true;
  }

}