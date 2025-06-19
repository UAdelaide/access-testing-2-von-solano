var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const mysql = require('mysql2');
const db = mysql.createPool({
    user: 'root',
    password: '',
    database: 'textbook_marketplace'
});

var app = express();

// VIEW ENGINE SETUP
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.get('/buyer', (req, res) => {
    db.query(`
      SELECT b.book_id, b.title, b.price, b.location,
      CONCAT(a.first_name, ' ', a.last_name) AS author
      FROM books b
      JOIN book_authors ba ON b.book_id = ba.book_id
      JOIN authors a ON ba.author_id = a.author_id
      WHERE b.available = 1
      `, (err, results) => {
        if(err) return res.status(500).send('database error');
        res.render('buyer', { books: results });
      });
  });

app.post('/message', (req, res) => {
  const { sender_id, receiver_id, message } = req.body;

  if(!sender_id || !receiver_id || !message){
    return res.status(400).send("missing fields");
  }

  const sql = `
    INSERT INTO messages (sender_id, receiver_id, message) VALUES (?, ?, ?)
  `

});

module.exports = app;
