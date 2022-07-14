import React from "react";
import { Planet } from "./Planet";
import * as THREE from "three";
import { CameraController } from "./CameraController";

export const SolarSystem = (props) => {
  const solarSystem = props.solarSystem || [];
  const orbitRings = solarSystem[0].orbitPlanet || [];
  const handleSetState = { handleSetState: props.handleSetState };

  return (
    <>
      <CameraController
        viewState={props.viewState}
        camLocation={[[-350, 250, 0]]}
      />
      {orbitRings && orbitRings.length > 0
        ? orbitRings.map((orbit, idx) => {
            return (
              <mesh key={idx} rotation={[Math.PI / 2, 0, 0]}>
                <ringBufferGeometry
                  args={[
                    orbit.position[0] - 0.25,
                    orbit.position[0] + 0.25,
                    512,
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
