const router = require('express').Router();
const { Op } = require('sequelize');
const {
  models: { System },
} = require('../db');
module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const systems = await System.findAll();
    res.json(systems);
  } catch (error) {
    next(error);
  }
});



router.get('/name/:planetName', async (req, res, next) => {
  try {
    const planets = await System.findAll({
      where: {
        starName: { [Op.like]: `%${req.params.planetName}%` },
      },
      limit: 5,
    });
    res.send(planets);
  } catch (error) {
    next(error);
  }
});

router.get('/:type', async (req, res, next) => {
  try {
    const type = req.params.type;
    console.log(type);
    let planets = [];
    switch (true) {
      case type === 'terrestrial':
        planets = await System.findAll({
          where: {
            planetMassE: { [Op.between]: ['0', '2'] },
          },
          limit: 20,
        });
        break;
      case type === 'superearth':
        planets = await System.findAll({
          where: {
            planetMassE: { [Op.between]: ['2', '10'] },
          },
          limit: 20,
        });
        break;
      case type === 'neptuntunian':
        planets = await System.findAll({
          where: {
            planetMassE: { [Op.between]: ['10', '50'] },
          },
          limit: 20,
        });
        break;
      case type === 'gasgiant':
        planets = await System.findAll({
          where: {
            planetMassE: { [Op.between]: ['50', '5000'] },
          },
          limit: 20,
        });
        break;

      //     // case mass >= 0.5 && mass <= 2:
      //     //   if (temp >= 275 && temp <= 375) return "earthLike";
      //     //   return "rocky";
      //     // case mass > 2 && mass <= 10:
      //     //   if (temp >= 275 && temp <= 375) return "earthLike";
      //     //   return "rocky";
      //     // case mass > 10 && mass <= 50:
      //     //   if (temp >= 273) return "gas";
      //     //   return "icy";
      //     // //https://exoplanets.nasa.gov/what-is-an-exoplanet/planet-types/neptune-like/
      //     // case mass > 50 && mass <= 5000:
      //     //   return "gas";
      //     //Jovian planets tend to have very thick atmospheres consisting of hydrogen, helium, methane, and ammonia
      default:
        break;
    }

    res.send(planets);
  } catch (error) {
    next(error);
  }
});
