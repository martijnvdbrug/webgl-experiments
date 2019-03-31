import { Color, ShaderMaterial, UniformsLib, UniformsUtils } from 'three';

export class GradientMaterial extends ShaderMaterial {

  constructor(color1: string, color2: string) {

    const uniforms = UniformsUtils.merge([
      UniformsLib['lights'],
      {
        color1: {
          value: new Color(color1)
        },
        color2: {
          value: new Color(color2)
        }
      }
    ]);

    super({
          uniforms: uniforms,
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
          wireframe: false,
          flatShading: false,
          lights: true
        }
    );
  }

}