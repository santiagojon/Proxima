import { shaderMaterial } from "@react-three/drei";
import * as THREE from "three";
import glsl from "babel-plugin-glsl/macro";
import { extend } from "@react-three/fiber";

export const AtmosphereShaderMaterial = shaderMaterial(
  //uniforms
  { uColor: new THREE.Color(0, 0, 0) },

  //vertex shader
  glsl`
  varying vec3 vertexNormal;

  void main(){
    vertexNormal = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
  }`,

  //fragment shader
  glsl`
  uniform vec3 uColor;
  varying vec3 vertexNormal;
  void main(){
    float intensity = pow(0.8 - dot(vertexNormal, vec3(0,0,1.0)),2.0);
    gl_FragColor = (vec4(uColor,1.0) * intensity);
  }
  `
);
