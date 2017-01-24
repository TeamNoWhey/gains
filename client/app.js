//Not in use yet. Will be used for routing later. Currently using static routing with express

var app = angular.module ('FitnessApp', ['ngRoute']);

app.config(function($routeProvider)  {
  $routeProvider
    .when('/', {
      templateUrl: 'index.html',
      controller: 'MainController'
    });
});