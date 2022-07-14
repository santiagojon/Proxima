const router = require('express').Router();

router.use('/systems', require('./systems'));
router.use('/users', require('./users'));
router.use('/planets', require('./planets'));

router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

module.exports = router;
