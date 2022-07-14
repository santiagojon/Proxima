import React, { useEffect } from "react";
import { shaderMaterial } from "@react-three/drei";
import glsl from "babel-plugin-glsl/macro";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useRef, useState } from "react";
import { CameraController } from "./CameraController";

const SinglePlanetView = (props) => {
  const ref = useRef();
  const speed = 0.001;

  useFrame((state, delta) => (ref.current.rotation.y += speed));

  return (
    <>
      <CameraController />
      <mesh ref={ref} position={[0, 0, 0]}>
        <sphereBufferGeometry args={[170, 50, 50]} />
        {props.sun ? (
          <globeShaderMaterial
            uColor={
              new THREE.Color(
                props.planetInfo.globeRGB[0],
                props.planetInfo.globeRGB[1],
                props.planetInfo.globeRGB[2]
              )
            }
            globeTexture={new THREE.TextureLoader().load(
              props.planetInfo.image
            )}
          />
        ) : (
          <meshStandardMaterial
            map={new THREE.TextureLoader().load(props.planetInfo.image)}
          />
        )}
      </mesh>
    </>
  );
};

export default SinglePlanetView;
