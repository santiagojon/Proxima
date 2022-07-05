//this is the access point for all things database related!

const db = require("./db");

const Planet = require("./models/Planet");
const User = require("./models/User");
const System = require("./models/System")

//associations could go here!

module.exports = {
  db,
  models: {
    Planet,
    User,
    System,
  },
};
