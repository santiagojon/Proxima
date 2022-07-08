// import { textureGenerator } from './TextureGenerator';
import { textures } from './Textures';

const data = {
  id: 6,
  planetName: 'tau Cet h',
  starName: 'tau Cet',
  numberOfStars: '1',
  numberOfPlanets: '4',
  discoveryMethod: 'Radial Velocity',
  yearDiscovered: '2017',
  discoveryFacility: 'Multiple Observatories',
  planetOrbitTimeD: '49.41000000',
  orbitDistanceAU: '0.243000',
  planetRadiusE: '1.190',
  planetMassE: '1.83000',
  planetDensity: '5.970000',
  planetOrbitEccentricity: '0.230000',
  planetTemp: null,
  planetOrbitToStarRatio: null,
  starSpectralType: 'G8.5V',
  starTempK: '5310.00',
  starRadiusS: '0.83',
  starMassS: '0.78',
  starLuminosity: '-0.305',
  starAge: '12.120',
  starDensity: '2.24358',
  starRotationVelocity: '1.8000',
  starRotationTimeD: '34.50',
  gLat: '-73.44240',
  gLon: '173.07319',
  eclipticLat: '-24.80956',
  eclipticLon: '17.81270',
  distancePC: '3.6030400',
  createdAt: '2022-07-05T20:18:55.695Z',
  updatedAt: '2022-07-05T20:18:55.695Z',
};

const canvasWidth = 2048;
const canvasHeight = canvasWidth / 2;

export const textureGenerator = (planetType, planetColor, callBack) => {
  console.log('inside texture gen');
  const img = new Image();
  const canvas = document.createElement('canvas');
  let ctx = canvas.getContext('2d');
  console.log(ctx);
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
  img.onload = function () {
    ctx.drawImage(img, 0, 0, canvasWidth, canvasHeight);
    ctx.globalCompositeOperation = 'multiply';
    ctx.fillStyle = 'rgb(193, 253, 255)';
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

const returnFunc = (img) => {
  return img;
};

export function rgbFinder(temp) {
  if (!temp) {
    return [127, 127, 127];
  }

  let red = Math.floor((temp / 600) * 230);
  if (red > 230) red = 230;
  else if (red < 127) red = 127;

  let green = red / 2 + 50;
  if (green < 127) green = 127;

  let blue = 127;
  if (temp < 150) blue = 150 - temp + 127;
  if (blue > 230) blue = 230;

  return [red, green, blue];
}

export function textureFinder(mass, temp) {
  //rocky composition
  switch (true) {
    case !mass:
      return 'rocky';
    case mass < 0.5:
      if (temp >= 275 && temp <= 375) return 'earthLike';
      return 'rocky';
    case mass >= 0.5 && mass <= 2:
      if (temp >= 275 && temp <= 375) return 'earthLike';
      return 'rocky';
    case mass > 2 && mass <= 10:
      if (temp >= 275 && temp <= 375) return 'earthLike';
      return 'rocky';
    case mass > 10 && mass <= 50:
      if (temp >= 273) return 'gas';
      return 'icy';
    //https://exoplanets.nasa.gov/what-is-an-exoplanet/planet-types/neptune-like/
    case mass > 50 && mass <= 5000:
      return 'gas';
    //Jovian planets tend to have very thick atmospheres consisting of hydrogen, helium, methane, and ammonia
    default:
      return null;
  }
}

const sunRGB = (data) => {
  if (!data.spectralType && !data.starTempK) return [255, 204, 111];
  console.log(data.starSpectralType[0]);
  //rawData.spectralType[0]
  if (data.starSpectralType[0]) {
    switch (data.starSpectralType[0]) {
      case 'O':
        return [155, 176, 255];
      case 'B':
        return [170, 191, 255];
      case 'A':
        return [202, 215, 255];
      case 'F':
        return [248, 247, 255];
      case 'G':
        return [255, 244, 234];
      case 'K':
        return [255, 210, 161];
      case 'M':
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

const parsed = (data) => {
  const planet = {
    name: data.planetName,
    position: [(23480 * data.orbitDistanceAU * 0.75) / 100, 0, 0],
    globeRGB: rgbFinder(data.planetTemp), //get rgb data
    // atmosphereRGB: [0, 0, 0],
    compareEarthSize: data.planetRadiusE * 10,
    // image: 'earth.jpg',
    image: textureGenerator(
      textureFinder(data.planetMassE, data.planetTemp),
      rgbFinder(rgbFinder(data.planetTemp), returnFunc)
    ), //classify planet to get image
    speed: 0,
    sun: false,
    orbitSpeed: 0,
    orbitPlanet: [],
  };
  const sun = {
    name: data.starName,
    position: [0, 0, 0],
    globeRGB: sunRGB(data),
    atmosphereRGB: [255, 204, 111],
    image: 'sun.jpg',
    // image: textureGenerator(this.globeRGB),
    compareEarthSize: data.starRadiusS * 109.3,
    sun: true,
    orbitPlanet: [planet],
  };
  return [sun];
};

const solarSystem = parsed(data);
export default solarSystem;
