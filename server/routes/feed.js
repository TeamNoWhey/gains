//This is for the other group if they want it?

console.log('This is feed')
var express = require('express');
var router = express.Router();

router.get('/feed', function(req, res, next) {
     res.send('hello from the feed');
});

module.exports = router;
