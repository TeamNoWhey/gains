var app = angular.module('Auth', ['masa.services']);

app.controller('AuthCtrl', ['$scope', 'AuthFact', function($scope, AuthFact) {
  $scope.signUpData = {};

  $scope.signUp = function(signUpData) {
    // $scope.signUpData.push($scope.userName)
    console.log(this.signUpData);
    var res = AuthFact.signUp($scope.signUpData);
    // .then(function(res) {
    //   console.log('we are back in signup html, the originator ^^^^^^^^:', res);
    // });
    setTimeout(() => console.log(res), 5000);

  }
}]);

