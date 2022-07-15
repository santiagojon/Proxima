import React from "react";
import { useEffect, useRef } from "react";
import { textureGenerator } from "../util/TextureGenerator";

export const TestCanvas = (props) => {
  const [imageState, setImageState] = React.useState("");
  const canvasRef = useRef(null);
  //canvas is 2:1 width height so the images doesnt get stretched when placed on a sphere

  const canvasWidth = 2048;
  const canvasHeight = 1024;

  const imageCallBack = (image) => {
    console.log("CALL BACK IMAGE", image);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    ctx.drawImage(image, 0, 0, canvasWidth, canvasHeight);
  };

  useEffect(() => {
    textureGenerator("rocky", [190, 180, 255], imageCallBack);
  }, []);

  return (
    <div>
      <canvas id="testCanvas" ref={canvasRef} />
    </div>
  );
};
