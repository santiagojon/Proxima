//this is the access point for all things database related!

const db = require("./db");

const Planet = require("./models/Planet");

//associations could go here!

module.exports = {
  db,
  models: {
    Planet,
  },
};
