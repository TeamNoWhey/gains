angular.module('masa.services', [])

.factory('WorkoutsFac', function ($http) { // throw into workout planner controller

  // need a post of all the exercises data to the server for storage into the db
  // (stretch) will need to make a GET request to the server for fetching of target weight from the db
  // (stretch) will need to make a GET request to the server in order to fetch a list of all the exercises for autocomplete
  //    (probably want to cache this)

  // var userInfo =

  // var getUserInfo = function() {

  // }





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
    // .catch(function(err) {
    //   console.error(err);
    // })
  };

  var getWorkoutHistory = function() {
    return $http({
      method: 'GET',
      url: '/workoutHistory'
    })
    .then(function(res) {
      console.log('Successfully retrieved user\'s workout history from the db:', res.data);
    }, function(err) {
      console.error(err);
    })
  };

  // var getAll = function() {
  //   return $http({
  //     method: 'GET',
  //     url: '/api/links'
  //   })
  //   .then(function (resp) {
  //     return resp.data;
  //   });
  // };

  // var addOne = function(url) {
  //   return $http({
  //     method: 'POST',
  //     url: '/api/links',
  //     data: url,
  //   })
  //   .then(function (resp) {
  //     return resp;
  //   });
  // };

  return {
    storeWorkout: storeWorkout,
    getWorkoutHistory: getWorkoutHistory
  };

  // var changeViewShorten = function() {
  //   $scope.changeView = function(view) {
  //     $location.path(view);
  //   };
  // };
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

  var signout = function () {
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