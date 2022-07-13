import React, { useEffect, Suspense, useState } from "react";
import { Canvas, useThree, extend } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Stars } from "@react-three/drei";
import { AtmosphereShaderMaterial } from "../shaders/Atmosphere";
import { GlobeShaderMaterial } from "../shaders/GlobeMaterial";
import { SolarSystem } from "./SolarSystem";
import { solarSys } from "../util/SolarSystem";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import NavBar from "./NavBar";
import SinglePlanetView from "./SinglePlanetView";

const ChangeCameraPosition = (arr, fov, far) => {
  useThree(({ camera }) => {
    camera.position.set(arr[0], arr[1], arr[2]);
    camera.fov = 40;
    camera.far = 9000;
  });
};

const CameraController = (props) => {
  let { camera, gl } = useThree();
  console.log("PROP VIEW STATE!", props.viewState);
  let controls = new OrbitControls(camera, gl.domElement);
  ChangeCameraPosition([-350, 250, 0], 40, 10000);
  useEffect(() => {
    if (props.viewState === "singlePlanetView") {
      controls.minDistance = 0.002;
      controls.maxDistance = 5;
    } else {
      controls.minDistance = 0.02;
      controls.maxDistance = 10000;
    }
    return () => {
      controls.dispose();
    };
  }, [camera, gl]);

  return null;
};

const planetScale = 1.5;

function Scene(props) {
  extend({ AtmosphereShaderMaterial });
  extend({ GlobeShaderMaterial });

  return (
    <>
      <CameraController viewState={props.viewState} />
      <Stars
        radius={4000}
        depth={320}
        count={6000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      <ambientLight intensity={0.03} />
      {props.viewState === "singlePlanetView" ? (
        <pointLight position={[-700, 700, 90]} />
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
        // )
        <SolarSystem
          solarSystem={solarSys}
          handleSetState={props.handleSetState}
          viewState={props.viewState}
        />
      )}
    </>
  );
}

export const SolarSystemView = () => {
  const [viewState, setViewState] = useState("solarSystemView");
  const [singlePlanetInfo, setSinglePlanetInfo] = useState({});
  const [singlePlanetKey, setSinglePlanetKey] = useState(0);

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
        break;
      case "SET_CAMERA":
        ChangeCameraPosition(...info);
        break;
      default:
        break;
    }
  };

  return (
    <div className="App" width={window.innerWidth} height={window.innerHeight}>
      {viewState === "singlePlanetView" ? (
        <div className="planetText">
          {singlePlanetInfo[singlePlanetKey].name}
        </div>
      ) : (
        ""
      )}
      <NavBar />
      <Canvas
        gl={{ antialias: true }}
        dpr={window.devicePixelRatio}
        camera={{ far: 20000 }}
      >
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
};
