const parsed = (data) => {
  return {
    sun: {
      name: data.StarName,
      spectralType: data.starSpectralType,
      tempK: data.starTempK,
      compareEarthSize: data.starRadiusS * 109.3,
      luminosity: data.starLuminosity,
      sun: true,
      orbitPlanet: [this.planet],
    },
    planet: {
      name: data.planetName,
      position: [23480 * data.orbitDistanceAU * 0.75, 0, 0],
      globeRGB: [0, 0, 0],
      atmosphereRGB: [0, 0, 0],
      compareEarthSize: data.planetRadiusE,
      image: 'moon.jpg',
      speed: 0,
      sun: false,
      orbitSpeed: 0,
      orbitPlanet: [],
    },
  };
};
