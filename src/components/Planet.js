import { shaderMaterial } from "@react-three/drei";
import glsl from "babel-plugin-glsl/macro";
import * as THREE from "three";
import { extend, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Sun } from "./Sun";

export const Planet = (props) => {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  let planetRef = useRef([]);
  const speed = props.speed || 0.0;
  const position = props.position || [0, 10, 0];
  const orbitPlanet = props.orbitPlanet || [];
  const planetScale = 0.3;
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.y += speed));
  useFrame((state, delta) => {
    for (let i = 0; i < planetRef.current.length; i++) {
      planetRef.current[i].rotation.y += orbitPlanet[i].orbitSpeed;
    }
  });

  const planetInformation = () => {
    if (props.planetInfo) {
      console.log(props.planetInfo)
    }
  }

  return (
    <>
      <mesh ref={ref} position={[position[0], position[1], position[2]]}>
        <sphereBufferGeometry
          args={[planetScale * props.compareEarthSize, 50, 50]}
        />
        {props.sun ? (
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
        ) : (
          <meshStandardMaterial
            map={new THREE.TextureLoader().load(props.image)}
          />
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
                    onPointerOver={planetInformation}
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
