const { Sequelize, DataTypes } = require("sequelize");
const db = require("../db");

const System = db.define("system", {
  planetName: {
    type: Sequelize.STRING,
  },
  starName: {
    type: Sequelize.STRING,
  },
  numberOfStars: {
    type: Sequelize.STRING,
  },
  numberOfPlanets: {
    type: Sequelize.STRING,
  },
  discoveryMethod: {
    type: Sequelize.STRING,
  },
  yearDiscovered: {
    type: Sequelize.STRING,
  },
  discoveryFacility: {
    type: Sequelize.STRING,
  },
  planetOrbitTimeD: {
    type: Sequelize.STRING,
  },
  orbitDistanceAU: {
    type: Sequelize.STRING,
  },
  planetRadiusE: {
    type: Sequelize.STRING,
  },
  planetMassE: {
    type: DataTypes.INTEGER,
  },
  planetDensity: {
    type: Sequelize.STRING,
  },
  planetOrbitEccentricity: {
    type: Sequelize.STRING,
  },
  planetTemp: {
    type: DataTypes.INTEGER,
  },
  planetOrbitToStarRatio: {
    type: Sequelize.STRING,
  },
  starSpectralType: {
    type: Sequelize.STRING,
  },
  starTempK: {
    type: Sequelize.STRING,
  },
  starRadiusS: {
    type: Sequelize.STRING,
  },
  starMassS: {
    type: Sequelize.STRING,
  },
  starLuminosity: {
    type: Sequelize.STRING,
  },
  starAge: {
    type: Sequelize.STRING,
  },
  starDensity: {
    type: Sequelize.STRING,
  },
  starRotationVelocity: {
    type: Sequelize.STRING,
  },
  starRotationTimeD: {
    type: Sequelize.STRING,
  },
  gLat: {
    type: Sequelize.STRING,
  },
  gLon: {
    type: Sequelize.STRING,
  },
  eclipticLat: {
    type: Sequelize.STRING,
  },
  eclipticLon: {
    type: Sequelize.STRING,
  },
  distancePC: {
    type: Sequelize.STRING,
  },
});

module.exports = System;
