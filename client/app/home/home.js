var app = angular.module('Home', []);

app.controller('HomeCtrl', ['$scope', function($scope) {

  $scope.goals = [
  'Goal #1 with a checkboxxxxx after',
  'Goal #2 sjdakdjka',
  'Goal #3 jkjkljjkljijo'
  ];
  $scope.message = 'Everyone see this please';

}]);