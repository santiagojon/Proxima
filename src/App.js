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
import { createPlanet } from "./util/PlanetCreator";

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
      {createPlanet(
        0.5,
        [1, 0.34, 0.17],
        [1, 0.34, 0.17],
        [0, 0, 8],
        "mars.jpg"
      )}
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
