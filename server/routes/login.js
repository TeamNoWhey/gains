console.log('This is login')
var express = require('express');
var path= require('path');
var router = express.Router();

router.get('/login', function(req, res, next) {
  console.log('login');
  // res.sendFile(path.join(__dirname, '../public/app.html'));
});

router.get('/logout', function(req, res, next) {
	console.log('logout')
	// res.redirect('/');
})

module.exports = router;