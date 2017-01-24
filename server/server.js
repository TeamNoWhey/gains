// server.js

var express = require('express');
var path = require('path');
var app = express();

//Serving Static Files so that index.html can be rendered
app.use(express.static(path.join(__dirname, '../client')));


app.get('/', function (req, res) {
  // res.sendFile('index.html', {root: __dirname + '/../client/'});
})

app.listen(3000, function () {
  console.log('MASA is listening on port 3000!')
})