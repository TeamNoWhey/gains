var app = angular.module ('FitnessApp', ['Home', 'Planner', 'Auth', 'ngRoute']);

app.config(function($routeProvider, $locationProvider)  {
  $routeProvider
    .when('/', {
      templateUrl: 'app/home/home.html',
      controller: 'HomeCtrl'
    })
    .when('/home', {
      templateUrl: 'app/home/home.html',
      controller: 'HomeCtrl'
    })
    .when('/signin', {
      templateUrl: 'app/auth/signin.html',
      controller: 'AuthCtrl'
    })
    .when('/planworkout', {
      templateUrl: 'app/planner/planworkout.html',
      controller: 'PlannerCtrl'
    })
    .otherwise({
      redirectTo: '/home'
    });

  //This makes Angular routing links look clean, without the #.
  $locationProvider.html5Mode(true);
});


// app.controller('FitnessAppCtrl', function($scope) {

//   //Empty in case it's needed for something
// });