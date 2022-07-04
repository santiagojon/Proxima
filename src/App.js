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
import { solarSys } from "./util/SolarSystem";
import {
  EffectComposer,
  DepthOfField,
  Bloom,
  Noise,
  Vignette,
} from "@react-three/postprocessing";

const CameraController = () => {
  const { camera, gl } = useThree();
  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);
    controls.minDistance = 0.02;
    controls.maxDistance = 1000;
    return () => {
      controls.dispose();
    };
  }, [camera, gl]);
  return null;
};

function Scene() {
  extend({ AtmosphereShaderMaterial });
  extend({ GlobeShaderMaterial });
  return (
    <>
      <CameraController />
      <Stars
        radius={200}
        depth={120}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      <ambientLight intensity={0.03} />
      <pointLight position={[0, 0, 0]} />
      <SolarSystem solarSystem={solarSys} />
    </>
  );
}

function App() {
  return (
    <div className="App" width={window.innerWidth} height={window.innerHeight}>
      {/* <Canvas gl={{ antialias: true }} dpr={window.devicePixelRatio}>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas> */}
      <Canvas gl={{ antialias: true }} dpr={window.devicePixelRatio}>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
        <EffectComposer>
          <Bloom luminanceThreshold={0} luminanceSmoothing={1} height={550} />
          {/* <Noise opacity={0.005} /> */}
          <Vignette eskil={false} offset={0.1} darkness={0.1} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}

export default App;
