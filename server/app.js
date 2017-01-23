var express = require('express');
var path = require('path');
var passport = require('passport');
var app = express();

//Add back in once db file location is confirmed
//var db = require('wherever db is?')

//Goes to landing page
app.get('/', function (req, res) {
  res.send('Hello Landing Page!')
});


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