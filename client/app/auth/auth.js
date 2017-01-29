var app = angular.module('Auth', ['masa.services']);

app.controller('AuthCtrl', ['$scope', 'AuthFact', function($scope, AuthFact) {
  $scope.signUpData = {};

  $scope.signUp = function(signUpData) {
    // $scope.signUpData.push($scope.userName)
    console.log(this.signUpData);
    AuthFact.signUp($scope.signUpData);

  }
}]);

