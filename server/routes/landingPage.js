console.log('This is landing page')
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.send('hello from the landing page');
});

module.exports = router;
