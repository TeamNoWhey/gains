var express = require('express');
var path = require('path');
var passport = require('passport');
//var bodyParser = require('body-parser');
var morgan = require('morgan');
var db = require('./db.js');

//Add back in once db file location is confirmed
//var db = require('wherever db is')
var landingPage = require('./routes/landingPage')
var workout = require ('./routes/workout');
var feed = require ('./routes/feed');
var login = require('./routes/login');
var app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + '../client'));

app.use('/', landingPage);
app.use('/login', login);
app.use('/workout', workout);
app.use('/feed', feed);


//error handler
app.use(function(err, res, req, next){
	res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: err
    });
})

var port = process.env.PORT || 8080;
console.log('port:', port)

app.listen(port, function () {
  console.log('MASA is listening on port:', port)
})

module.exports = app;