import "./App.css";
import React, { useEffect, Suspense, useRef, useState } from "react";
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

import LandingPage from "./LandingPage";
import SinglePlanetView from "./components/SinglePlanetView";

// const CameraController = () => {
//   const { camera, gl } = useThree();
//   useEffect(() => {
//     const controls = new OrbitControls(camera, gl.domElement);
//     controls.minDistance = 0.02;
//     controls.maxDistance = 1000;
//     return () => {
//       controls.dispose();
//     };
//   }, [camera, gl]);
//   return null;
// };

// const SinglePlanetCameraController = () => {
//   const { camera, gl } = useThree();
//   useEffect(() => {
//     const controls = new OrbitControls(camera, gl.domElement);
//     controls.minDistance = 0.02;
//     controls.maxDistance = 1000;
//     return () => {
//       controls.dispose();
//     };
//   }, [camera, gl]);
//   return null;
// };

const CameraController = (props) => {
  const { camera, gl } = useThree();
  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);
    if (props.viewState === "singlePlanetView") {
      controls.minDistance = 0.02;
      controls.maxDistance = 2;
    } else {
      controls.minDistance = 0.02;
      controls.maxDistance = 1000;
    }
    return () => {
      controls.dispose();
    };
  }, [camera, gl]);
  return null;
};

function Scene(props) {
  console.log('SCENEPROPS', props)
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
      {props.viewState === "singlePlanetView" ? (
        <pointLight position={[2, 2, 2]} />
      ) : (
        <pointLight position={[0, 0, 0]} />
      )}

      {props.viewState === "singlePlanetView" ? (
        <SinglePlanetView
          planetInfo={props.planetInfo[props.singlePlanetKey]}
          handleSetState={props.handleSetState}
          viewState={props.viewState}
        />
  
      ) : (
        <SolarSystem
          solarSystem={solarSys}
          handleSetState={props.handleSetState}
          viewState={props.viewState}
        />
      )}
    </>
  );
}


function App() {
  const [viewState, setViewState] = useState("solarSystemView");
  const [singlePlanetInfo, setSinglePlanetInfo] = useState({});
  const [singlePlanetKey, setSinglePlanetKey] = useState(0);

  console.log('SPK',singlePlanetKey)

  const handleSetState = (command, info) => {
    switch (command) {
      case "SET_PLANET_VIEW":
        setViewState(info);
        break;
      case "SET_STAR_SYSTEM_VIEW":
        // reset SinglePlanetInfo?
        setViewState(info);
        break;
      case "SET_PLANET_INFO":
        setSinglePlanetInfo(info);
        break;
      case "SET_PLANET_KEY":
        setSinglePlanetKey(info);
        break
      default:
        break;
    }
  };

  return (
    <div className="App" width={window.innerWidth} height={window.innerHeight}>
      <Canvas gl={{ antialias: true }} dpr={window.devicePixelRatio}>
        <Suspense fallback={null}>
          <Scene
            viewState={viewState}
            handleSetState={handleSetState}
            planetInfo={singlePlanetInfo}
            singlePlanetKey={singlePlanetKey}
          />
        </Suspense>
        <EffectComposer>
          <Bloom luminanceThreshold={0} luminanceSmoothing={1} height={550} />
          <Vignette eskil={false} offset={0.1} darkness={0.1} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}

export default App;
