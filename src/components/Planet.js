import { shaderMaterial } from "@react-three/drei";
import glsl from "babel-plugin-glsl/macro";
import * as THREE from "three";
import { extend, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Sun } from "./Sun";

export const Planet = (props) => {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  // Subscribe this component to the render-loop, rotate the mesh every frame

  return (
    <mesh ref={ref}>
      <sphereBufferGeometry args={[1.5 * props.compareEarthSize, 50, 50]} />
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
      <mesh>
        <sphereBufferGeometry
          attach="geometry"
          args={[1.5 * props.compareEarthSize * 1.05, 50, 50]}
        />
        <atmosphereShaderMaterial
          uColor={
            new THREE.Color(
              props.atmosphereRGB[0],
              props.atmosphereRGB[1],
              props.atmosphereRGB[2]
            )
          }
          attach="material"
          blending={THREE.AdditiveBlending}
          side={THREE.BackSide}
        />
        {props.sun ? (
          <Sun
            compareEarthSize={props.compareEarthSize}
            atmosphereRGB={props.atmosphereRGB}
          />
        ) : (
          ""
        )}
      </mesh>
    </mesh>
  );
};
