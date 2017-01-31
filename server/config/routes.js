// var linksController = require('../links/linkController.js');
var userController = require('../users/userController.js');
var helpers = require('./helpers.js'); // our custom middleware
var path = require('path');




module.exports = function (app, express) {

  app.post('/signin', userController.signin);
  app.post('/signup', userController.signup);
  app.get('/signedin', userController.checkAuth);


  app.post('/workoutHistory', userController.storeWorkout);
  app.get('/workoutHistory', userController.getWorkoutHistory);


  app.use(function(req, res) {
    res.sendfile(path.resolve(__dirname + '/../../client/index.html'));
  });

};

