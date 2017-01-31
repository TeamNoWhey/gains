var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');

module.exports = function (app, express) {
  app.use(morgan('dev'));
  app.use(bodyParser.json());
  app.use(express.static(path.join(__dirname, '../../client'))); // o()xxxx[{::::::::::::::::::::::::::::::::::>

};