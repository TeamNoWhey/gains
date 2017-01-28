var express = require('express');
var passport = require('passport');
//var bodyParser = require('body-parser');
var morgan = require('morgan');
var db = require('./db.js');
var bodyParser = require('body-parser');

//Add back in once db file location is confirmed
//var db = require('wherever db is')
// var landingPage = require('./routes/landingPage')
// var workout = require ('./routes/workout');
// var feed = require ('./routes/feed');
// var login = require('./routes/login');
var path = require('path');
var app = express();

<<<<<<< c9ed3dd2d3c23e49eee460c263d044d82931f87f
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json() );

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../client')));
=======
app.use(morgan('dev')); // o()xxxx[{::::::::::::::::::::::::::::::::::>
app.use(express.static(path.join(__dirname, '../client'))); // o()xxxx[{::::::::::::::::::::::::::::::::::>
>>>>>>> reorganized server structure

// app.use('/', landingPage);
// app.use('/login', login);
// app.use('/workout', workout);
// app.use('/feed', feed);

<<<<<<< c9ed3dd2d3c23e49eee460c263d044d82931f87f
app.post('/api/exercises', function(req, res) {
  console.log('This route is getting hit. Here\'s the requesttttt', req.body);
  res.status(200).end();
});

app.use(function(req, res) {
=======
app.use(function(req, res) { // o()xxxx[{::::::::::::::::::::::::::::::::::> 
>>>>>>> reorganized server structure
  // Use res.sendfile, as it streams instead of reading the file into memory.
  res.sendFile(path.resolve(__dirname + '/../client/index.html'));
});


//error handler
// app.use(function(err, res, req, next){
// 	res.status(err.status || 500);
//     res.render('error', {
//         message: err.message,
//         error: err
//     });
// })

var port = process.env.PORT || 8080;
console.log('port:', port)

app.listen(port, function () {
  console.log('MASA is listening on port:', port)
})

module.exports = app;