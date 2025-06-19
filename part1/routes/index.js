var express = require('express');
var router = express.Router();
const db = require('app.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/seller', (req, res) => {
  res.render('seller');
});

module.exports = router;
