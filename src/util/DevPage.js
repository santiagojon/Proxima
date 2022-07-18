const Lonnie = {
  name: "Lonnie Sheppard",
  planetType: "Super Earth",
  position: [800, 0, 0],
  globeRGB: [0.1, 0.1, 0.1],
  atmosphereRGB: [0.1, 0.1, 0.1],
  compareEarthSize: 10,
  image: "/images/earth3.jpg",
  speed: -0.02,
  sun: false,
  orbitSpeed: 0.00415,
  orbitPlanet: [],
};

const Tylen = {
  name: "Tylen Carroll",
  planetType: "Gas Giant",
  position: [1000, 0, 0],
  globeRGB: [0.1, 0.1, 0.1],
  atmosphereRGB: [0.1, 0.1, 0.1],
  compareEarthSize: 10,
  image: "/images/icy4.jpg",
  speed: 0.6,
  sun: false,
  orbitSpeed: -0.00415,
  orbitPlanet: [],
};

const Chris = {
  name: "Chris Zhen",
  planetType: "Terrestrial",
  position: [300, 0, 0],
  globeRGB: [0.1, 0.1, 0.1],
  atmosphereRGB: [0.1, 0.1, 0.1],
  compareEarthSize: 10,
  image: "/images/rocky6.jpg",
  speed: 0.0006,
  sun: false,
  orbitSpeed: 0.01,
  orbitPlanet: [],
};

const Jon = {
  name: "Jon Santiago",
  planetType: "Gas Giant",
  position: [700, 0, 0],
  globeRGB: [0.1, 0.1, 0.1],
  atmosphereRGB: [0.1, 0.1, 0.1],
  compareEarthSize: 10,
  image: "/images/gas5.jpg",
  speed: 0.06,
  sun: false,
  orbitSpeed: -0.00415,
  orbitPlanet: [],
  miles: "696969",
};

const sun = {
  name: "Dev Team",
  position: [0, 0, 0],
  globeRGB: [1, 0.58, 0.26],
  atmosphereRGB: [1, 0.58, 0.26],
  compareEarthSize: 108,
  image: "/images/sun.jpg",
  speed: 0.0005,
  sun: true,
  orbitSpeed: 0,
  orbitPlanet: [Jon, Chris, Tylen, Lonnie],
};

export const devSys = [sun];

export const names = [
  "Lonnie Sheppard",
  "Tylen Carroll",
  "Chris Zhen",
  "Jon Santiago",
];

export const info = {
  "Jon Santiago": [
    "https://www.linkedin.com/in/santiagojon/",
    "https://github.com/santiagojon/",
  ],
  "Lonnie Sheppard": [
    "https://www.linkedin.com/in/lonnie-sheppard/",
    "https://github.com/LShep95",
  ],
  "Tylen Carroll": [
    "https://www.linkedin.com/in/tylen/",
    "https://github.com/tylen101",
  ],
  "Chris Zhen": [
    "https://www.linkedin.com/in/christopher-zhen-5a714881/",
    "https://github.com/kagashi-chris",
  ],
};
