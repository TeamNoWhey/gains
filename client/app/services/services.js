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
      method: 'GET',
      url: '/workoutHistory'
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
        console.log('This is data being sent: ', signUpData, 'then res:', res);
        return res.data.token;
      }, function(err) {
        console.log('Signup Error: ', err)
      });
  };

  var login = function(loginData) {

    return $http.post('/signin', loginData)
    .then(function(res) {
      console.log('returning from posting signin info to server');
      console.log('res.data:', res.data); // gets token back
      return res.data.token;
      // console.log('This is logindata being sent: ', loginData)
    }, function(err) {
      console.log('Login Error: ', err);
    });
  };

  var signout = function () {
    console.log('Signout clicked')
    $window.localStorage.removeItem('masaToken');
    $location.path('/signin');
  };


    return {
      signUp: signUp,
      login: login,
      signout: signout
    }

  });


// .factory('Auth', function ($http, $location, $window) {
//   // Don't touch this Auth service!!!
//   // it is responsible for authenticating our user
//   // by exchanging the user's username and password
//   // for a JWT from the server
//   // that JWT is then stored in localStorage as 'com.shortly'
//   // after you signin/signup open devtools, click resources,
//   // then localStorage and you'll see your token from the server
//   var signin = function (user) {
//     return $http({
//       method: 'POST',
//       url: '/api/users/signin',
//       data: user
//     })
//     .then(function (resp) {
//       return resp.data.token;
//     });
//   };

//   var signup = function (user) {
//     return $http({
//       method: 'POST',
//       url: '/api/users/signup',
//       data: user
//     })
//     .then(function (resp) {
//       return resp.data.token;
//     });
//   };

//   var isAuth = function () {
//     return !!$window.localStorage.getItem('com.shortly');
//   };

//   var signout = function () {
//     $window.localStorage.removeItem('com.shortly');
//     $location.path('/signin');
//   };


//   return {
//     signin: signin,
//     signup: signup,
//     isAuth: isAuth,
//     signout: signout
//   };
// });
