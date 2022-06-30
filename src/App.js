import "./App.css";
import React, { useEffect, Suspense, useRef } from "react";
import {
  Canvas,
  useThree,
  useLoader,
  extend,
  useFrame,
} from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { Stars, shaderMaterial } from "@react-three/drei";
import glsl from "babel-plugin-glsl/macro";
import * as THREE from "three";
import { createPlanet } from "./util/PlanetCreator";

const AtmosphereShaderMaterial = shaderMaterial(
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
// float intensity = 0.62 - dot(vertexNormal, vec3(0,0,1));
const GlobeShaderMaterial = shaderMaterial(
  //uniforms
  { globeTexture: "", uColor: new THREE.Color(0, 0, 0) },

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

extend({ GlobeShaderMaterial });
extend({ AtmosphereShaderMaterial });

const CameraController = () => {
  const { camera, gl } = useThree();
  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);
    controls.minDistance = 3;
    controls.maxDistance = 20;
    return () => {
      controls.dispose();
    };
  }, [camera, gl]);
  return null;
};

function Scene() {
  // const meshReference = React.useRef();
  // useFrame(({ clock }) => {
  //   meshReference.current.rotation.y = clock.getElapsedTime() / 12;
  // });

  return (
    <>
      <CameraController />
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 1, 1]} />
      {createPlanet(1, [0.3, 0.6, 1.0], [0.3, 0.6, 1], [0, 0, 0], "globe.jpg")}
      {createPlanet(0.25, [0, 0, 0], [0, 0, 0], [0, 0, 4], "moon.jpg")}
    </>
  );
}

function App() {
  return (
    <div className="App" width={window.innerWidth} height={window.innerHeight}>
      <Canvas>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
