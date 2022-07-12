const {
  db,

  models: { User, Planet, System },
} = require("../server/db");

const systems = require("./seedData");

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

async function seed() {
  await db.sync({ force: true });
  console.log("db synced!");

  await Promise.all(
    planets.map((planet) =>
      Planet.create({
        name: planet.name,
      })
    )
  );

  await Promise.all(
    systems.map((system) =>
      System.create({
        planetName: system.pl_name,
        starName: system.hostname,
        numberOfStars: system.sy_snum,
        numberOfPlanets: system.sy_pnum,
        discoveryMethod: system.discoverymethod,
        yearDiscovered: system.disc_year,
        discoveryFacility: system.disc_facility,
        isControversial: system.pl_controv_fla,
        planetOrbitTimeD: system.pl_orbper,
        orbitDistanceAU: system.pl_orbsmax,
        planetRadiusE: system.pl_rade,
        planetMassE: system.pl_bmasse,
        planetDensity: system.pl_dens,
        planetOrbitEccentricity: system.pl_orbeccen,
        planetTemp: system.pl_eqt,
        planetOrbitToStarRatio: system.pl_ratror,
        starSpectralType: system.st_spectype,
        starTempK: system.st_teff,
        starRadiusS: system.st_rad,
        starMassS: system.st_mass,
        starLuminosity: system.st_lum,
        starAge: system.st_age,
        starDensity: system.st_dens,
        starRotationVelocity: system.st_vsin,
        starRotationTimeD: system.st_rotp,
        gLat: system.glat,
        gLon: system.glon,
        eclipticLat: system.elat,
        eclipticLon: system.elon,
        distancePC: system.sy_dist,
      })
    )
  );

  const users = await Promise.all([
    User.create({
      username: "Kim",
      firstName: "Kim",
      lastName: "Possible",
      email: "kim@gmail.com",
      password: "123",
      isAdmin: false,
    }),
    User.create({
      username: "Bob",
      firstName: "Bob",
      lastName: "Belcher",
      email: "bob@gmail.com",
      password: "123",
      isAdmin: true,
    }),
  ]);
  console.log(`seeded ${users.length} users`);
  console.log(`seeded successfully`);
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
