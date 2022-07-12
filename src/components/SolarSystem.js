import React from "react";
import { Planet } from "./Planet";
import * as THREE from "three";

export const SolarSystem = (props) => {
  // console.log('ssprops', props);
  const solarSystem = props.solarSystem || [];
  // console.log('SOLARS', solarSystem)
  const orbitRings = solarSystem[0].orbitPlanet || [];
  const handleSetState = { handleSetState: props.handleSetState };

  return (
    <>
      {orbitRings && orbitRings.length > 0
        ? orbitRings.map((orbit, idx) => {
            return (
              <mesh key={idx} rotation={[Math.PI / 2, 0, 0]}>
                <ringBufferGeometry
                  args={[
                    orbit.position[0] - 0.05,
                    orbit.position[0] + 0.05,
                    256,
                    1,
                    0,
                  ]}
                />
                <meshBasicMaterial side={THREE.DoubleSide} />
              </mesh>
            );
          })
        : ""}
      {solarSystem.map((planet, idx) => {
        // console.log(`PLANET ${idx}`, planet)
        let updatedPlanet = { ...planet, ...handleSetState };
        // console.log('UPDATEDPLANET', updatedPlanet)
        return (
          <mesh key={idx}>
            <Planet {...updatedPlanet} />
          </mesh>
        );
      })}
    </>
  );
};
