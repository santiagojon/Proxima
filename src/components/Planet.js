import { shaderMaterial } from "@react-three/drei";
import glsl from "babel-plugin-glsl/macro";
import * as THREE from "three";
import { extend, useFrame } from "@react-three/fiber";
import { useRef, useState, useEffect, useMemo } from "react";
import { SinglePlanetView } from "./SinglePlanetView";
import Text from "./spriteText";

export const Planet = (props) => {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  let planetRef = useRef([]);
  const speed = props.speed || 0.0;
  const position = props.position || [0, 10, 0];
  const orbitPlanet = props.orbitPlanet || [];

  const planetScale = 1.5;
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

  function randomizePosition(arr) {
    const angle = Math.random() * Math.PI * 2;
    const x = Math.cos(angle) * arr[0];
    const y = Math.sin(angle) * arr[0];
    return [x, 0, y];
  }

  return (
    <>
      <mesh
        ref={ref}
        position={randomizePosition([position[0], position[1], position[2]])}
      >
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
              args={[
                Math.min(planetScale * props.compareEarthSize, 400),
                50,
                50,
              ]}
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
        {orbitPlanet && orbitPlanet.length > 0
          ? orbitPlanet.map((planet, idx) => {
              return (
                <mesh key={idx}>
                  <mesh ref={(el) => (planetRef.current[idx] = el)}>
                    <Planet
                      {...planet}
                      idx={idx}
                      handleOnClick={handleOnClick}
                    />
                  </mesh>
                </mesh>
              );
            })
          : ""}
        {props.sun ? (
          ""
        ) : (
          <>
            <Text children={props.name} position={[0, 50, 0]} opacity={100} />
            <mesh onClick={() => props.handleOnClick(props.idx)}>
              {console.log(props)}
              <sphereBufferGeometry
                args={[
                  Math.max(planetScale * props.compareEarthSize * 2.05, 60),
                  10,
                  10,
                ]}
              />
              <meshBasicMaterial opacity={0.0} transparent />
            </mesh>
          </>
        )}
      </mesh>
    </>
  );
};
