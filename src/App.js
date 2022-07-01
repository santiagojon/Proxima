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
import { Stars } from "@react-three/drei";
import * as THREE from "three";
import { Planet } from "./components/Planet";
import { AtmosphereShaderMaterial } from "./shaders/Atmosphere";
import { GlobeShaderMaterial } from "./shaders/GlobeMaterial";
import { SolarSystem } from "./components/SolarSystem";

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
const moon = {
  position: [9, 0, 0],
  globeRGB: [0, 0, 0],
  atmosphereRGB: [0, 0, 0],
  compareEarthSize: 0.25,
  image: "moon.jpg",
  speed: 0.0003,
  sun: false,
  orbitSpeed: 0.03,
  orbitPlanet: [],
};
const earth = {
  position: [7, 0, 0],
  globeRGB: [0.3, 0.6, 1.0],
  atmosphereRGB: [0.3, 0.6, 1.0],
  compareEarthSize: 1,
  image: "globe.jpg",
  speed: 0.0003,
  sun: false,
  orbitSpeed: 0.002,
  orbitPlanet: [moon],
};

const sun = {
  position: [0, 0, 0],
  globeRGB: [1, 0.58, 0.26],
  atmosphereRGB: [1, 0.58, 0.26],
  compareEarthSize: 2,
  image: "sun.jpg",
  speed: 0.0005,
  sun: true,
  orbitSpeed: 0,
  orbitPlanet: [earth],
};

const solarSys = [sun];

function Scene() {
  extend({ AtmosphereShaderMaterial });
  extend({ GlobeShaderMaterial });
  return (
    <>
      <CameraController />
      <Stars
        radius={200}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 1, 1]} />
      <SolarSystem solarSystem={solarSys} />
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
