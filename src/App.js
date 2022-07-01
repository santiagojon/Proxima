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

const planet = {
  globeRGB: [1, 0.58, 0.26],
  atmosphereRGB: [1, 0.58, 0.26],
  compareEarthSize: 1,
  image: "sun.jpg",
  sun: true,
};

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
      <Planet {...planet} />
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
