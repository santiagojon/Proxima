import React, { useEffect, Suspense, useState, useMemo } from "react";
import { Canvas, extend } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { SolarSystem } from "./SolarSystem";
import { solarSys } from "../util/SolarSystem";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import SinglePlanetView from "./SinglePlanetView";
import { AtmosphereShaderMaterial } from "../shaders/Atmosphere";
import { GlobeShaderMaterial } from "../shaders/GlobeMaterial";
import { CameraController } from "./CameraController";
import dataParser from "../util/DataParsed";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SinglePlanetViewInfo from "./SinglePlanetViewInfo";
import SolarSystemViewInfo from "./SolarSystemViewInfo";

function Scene(props) {
  extend({ AtmosphereShaderMaterial });
  extend({ GlobeShaderMaterial });

  return (
    <>
      <CameraController viewState={props.viewState} />
      <Stars
        radius={10000}
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

      {props.solarSystem !== null && props.viewState === "singlePlanetView" ? (
        <SinglePlanetView
          planetInfo={props.planetInfo[props.singlePlanetKey]}
          handleSetState={props.handleSetState}
          viewState={props.viewState}
        />
      ) : (
        <SolarSystem
          solarSystem={props.solarSystem}
          handleSetState={props.handleSetState}
          viewState={props.viewState}
        />
      )}
    </>
  );
}

export const SolarSystemView = (props) => {
  const [viewState, setViewState] = useState("solarSystemView");
  const [singlePlanetInfo, setSinglePlanetInfo] = useState({});
  const [singlePlanetKey, setSinglePlanetKey] = useState(0);
  const [unparsedSolarData, setUnparsedSolarData] = useState({});
  const [solarSystem, setSolarSystem] = useState([]);
  // const [solarSystem, setSolarSystem] = useState(solarSys);
  const params = useParams();
  const singleSystem = useSelector((state) => {
    return state.singleSystem || null;
  });

  useEffect(() => {
    if (!params.starName) setSolarSystem(solarSys);
  }, []);

  useEffect(() => {
    if (
      singleSystem.length > 0 &&
      JSON.stringify(singleSystem) !== JSON.stringify(unparsedSolarData)
    ) {
      setUnparsedSolarData(singleSystem);
      const parsedData = dataParser(singleSystem);
      console.log("parsed data", parsedData);
      setSolarSystem(parsedData);
    }
  }, [singleSystem]);

  const handleSetViewState = (info) => {
    setViewState(info);
  };

  const handleSetState = (command, info) => {
    switch (command) {
      case "SET_PLANET_VIEW":
        setViewState(info);
        break;
      case "SET_STAR_SYSTEM_VIEW":
        setViewState(info);
        break;
      case "SET_PLANET_INFO":
        setSinglePlanetInfo(info);
        break;
      case "SET_PLANET_KEY":
        setSinglePlanetKey(info);
        break;
      default:
        break;
    }
  };

  return (
    <div className="App">
      <Canvas
        gl={{ antialias: true }}
        dpr={window.devicePixelRatio}
        camera={{ far: 25000 }}
        className="overflow"
      >
        <Suspense fallback={null}>
          <Scene
            viewState={viewState}
            handleSetState={handleSetState}
            planetInfo={singlePlanetInfo}
            singlePlanetKey={singlePlanetKey}
            solarSystem={solarSystem}
          />
        </Suspense>
        <EffectComposer>
          <Bloom luminanceThreshold={0} luminanceSmoothing={1} height={550} />
          <Vignette eskil={false} offset={0.1} darkness={0.1} />
        </EffectComposer>
      </Canvas>
      {viewState === "singlePlanetView" ? (
        <div id="planetTextContainer">
          <SinglePlanetViewInfo
            singlePlanetInfo={singlePlanetInfo}
            singlePlanetKey={singlePlanetKey}
          />
          <button
            className="planetViewButton"
            onClick={() => {
              handleSetViewState("solarSystemView");
            }}
          >
            Return to Star System
          </button>
        </div>
      ) : (
        <SolarSystemViewInfo solarSystem={solarSystem} />
      )}
    </div>
  );
};
