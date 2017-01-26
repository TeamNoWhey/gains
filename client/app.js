//Not in use yet. Will be used for routing later. Currently using static routing with express

var app = angular.module ('FitnessApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider)  {
  $routeProvider
    .when('/', {
      templateUrl: 'views/goals.html',
      // controller: 'MainController'
    })
    .when('/home', {
      templateUrl: 'home.html',
      controller: 'MainController'
    })
    .when('/signin', {
      templateUrl: 'app/auth/signin.html'
    })
    .when('/planworkout', {
      templateUrl: 'app/planner/planworkout.html',
      // controller: 'DemoCtrl'
    });

    //Uncomment when done routing for clean links
  $locationProvider.html5Mode(true);
});


app.controller('MainController', function($scope) {
  $scope.message = 'Everyone see this please.';

});