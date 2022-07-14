const Sequelize = require("sequelize");
const db = require("../db");

const Planet = db.define("planets", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Planet;
