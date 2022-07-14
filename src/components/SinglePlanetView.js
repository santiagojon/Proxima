import React, { useEffect } from "react";
import { shaderMaterial } from "@react-three/drei";
import glsl from "babel-plugin-glsl/macro";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useRef, useState } from "react";
import Planet from "./Planet";
import { useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const ChangeCameraPosition = (arr, fov, far) => {
  useThree(({ camera }) => {
    camera.position.set(arr[0], arr[1], arr[2]);
    camera.fov = 40;
    camera.far = 9000;
  });
};

const CameraController = (props) => {
  let { camera, gl } = useThree();
  console.log("PROP VIEW STATE!", props.viewState);
  let controls = new OrbitControls(camera, gl.domElement);
  ChangeCameraPosition([-350, 250, 0], 40, 10000);
  useEffect(() => {
    if (props.viewState === "singlePlanetView") {
      controls.minDistance = 0.002;
      controls.maxDistance = 5;
    } else {
      controls.minDistance = 0.02;
      controls.maxDistance = 10000;
    }
    return () => {
      controls.dispose();
    };
  }, [camera, gl]);

  return null;
};

const SinglePlanetView = (props) => {
  const ref = useRef();
  let planetRef = useRef([]);
  const speed = 0.009;
  const position = props.planetInfo.position || [0, 10, 0];
  const orbitPlanet = props.planetInfo.orbitPlanet || [];

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
