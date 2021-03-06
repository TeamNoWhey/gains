var app = angular.module('Auth', ['masa.services']);

app.controller('AuthCtrl', ['$scope', '$location', '$window', 'AuthFact', function($scope, $location, $window, AuthFact) {
  $scope.signUpData = {};
  $scope.loginData = {};

  $scope.signUp = function(signUpData) {
    console.log('signUpData:', $scope.signUpData);

      $window.localStorage.setItem('user', $scope.signUpData.username);
    AuthFact.signUp($scope.signUpData)
    .then(function(token) {
      $window.localStorage.setItem('masaToken', token)
      $location.path('/home');
    })
    .catch(function(error) {
      console.log('No tokennnnn', error);
    });
  };


  $scope.signIn = function(loginData) {
    console.log('loginData:', $scope.loginData);
      $window.localStorage.setItem('user', $scope.loginData.username);
   AuthFact.login($scope.loginData)
   .then(function(token) {
      console.log('token: ', token);
      $window.localStorage.setItem('masaToken', token)
      $location.path('/home');
    })
    .catch(function(error) {
      console.log('No tokennnnn', error);
    });
  }
}]);


