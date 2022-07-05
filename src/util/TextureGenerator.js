//canvas is 2:1 width height so the images doesnt get stretched when placed on a sphere
import { textures } from "./Textures";
const canvasWidth = 2048;
const canvasHeight = canvasWidth / 2;

export const textureGenerator = (planetType, planetColor, callBack) => {
  console.log("inside texture gen");
  const img = new Image();
  const canvas = document.createElement("canvas");
  let ctx = canvas.getContext("2d");
  console.log(ctx);
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
  img.onload = function () {
    ctx.drawImage(img, 0, 0, canvasWidth, canvasHeight);
    ctx.globalCompositeOperation = "multiply";
    ctx.fillStyle = "rgb(193, 253, 255)";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    const newImg = new Image();
    newImg.onload = function () {
      callBack(newImg);
    };
    newImg.src = canvas.toDataURL();
  };
  img.src = texturePicker(planetType, planetColor);
};

//pick texture base on planet color
const texturePicker = (planetType, planetColor) => {
  const textureArr = textures[planetType];
  const planetColorSum = planetColor[0] + planetColor[1] + planetColor[2];
  const textureArrLength = textureArr.length;
  return textureArr[planetColorSum % textureArrLength];
};
