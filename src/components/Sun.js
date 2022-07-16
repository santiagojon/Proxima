import React, { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

export const Sun = (props) => {
  const sunRef = useRef(null);
  let compareEarthSize = props.compareEarthSize || 1;
  let atmosphereRGB = props.atmosphereRGB || [0, 0, 0];
  useFrame((state, delta) => (sunRef.current.rotation.y += 0.001));

  return (
    <mesh ref={sunRef}>
      <sphereBufferGeometry
        attach="geometry"
        args={[props.planetScale * compareEarthSize * 1.005, 50, 50]}
      />

      <globeShaderMaterial
        uColor={
          new THREE.Color(atmosphereRGB[0], atmosphereRGB[1], atmosphereRGB[2])
        }
        globeTexture={new THREE.TextureLoader().load(
          "/images/updatedNoise2k.png"
        )}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
};
