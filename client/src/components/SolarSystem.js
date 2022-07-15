import React, { useState } from "react";
import { Planet } from "./Planet";
import * as THREE from "three";

export const SolarSystem = (props) => {
  const [hovered, setHover] = useState(false);
  const [hoveredIdx, setHoverIdx] = useState(null);

  const solarSystem = props.solarSystem || [];
  let orbitRings = [];
  if (solarSystem.length > 0) orbitRings = solarSystem[0].orbitPlanet;
  console.log("props solar s", props.solarSystem);

  const handleOnClick = (idx) => {
    props.handleSetState("SET_PLANET_VIEW", "singlePlanetView");
    props.handleSetState("SET_PLANET_INFO", props.solarSystem[0].orbitPlanet);
    props.handleSetState("SET_PLANET_KEY", idx);
  };

  const handleOverIn = (idx) => {
    setHoverIdx(idx)
    setHover(true)
  }

  const handleOverOut = () => {
    setHoverIdx(null)
    setHover(false)
  }

  return (
    <>
      {orbitRings && orbitRings.length > 0
        ? orbitRings.map((orbit, idx) => {
            return (
              <mesh key={idx} rotation={[Math.PI / 2, 0, 0]} onClick={() => handleOnClick(idx)} onPointerOver={(event) => handleOverIn(idx)} onPointerOut={(event) => handleOverOut()}>
                <ringBufferGeometry
                  args={[
                    orbit.position[0] - 0.25,
                    orbit.position[0] + 0.25,
                    512,
                    1,
                    0,
                  ]}
                />
                <meshBasicMaterial side={THREE.DoubleSide} color={hovered && hoveredIdx === idx ? 'yellow' : 'white'} />
              </mesh>
            );
          })
        : ""}
      {props.solarSystem !== null && props.solarSystem.length > 0 ? (
        <Planet
          {...props.solarSystem[0]}
          handleSetState={props.handleSetState}
        />
      ) : (
        ""
      )}
    </>
  );
};
 