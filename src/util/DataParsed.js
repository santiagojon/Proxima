// import { textureGenerator } from './TextureGenerator';
import { textures } from "./Textures";
import react from "react";

const canvasWidth = 2048;
const canvasHeight = canvasWidth / 2;

//pick texture base on planet color
export const texturePicker = (planetType, planetColor) => {
  const textureArr = textures[`${planetType}`];
  console.log("text arr", textureArr);
  const planetColorSum = planetColor[0] + planetColor[1] + planetColor[2];
  const textureArrLength = textureArr.length;
  return textureArr[planetColorSum % textureArrLength];
};

export function rgbFinder(temp) {
  if (temp === "null" || !temp) {
    return [150, 150, 150];
  }

  let red = Math.floor((temp / 600) * 230);
  if (red > 230) red = 230;
  else if (red < 150) red = 150;

  let green = Math.floor(red / 2 + 50);
  if (green < 150) green = 150;

  let blue = 150;
  if (temp < 150) blue = 150 - temp + 127;
  if (blue > 230) blue = 230;

  return [red, green, blue];
}

export function textureFinder(mass, temp) {
  //rocky composition
  switch (true) {
    case !mass:
      return "rocky";
    case mass < 0.5:
      if (temp >= 275 && temp <= 375) return "earthLike";
      return "rocky";
    case mass >= 0.5 && mass <= 2:
      if (temp >= 275 && temp <= 375) return "earthLike";
      return "rocky";
    case mass > 2 && mass <= 10:
      if (temp >= 275 && temp <= 375) return "earthLike";
      return "rocky";
    case mass > 10 && mass <= 50:
      if (temp >= 273) return "gas";
      return "icy";
    //https://exoplanets.nasa.gov/what-is-an-exoplanet/planet-types/neptune-like/
    case mass > 50 && mass <= 5000:
      return "gas";
    //Jovian planets tend to have very thick atmospheres consisting of hydrogen, helium, methane, and ammonia
    default:
      return null;
  }
}

const sunRGB = (data) => {
  if (!data.spectralType && !data.starTempK) return [255, 204, 111];
  //rawData.spectralType[0]
  if (data.starSpectralType) {
    switch (data.starSpectralType) {
      case "O":
        return [155, 176, 255];
      case "B":
        return [170, 191, 255];
      case "A":
        return [202, 215, 255];
      case "F":
        return [248, 247, 255];
      case "G":
        return [255, 244, 234];
      case "K":
        return [255, 210, 161];
      case "M":
        return [255, 204, 111];
      default:
        return [255, 204, 111];
    }
    //Spectral Type ColorTemperature RangePrevalence of among Main Sequence Stars Examples
    //O Blue-violet>30,000 K0.00003%Stars of Orion's Belt B Blue-white 10,000 K - 30,000 K 0.13% Rigel A White 7,500 K - 10,000 K 0.6% Sirius F Yellow-white 6,000 K - 7,500 K 3% Polaris G Yellow 5,000 K - 6,000 K 7.6% Sun K Orange 3,500 K - 5000 K 12.1% Arcturus M Red-orange <3,500 K 76.5% Proxima Centauri
  } else
    switch (data.starTempK) {
      case data.starTempK >= 30000:
        return [155, 176, 255];
      case data.starTempK < 30000 && data.starTempK >= 10000:
        return [170, 191, 255];
      case data.starTempK < 10000 && data.starTempK >= 7500:
        return [202, 215, 255];
      case data.starTempK < 7500 && data.starTempK >= 6000:
        return [248, 247, 255];
      case data.starTempK < 6000 && data.starTempK >= 5000:
        return [255, 244, 234];
      case data.starTempK < 5000 && data.starTempK >= 3500:
        return [255, 210, 161];
      case data.starTempK < 3500:
        return [255, 204, 111];
      default:
        return [255, 204, 111];
    }
};

export const getTexture = (planetType, id) => {
  const textureArr = textures[planetType];
  const textureArrLength = textureArr.length;
  return textureArr[id % textureArrLength];
};

export default function dataParser(data) {
  const planets = [];
  if (data === null) return null;
  if (data === undefined || !data[0]) return null;

  console.log("DATA!", data);

  for (let i = 0; i < data.length; i++) {
    const texture = getTexture(
      textureFinder(data[i].planetMassE, data[i].planetTemp),
      data[i].id
    );
    planets.push({
      name: data[i].planetName,
      position: [23480 * data[i].orbitDistanceAU * 0.75, 0, 0],
      globeRGB: rgbFinder(data[i].planetTemp), //get rgb data
      compareEarthSize: data[i].planetRadiusE * 5,
      speed: 0.003,
      sun: false,
      orbitSpeed: data[i].planetOrbitTimeD / 120000,
      orbitPlanet: [],
      image: `${process.env.PUBLIC_URL}/images/${texture}`,
    });
  }

  const sunColor = sunRGB(data[0]);
  const sunTexture = getTexture("sun", sunColor);
  const sun = {
    name: data[0].starName,
    position: [0, 0, 0],
    globeRGB: [sunColor[0] / 255, sunColor[1] / 255, sunColor[2] / 255],
    atmosphereRGB: [1, 0.58, 0.26],
    speed: 0,
    orbitSpeed: 0,
    compareEarthSize: data[0].starRadiusS * 20.3,
    sun: true,
    orbitPlanet: planets,
    img: `${process.env.PUBLIC_URL}/images/${sunTexture}`,
  };
  return [sun];
}

// export const solarSystem = dataParser(data);
