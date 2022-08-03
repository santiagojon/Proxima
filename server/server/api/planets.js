const router = require("express").Router();
const { Op } = require("sequelize");
const {
  models: { System },
} = require("../db");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const systems = await System.findAll();
    res.json(systems);
  } catch (error) {
    next(error);
  }
});

router.get("/name/:planetName", async (req, res, next) => {
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

router.get("/:type", async (req, res, next) => {
  try {
    const type = req.params.type;
    const offset = req.params.offset || 0;
    console.log(type);
    let planets = [];
    switch (true) {
      case type === "terrestrial":
        planets = await System.findAll({
          limit: 225,
          //           offset: offset,
          where: {
            planetMassE: { [Op.between]: ["0", "2"] },
          },
        });
        break;
      case type === "superearth":
        planets = await System.findAll({
          limit: 225,
          offset: offset,
          where: {
            planetMassE: { [Op.between]: ["2", "10"] },
          },
        });
        break;
      case type === "neptuntunian":
        planets = await System.findAll({
          where: {
            planetMassE: { [Op.between]: ["10", "50"] },
            planetTemp: { [Op.between]: [0, 273] },
          },
          limit: 225,
          offset: offset,
        });
        break;
      case type === "gasgiant":
        planets = await System.findAll({
          where: {
            planetMassE: { [Op.between]: ["50", "5000"] },
          },
          limit: 225,
          offset: offset,
        });
        break;
      default:
        break;
    }

    res.send(planets);
  } catch (error) {
    next(error);
  }
});
