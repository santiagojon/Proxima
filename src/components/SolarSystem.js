import React from "react";
import { Planet } from "./Planet";
import * as THREE from "three";

export const SolarSystem = (props) => {
  const solarSystem = props.solarSystem || [];
  const orbitRings = solarSystem[0].orbitPlanet || [];

  return (
    <>
      {orbitRings && orbitRings.length > 0
        ? orbitRings.map((orbit, idx) => {
            return (
              <mesh key={idx} rotation={[Math.PI / 2, 0, 0]}>
                <ringBufferGeometry
                  args={[
                    orbit.position[0] - 0.01,
                    orbit.position[0] + 0.01,
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
        return (
          <mesh key={idx}>
            <Planet {...planet} />
          </mesh>
        );
      })}
    </>
  );
};
