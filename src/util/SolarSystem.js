const neptune = {
  name: "Neptune",
  planetType: "Neptunian",
  position: [6516, 0, 0],
  globeRGB: [0.1, 0.2, 0.5],
  atmosphereRGB: [0.05, 0.1, 0.2],
  compareEarthSize: 3.9,
  image: "/images/neptune.jpg",
  speed: 0.000001,
  sun: false,
  orbitSpeed: 0.00001,
  orbitPlanet: [],
  miles: "2.7346 billion miles",
};

const uranus = {
  name: "Uranus",
  planetType: "Neptunian",
  position: [5200, 0, 0],
  globeRGB: [0.1, 0.2, 0.5],
  atmosphereRGB: [0.1, 0.2, 0.5],
  compareEarthSize: 4,
  image: "/images/uranus.jpg",
  speed: 0.00005,
  sun: false,
  orbitSpeed: 0.00005,
  orbitPlanet: [],
  miles: "1.8682 billion miles",
};

const saturn = {
  name: "Saturn",
  planetType: "Gas_Giant",
  position: [3600, 0, 0],
  globeRGB: [0.3, 0.2, 0.15],
  atmosphereRGB: [1, 0.87, 0.8],
  compareEarthSize: 9,
  image: "/images/saturn.jpg",
  speed: 0.0001,
  sun: false,
  orbitSpeed: 0.00008,
  orbitPlanet: [],
  miles: "834.26 million miles",
};

const jupiter = {
  name: "Jupiter",
  planetType: "Gas_Giant",
  position: [2000, 0, 0],
  globeRGB: [0.3, 0.2, 0.15],
  atmosphereRGB: [1, 0.87, 0.8],
  compareEarthSize: 11,
  image: "/images/jup.jpg",
  speed: 0.0002,
  sun: false,
  orbitSpeed: 0.00016,
  orbitPlanet: [],
  miles: "427.84 million miles",
};

const mars = {
  name: "Mars",
  planetType: "Terrestrial",
  position: [720, 0, 0],
  globeRGB: [0.8, 0.55, 0.3],
  atmosphereRGB: [0.8, 0.55, 0.3],
  compareEarthSize: 0.5,
  image: "/images/mars.jpg",
  speed: 0.0003,
  sun: false,
  orbitSpeed: 0.00096,
  orbitPlanet: [],
  miles: "113.88 million miles",
};
const moon = {
  name: "Moon",
  planetType: "Terrestrial",
  position: [30, 0, 0],
  globeRGB: [0, 0, 0],
  atmosphereRGB: [0, 0, 0],
  compareEarthSize: 0.25,
  image: "/images/moon.jpg",
  speed: 0.0003,
  sun: false,
  orbitSpeed: 0.0148,
  orbitPlanet: [],
  miles: "238,900 miles",
};
const earth = {
  name: "Earth",
  planetType: "Terrestrial",
  position: [568, 0, 0],
  globeRGB: [0.3, 0.6, 1.0],
  atmosphereRGB: [0.3, 0.6, 1.0],
  compareEarthSize: 1,
  image: "/images/earth2.jpg",
  speed: 0.0,
  sun: false,
  orbitSpeed: 0.002,
  orbitPlanet: [moon],
};

const venus = {
  name: "Venus",
  planetType: "Terrestrial",
  position: [468, 0, 0],
  globeRGB: [1, 0.5, 0.27],
  atmosphereRGB: [1, 0.5, 0.27],
  compareEarthSize: 0.9,
  image: "/images/venus.jpg",
  speed: 0.0003,
  sun: false,
  orbitSpeed: 0.00326,
  orbitPlanet: [],
  miles: "137.79 million miles",
};

const mercury = {
  name: "Mercury",
  planetType: "Terrestrial",
  position: [340, 0, 0],
  globeRGB: [0.1, 0.1, 0.1],
  atmosphereRGB: [0.1, 0.1, 0.1],
  compareEarthSize: 0.3,
  image: "/images/mercury.jpg",
  speed: 0.0006,
  sun: false,
  orbitSpeed: 0.00415,
  orbitPlanet: [],
  miles: "123.56 million miles",
};

const sun = {
  name: "Sun",
  starAge: 4.6,
  position: [0, 0, 0],
  globeRGB: [1, 0.58, 0.26],
  atmosphereRGB: [1, 0.58, 0.26],
  compareEarthSize: 108,
  image: "/images/sun.jpg",
  speed: 0.0005,
  sun: true,
  orbitSpeed: 0,
  orbitPlanet: [earth, mercury, venus, mars, jupiter, saturn, uranus, neptune],
  miles: "94.484 million miles",
};

export const solarSys = [sun];
