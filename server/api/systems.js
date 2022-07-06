const router = require('express').Router();
const { Op } = require('sequelize');
const {
  models: { System },
} = require('../db');
module.exports = router;

router.get('/', async (req, res, next) => {
  console.log('api route found');
  try {
    const systems = await System.findAll();
    res.json(systems);
  } catch (error) {
    next(error);
  }
});

router.get('/:starName', async (req, res, next) => {
  try {
    const systemByStarName = await System.findAll({
      where: { starName: { [Op.like]: '%proxima%' } },
    });
    res.send(systemByStarName);
  } catch (error) {
    next(error);
  }
});
