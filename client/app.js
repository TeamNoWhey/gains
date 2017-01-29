var app = angular.module ('FitnessApp', ['Home', 'Planner', 'History', 'ngRoute']);

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
      templateUrl: 'app/auth/signin.html'
    })
    .when('/planworkout', {
      templateUrl: 'app/planner/planworkout.html',
      controller: 'PlannerCtrl'
    })
    .when('/history', {
      templateUrl: 'app/history/history.html',
      controller: 'HistoryCtrl'
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