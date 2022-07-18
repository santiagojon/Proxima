import React, { useState } from "react";
import { Planet } from "./Planet";
import * as THREE from "three";
import { Stars } from "@react-three/drei";

export const SolarSystem = (props) => {
  const solarSystem = props.solarSystem || [];

  const handleOnClick = (idx) => {
    props.handleSetState("SET_PLANET_VIEW", "singlePlanetView");
    props.handleSetState("SET_PLANET_INFO", props.solarSystem[0].orbitPlanet);
    props.handleSetState("SET_PLANET_KEY", idx);
  };

  let orbitRings = [];
  if (solarSystem.length > 0) orbitRings = solarSystem[0].orbitPlanet;
  return (
    <>
      <Stars
        radius={10000}
        depth={320}
        count={6000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      {orbitRings && orbitRings.length > 0
        ? orbitRings.map((orbit, idx) => {
            return (
              <mesh key={idx} rotation={[Math.PI / 2, 0, 0]}>
                <mesh onClick={() => handleOnClick(idx)}>
                  {/* <ringBufferGeometry
                    args={[
                      orbit.position[0] - 8,
                      orbit.position[0] + 8,
                      48,
                      1,
                      5,
                    ]}
                  /> */}
                  <torusBufferGeometry args={[orbit.position[0], 15, 3, 48]} />
                  <meshBasicMaterial
                    side={THREE.DoubleSide}
                    color={"orange"}
                    opacity={0.0}
                    transparent
                  />
                </mesh>
                <ringBufferGeometry
                  args={[
                    orbit.position[0] - 0.5,
                    orbit.position[0] + 0.5,
                    512,
                    1,
                    0,
                  ]}
                />
                <meshBasicMaterial side={THREE.DoubleSide} color={"#c9b195"} />
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
