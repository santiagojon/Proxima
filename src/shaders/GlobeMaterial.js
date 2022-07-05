import { shaderMaterial } from "@react-three/drei";
import * as THREE from "three";
import glsl from "babel-plugin-glsl/macro";
import { extend } from "@react-three/fiber";

export const GlobeShaderMaterial = shaderMaterial(
  //uniforms
  { globeTexture: new THREE.Texture(), uColor: new THREE.Color(0, 0, 0) },

  //Vertex Shader
  glsl`
  varying vec2 vertexUV;
  varying vec3 vertexNormal;
  void main(){
    vertexUV = uv;
    vertexNormal =normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
  }`,

  //Fragment Shader
  glsl`  
  uniform vec3 uColor;
  uniform sampler2D globeTexture;
  varying vec2 vertexUV;
  varying vec3 vertexNormal;
  void main(){

    float intensity = 1.09 - dot(vertexNormal, vec3(0,0,1));
    vec3 atmosphere = vec3(uColor)* pow(intensity,1.5);

    gl_FragColor = vec4(atmosphere+texture2D(globeTexture,vertexUV).xyz, 1);
  }`
);
