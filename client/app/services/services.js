angular.module('masa.services', [])

.factory('WorkoutsFac', function ($http, $window) { // throw into workout planner controller

  var storeWorkout = function(exercisesData) {
    return $http({
      method: 'POST',
      url: '/workoutHistory',
      data: exercisesData
    })
    .then(function(res) {
      console.log('Successfully posted the data server side where it can be stored in the user\'s db:', res.data);
      // console.log('data that was sent:', exercisesData);
      // return res;
    }, function(err) {
      console.error(err);
    })
  };

  var getWorkoutHistory = function() {
    return $http({
      method: 'GET', // changed from GET becaus
      url: '/workoutHistory' // /${user}`
      // params: {user: user}
    })
    .then(function(res) {
      console.log('Successfully retrieved user\'s workout history from the db:', res.data);
    }, function(err) {
      console.error(err);
    })
  };

  var decode = function() {
    console.log('decoding user token');
    var token = $window.localStorage.getItem('masaToken');
    console.log('token:', token);
    var user;

    if (!token) {
      console.log('the user has no TOKEN!');
    }

    else {
      user = jwt.decode(token, 'secret');
      return user;
    }

  };

  return {
    decode: decode,
    storeWorkout: storeWorkout,
    getWorkoutHistory: getWorkoutHistory
  };
})

.factory('AuthFact', function($http, $location, $window) {

  var signUp = function(signUpData) {

    return $http.post('/signup', signUpData)
      .then(function(res) {
        return res.data.token;
      }, function(err) {
        console.log('Signup Error: ', err)
      });
  };

  var login = function(loginData) {

    return $http.post('/signin', loginData)
    .then(function(res) {
      return res.data.token;

    }, function(err) {
      console.log('Login Error: ', err);
    });
  };


  //Not really working yet.
  var isAuth = function () {
    return !!$window.localStorage.getItem('masaToken');
  };

  var signout = function (){
    $window.localStorage.removeItem('user');
    $window.localStorage.removeItem('masaToken');
    $location.path('/signin');
  };


    return {
      signUp: signUp,
      login: login,
      isAuth: isAuth,
      signout: signout
    }

  });