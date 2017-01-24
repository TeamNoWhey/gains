var app = angular.module ('FitnessApp', ['ngRoute']);

app.config(function($routeProvider)  {
  $routeProvider
    .when('/', {
      templateUrl: 'index.html',
      controller: 'MainController'
    });
});