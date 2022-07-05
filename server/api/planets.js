const router = require("express").Router();
const {
  models: { Planet },
} = require("../db");
module.exports = router;


// GET /api/planets
router.get("/",  async (req, res, next) => {
  try {
    const planets = await Planet.findAll({
 });
    console.log(req.planet)
    res.json(planets);
  } catch (error) {
    next(error);
  }
});

