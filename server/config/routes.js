// var linksController = require('../links/linkController.js');
var userController = require('../users/userController.js');
var helpers = require('./helpers.js'); // our custom middleware
var path = require('path');




module.exports = function (app, express) {
  app.post('/workoutHistory', userController.storeWorkout);
  app.get('/workoutHistory', userController.getWorkoutHistory);

  app.post('/signin', function(req, res) {
    console.log('Hi signin route hit.');
    res.status(200).end();
  })


  //Change this function to user.Controller whatever
  app.post('/signup', function(req, res) {
    console.log('Signup route hit', req.body);
    res.status(200).end();
  })



  app.use(function(req, res) {
    // Use res.sendfile, as it streams instead of reading the file into memory.
    res.sendfile(path.resolve(__dirname + '/../../client/index.html'));
  });



  // app.get('/:code', linksController.navToLink);

  // app.post('/api/users/signin', userController.signin);
  // app.post('/api/users/signup', userController.signup);
  // app.get('/api/users/signedin', userController.checkAuth);

  // // authentication middleware used to decode token and made available on the request
  // // app.use('/api/links', helpers.decode);
  // app.get('/api/links/', linksController.allLinks);
  // app.post('/api/links/', linksController.newLink);

  // // If a request is sent somewhere other than the routes above,
  // // send it through our custom error handler
  // app.use(helpers.errorLogger);
  // app.use(helpers.errorHandler);
};

