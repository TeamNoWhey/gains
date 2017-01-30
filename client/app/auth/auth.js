var app = angular.module('Auth', ['masa.services']);

app.controller('AuthCtrl', ['$scope', 'AuthFact', function($scope, AuthFact) {
  $scope.signUpData = {};
  $scope.loginData = {};

  $scope.signUp = function(signUpData) {
    AuthFact.signUp($scope.signUpData);
  }


  $scope.login = function(loginData) {
   AuthFact.login($scope.loginData);
  }
}]);


