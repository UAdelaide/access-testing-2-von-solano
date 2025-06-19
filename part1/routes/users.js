var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/buyer', (req, res) => {
  res.render('buyer');
});

router.get('/seller', (req, res) => {
  res.render('seller');
});

module.exports = router;
