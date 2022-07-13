const neptune = {
  name: "Neptune",
  position: [5216, 0, 0],
  globeRGB: [0.1, 0.2, 0.5],
  atmosphereRGB: [0.05, 0.1, 0.2],
  compareEarthSize: 3.9,
  image: "neptune.jpg",
  speed: 0.000001,
  sun: false,
  orbitSpeed: 0.0005,
  orbitPlanet: [],
};

const uranus = {
  name: "Uranus",
  position: [3600, 0, 0],
  globeRGB: [0.1, 0.2, 0.5],
  atmosphereRGB: [0.1, 0.2, 0.5],
  compareEarthSize: 4,
  image: "uranus.jpg",
  speed: 0.00005,
  sun: false,
  orbitSpeed: 0.000005,
  orbitPlanet: [],
};

const saturn = {
  name: "Saturn",
  position: [1832, 0, 0],
  globeRGB: [0.3, 0.2, 0.15],
  atmosphereRGB: [1, 0.87, 0.8],
  compareEarthSize: 9,
  image: "saturn.jpg",
  speed: 0.0001,
  sun: false,
  orbitSpeed: 0.0005,
  orbitPlanet: [],
};

const jupiter = {
  name: "Jupiter",
  position: [920, 0, 0],
  globeRGB: [0.3, 0.2, 0.15],
  atmosphereRGB: [1, 0.87, 0.8],
  compareEarthSize: 11,
  image: "jup.jpg",
  speed: 0.0002,
  sun: false,
  orbitSpeed: 0.0015,
  orbitPlanet: [],
};

const mars = {
  name: "Mars",
  position: [260, 0, 0],
  globeRGB: [0.8, 0.55, 0.3],
  atmosphereRGB: [0.8, 0.55, 0.3],
  compareEarthSize: 0.5,
  image: "mars.jpg",
  speed: 0.0003,
  sun: false,
  orbitSpeed: 0.0015,
  orbitPlanet: [],
};
const moon = {
  name: "Moon",
  position: [7, 0, 0],
  globeRGB: [0, 0, 0],
  atmosphereRGB: [0, 0, 0],
  compareEarthSize: 0.25,
  image: "moon.jpg",
  speed: 0.0003,
  sun: false,
  orbitSpeed: 0.03,
  orbitPlanet: [],
};
const earth = {
  name: "Earth",
  position: [184, 0, 0],
  globeRGB: [0.3, 0.6, 1.0],
  atmosphereRGB: [0.3, 0.6, 1.0],
  compareEarthSize: 1,
  image: "earth2.jpg",
  speed: 0.0,
  sun: false,
  orbitSpeed: 0.0015,
  orbitPlanet: [moon],
};

const venus = {
  name: "Venus",
  position: [134, 0, 0],
  globeRGB: [1, 0.5, 0.27],
  atmosphereRGB: [1, 0.5, 0.27],
  compareEarthSize: 0.9,
  image: "venus.jpg",
  speed: 0.0003,
  sun: false,
  orbitSpeed: 0.0035,
  orbitPlanet: [],
};

const mercury = {
  name: "Mercury",
  position: [70, 0, 0],
  globeRGB: [0.1, 0.1, 0.1],
  atmosphereRGB: [0.1, 0.1, 0.1],
  compareEarthSize: 0.3,
  image: "mercury.jpg",
  speed: 0.0003,
  sun: false,
  orbitSpeed: 0.005,
  orbitPlanet: [],
};

const sun = {
  name: "Sun",
  position: [0, 0, 0],
  globeRGB: [1, 0.58, 0.26],
  atmosphereRGB: [1, 0.58, 0.26],
  compareEarthSize: 108,
  image: "sun.jpg",
  speed: 0.0,
  sun: true,
  orbitSpeed: 0,
  orbitPlanet: [earth, mercury, venus, mars, jupiter, saturn, uranus, neptune],
};

export const solarSys = [sun];
