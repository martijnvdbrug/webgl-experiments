import { Color, ShaderMaterial } from 'three';

export class GradientMaterial extends ShaderMaterial {

  constructor() {
    super({
      uniforms: {
        color1: {
          value: new Color('red')
        },
        color2: {
          value: new Color('purple')
        }
      },
      vertexShader: `
    varying vec2 vUv;

    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
    }
  `,
      fragmentShader: `
    uniform vec3 color1;
    uniform vec3 color2;
  
    varying vec2 vUv;
    
    void main() {
      
      gl_FragColor = vec4(mix(color1, color2, vUv.y), 1.0);
    }
  `,
      wireframe: true,
      flatShading: true
    },
        );
  }

}