import "./App.css";
import React, { useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";

// const CameraController = () => {
//   const { camera, gl } = useThree();
//   useEffect(() => {
//     const controls = new OrbitControls(camera, gl.domElement);
//     controls.minDistance = 3;
//     controls.maxDistance = 20;
//     return () => {
//       controls.dispose();
//     };
//   }, [camera, gl]);
//   return null;
// };

function App() {
  return (
    <div className="App">
      <div>WEBSITE RUNNING</div>
      {/* <Canvas>
        <CameraController />
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} />
        <mesh>
          <sphereBufferGeometry />
          <meshStandardMaterial color="hotpink" />
        </mesh>
      </Canvas> */}
    </div>
  );
}

export default App;
