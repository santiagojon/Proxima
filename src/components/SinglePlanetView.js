import React from "react";
import { shaderMaterial } from "@react-three/drei";
import glsl from "babel-plugin-glsl/macro";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useRef, useState } from "react";
import Planet from './Planet'


const SinglePlanetView = (props) => {
console.log('SINGLEPLANET_PROPS', props)
  const ref = useRef();
  let planetRef = useRef([]);
  const speed = props.planetInfo.speed || 0.0;
  const position = props.planetInfo.position || [0, 10, 0];
  const orbitPlanet = props.planetInfo.orbitPlanet || [];
  const planetScale = 0.3;

//   console.log("Bing Bong 2: Electric Boogaloo");

//   useFrame((state, delta) => (ref.current.rotation.y += speed));
//   useFrame((state, delta) => {
//     for (let i = 0; i < planetRef.current.length; i++) {
//       planetRef.current[i].rotation.y += orbitPlanet[i].orbitSpeed;
//     }
//   });


  return (
      <mesh ref={ref} position={[0,0,0]}>
        <sphereBufferGeometry/>
        {props.sun ? (
          <globeShaderMaterial
            uColor={
              new THREE.Color(
                props.planetInfo.globeRGB[0],
                props.planetInfo.globeRGB[1],
                props.planetInfo.globeRGB[2]
              )
            }
            globeTexture={new THREE.TextureLoader().load(props.planetInfo.image)}
          />
        ) : (
          <meshStandardMaterial
            map={new THREE.TextureLoader().load(props.planetInfo.image)}
          />
        )}
      </mesh>
  );
};

export default SinglePlanetView;








