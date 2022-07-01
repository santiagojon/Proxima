import React from "react";
import { Planet } from "./Planet";

export const SolarSystem = (props) => {
  const solarSystem = props.solarSystem || [];
  return (
    <>
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
