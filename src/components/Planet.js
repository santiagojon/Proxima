import { shaderMaterial } from "@react-three/drei";
import glsl from "babel-plugin-glsl/macro";
import * as THREE from "three";
import { extend, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Sun } from "./Sun";
import { SinglePlanetView } from "./SinglePlanetView";

export const Planet = (props) => {
  console.log("planetComponentProps", props);
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  let planetRef = useRef([]);
  const speed = props.speed || 0.0;
  const position = props.position || [0, 10, 0];
  const orbitPlanet = props.orbitPlanet || [];

  const planetScale = 0.1;
  const handleSetState = props.handleSetState;

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.y += speed));
  useFrame((state, delta) => {
    for (let i = 0; i < planetRef.current.length; i++) {
      planetRef.current[i].rotation.y += orbitPlanet[i].orbitSpeed;
    }
  });

  const handleOnClick = (idx) => {
    handleSetState("SET_PLANET_VIEW", "singlePlanetView");
    handleSetState("SET_PLANET_INFO", orbitPlanet);
    handleSetState("SET_PLANET_KEY", idx);
    handleSetState("SET_PLANET_TEXT");
  };

  return (
    <>
      <mesh ref={ref} position={[position[0], position[1], position[2]]}>
        {props.sun ? (
          <>
            <globeShaderMaterial
              uColor={
                new THREE.Color(
                  props.globeRGB[0],
                  props.globeRGB[1],
                  props.globeRGB[2]
                )
              }
              globeTexture={new THREE.TextureLoader().load(props.image)}
            />
            <sphereBufferGeometry
              args={[(planetScale * props.compareEarthSize) / 5, 50, 50]}
            />
          </>
        ) : (
          <>
            <meshStandardMaterial
              map={new THREE.TextureLoader().load(props.image)}
            />
            <sphereBufferGeometry
              args={[planetScale * props.compareEarthSize * 2, 50, 50]}
            />
          </>
        )}

        {props.sun ? (
          <Sun
            planetScale={planetScale}
            compareEarthSize={props.compareEarthSize}
            atmosphereRGB={props.atmosphereRGB}
          />
        ) : (
          ""
        )}
        {orbitPlanet && orbitPlanet.length > 0
          ? orbitPlanet.map((planet, idx) => {
              return (
                <mesh key={idx}>
                  <mesh
                    ref={(el) => (planetRef.current[idx] = el)}
                    onClick={() => handleOnClick(idx)}
                  >
                    <Planet {...planet} />
                  </mesh>
                </mesh>
              );
            })
          : ""}
      </mesh>
    </>
  );
};
