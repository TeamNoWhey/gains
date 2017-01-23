// server.js
var express = require('express')

var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

var port = process.env.PORT || 8080;
console.log('port:', port)

app.listen(port, function () {
  console.log('MASA is listening on port:', port)
})