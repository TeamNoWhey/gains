console.log('This is workout');
var express = require('express');
var router = express.Router();

router.get('/workout', function(req, res, next) {
     res.send('hello from workout');
});

module.exports = router;
