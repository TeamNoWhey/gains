var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');

module.exports = function (app, express) {
  app.use(morgan('dev'));
  // app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  // app.use(express.static(__dirname + '../client'));
  app.use(express.static(path.join(__dirname, '../../client'))); // o()xxxx[{::::::::::::::::::::::::::::::::::>

  // app.use(function(req, res) {
  //   // Use res.sendfile, as it streams instead of reading the file into memory.
  //   res.sendfile(path.resolve(__dirname + '/../../client/index.html'));
  // });
};