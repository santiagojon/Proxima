const router = require('express').Router();


router.use('/planets', require('./planets'));


router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

module.exports = router;
