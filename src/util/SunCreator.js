// import { shaderMaterial } from "@react-three/drei";
// import glsl from "babel-plugin-glsl/macro";
// import * as THREE from "three";
// import { extend } from "@react-three/fiber";

// const AtmosphereShaderMaterial = shaderMaterial(
//   //uniforms
//   { uColor: new THREE.Color(0, 0, 0) },

//   //vertex shader
//   glsl`
//   varying vec3 vertexNormal;

//   void main(){
//     vertexNormal = normalize(normalMatrix * normal);
//     gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
//   }`,

//   //fragment shader
//   glsl`
//   uniform vec3 uColor;
//   varying vec3 vertexNormal;
//   void main(){
//     float intensity = pow(0.8 - dot(vertexNormal, vec3(0,0,1.0)),2.0);
//     gl_FragColor = (vec4(uColor,1.0) * intensity);
//   }
//   `
// );

// const GlobeShaderMaterial = shaderMaterial(
//   //uniforms
//   { globeTexture: new THREE.Texture(), uColor: new THREE.Color(0, 0, 0) },

//   //Vertex Shader
//   glsl`
//   varying vec2 vertexUV;
//   varying vec3 vertexNormal;
//   void main(){
//     vertexUV = uv;
//     vertexNormal =normalize(normalMatrix * normal);
//     gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
//   }`,

//   //Fragment Shader
//   glsl`
//   uniform vec3 uColor;
//   uniform sampler2D globeTexture;
//   varying vec2 vertexUV;
//   varying vec3 vertexNormal;
//   void main(){

//     float intensity = 1.09 - dot(vertexNormal, vec3(0,0,1));
//     vec3 atmosphere = vec3(uColor)* pow(intensity,1.5);

//     gl_FragColor = vec4(atmosphere+texture2D(globeTexture,vertexUV).xyz, 1);
//   }`
// );

// extend({ GlobeShaderMaterial });
// extend({ AtmosphereShaderMaterial });
