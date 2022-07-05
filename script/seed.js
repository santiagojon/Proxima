"use strict";

const {
  db,
  models: { Planet },
} = require("../server/db");

const planets = [
  {
    name: "earth",
  },
  {
    name: "mars",
  },
  {
    name: "neptune",
  },
];

const seed = async () => {
  try {
    await db.sync({ force: true });

    // seed your database here!

    await Promise.all(
      planets.map((planet) =>
        Planet.create({
          name: planet.name,
        })
      )
    );
  } catch (err) {
    console.log(err);
  }
};

module.exports = seed;
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
  seed()
    .then(() => {
      console.log("Seeding success!");
      db.close();
    })
    .catch((err) => {
      console.error("Oh noes! Something went wrong!");
      console.error(err);
      db.close();
    });
}
