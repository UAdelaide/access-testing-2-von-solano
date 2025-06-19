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
    JOIN book_authors ba ON b.book_id = ba.book_id
    JOIN authors a ON ba.author_id = a.author_id
    WHERE b.available = 1
    `, (err, results) => {
      if(err) return res.status(500)
    })

  res.render('buyer');
});

router.get('/seller', (req, res) => {
  res.render('seller');
});

module.exports = router;
