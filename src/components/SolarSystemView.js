import React, { useEffect, Suspense, useState, useMemo } from 'react';
import { Canvas, extend } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { SolarSystem } from './SolarSystem';
import { solarSys } from '../util/SolarSystem';
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing';
import NavBar from './NavBar';
import SinglePlanetView from './SinglePlanetView';
import { AtmosphereShaderMaterial } from '../shaders/Atmosphere';
import { GlobeShaderMaterial } from '../shaders/GlobeMaterial';
import { CameraController } from './CameraController';
import dataParser from '../util/DataParsed';

import HoverPopUpType from "./HoverPopUpType";
import HoverPopUpDiscovery from "./HoverPopUpDiscovery";

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
      {props.viewState === 'singlePlanetView' ? (
        <pointLight position={[-700, 700, 90]} />
      ) : (
        <pointLight position={[0, 0, 0]} />
      )}

      {props.solarSystem !== null && props.viewState === 'singlePlanetView' ? (
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
  const [viewState, setViewState] = useState('solarSystemView');
  const [singlePlanetInfo, setSinglePlanetInfo] = useState({});
  const [singlePlanetKey, setSinglePlanetKey] = useState(0);
  const [unparsedSolarData, setUnparsedSolarData] = useState();
  const [solarSystem, setSolarSystem] = useState([]);
  // const [solarSystem, setSolarSystem] = useState(solarSys);

  useEffect(() => {
    if (props.viewState) setViewState(props.viewState);
    if (props.singlePlanetInfo) setSinglePlanetInfo(props.setSinglePlanetInfo);
    if (props.singlePlanetKey) setSinglePlanetKey(props.singlePlanetKey);
    if (!props.solarSystem) setSolarSystem(solarSys);
    // if (props.solarSystem) setSolarSystem(props.solarSystem);
  }, []);

  useEffect(() => {
    if (unparsedSolarData !== props.solarSystem) {
      setUnparsedSolarData(props.solarSystem);
      if (unparsedSolarData !== null && unparsedSolarData !== undefined) {
        console.log('UNPARSED', unparsedSolarData);
        const parsedData = dataParser(unparsedSolarData);
        console.log('parsed data', parsedData);
        setSolarSystem(parsedData);
      }
    }
  }, [props.solarSystem]);

  const handleSetViewState = (info) => {
    setViewState(info);
  };

  const handleSetState = (command, info) => {
    switch (command) {
      case 'SET_PLANET_VIEW':
        setViewState(info);
        break;
      case 'SET_STAR_SYSTEM_VIEW':
        setViewState(info);
        break;
      case 'SET_PLANET_INFO':
        setSinglePlanetInfo(info);
        break;
      case 'SET_PLANET_KEY':
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
        camera={{ far: 20000 }}
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
      {viewState === 'singlePlanetView' ? (
        <div id="planetTextContainer">
          <div className="planetText_Name">
            {singlePlanetInfo ? singlePlanetInfo[singlePlanetKey].name : ""}
          </div>
          <div className="planetText_Type">
            {singlePlanetInfo[singlePlanetKey].planetType ? (
              <HoverPopUpType
                type={singlePlanetInfo[singlePlanetKey].planetType}
                size={singlePlanetInfo[singlePlanetKey].compareEarthSize}
              />
            ) : (
              ""
            )}
          </div>
          <div className="planetText_Distance">
            {singlePlanetInfo
              ? "You are " +
                (Math.round(
                  singlePlanetInfo[singlePlanetKey].distancePC * 3.2
                ) *
                  10) /
                  10 +
                " light years from Earth"
              : ""}
          </div>
          <div className="planetText_Discovery">
            {singlePlanetInfo[singlePlanetKey].discoveryMethod ? (
              <HoverPopUpDiscovery
                discoveryMethod={
                  singlePlanetInfo[singlePlanetKey].discoveryMethod
                }
                discoveryFacility={
                  singlePlanetInfo[singlePlanetKey].discoveryFacility
                }
              />
            ) : (
              ""
            )}
          </div>
          {/* <div className="planetText_Size">
            {singlePlanetInfo[singlePlanetKey].compareEarthSize}x the size of Earth
          </div> */}
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
        <div>
          <div className="planetText_Name">
            {solarSystem && solarSystem.length ? solarSystem[0].name : ""}
          </div>
          <div className="planetText_Type">
            {solarSystem && solarSystem.length && solarSystem[0].starAge
              ? solarSystem[0].starAge + " billion years old"
              : ""}
          </div>
        </div>
      )}
    </div>
  );
};
