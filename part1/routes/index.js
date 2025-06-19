var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/buyer', (req, res) => {
  debug.query(`
    SELECT b.book_id, b.title, b.price, b.location,
    CONCAT(a.first_name, ' ', a.last_name) AS author
    FROM books b
    JOIN book
    `)

  res.render('buyer');
});

router.get('/seller', (req, res) => {
  res.render('seller');
});

module.exports = router;
