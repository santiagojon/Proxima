import React, { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const ChangeCameraPosition = (arr, fov, far) => {
  useThree(({ camera }) => {
    camera.position.set(arr[0], arr[1], arr[2]);
    camera.fov = 40;
    camera.far = 9000;
  });
};

export const CameraController = (props) => {
  let { camera, gl } = useThree();
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
