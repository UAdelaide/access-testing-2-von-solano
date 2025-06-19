var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/seller', (req, res) => {
  res.render('seller');
});

module.exports = router;
