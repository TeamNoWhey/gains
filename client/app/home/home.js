var app = angular.module('Home', ['masa.services']);

app.controller('HomeCtrl', ['$scope', '$http', 'AuthFact', function($scope, $http, AuthFact) {
  var apiUrl = "http://quotes.rest/qod.json?category=inspire";


  $scope.goals = [
  'Goal #1 with a checkboxxxxx after',
  'Goal #2 sjdakdjka',
  'Goal #3 jkjkljjkljijo'
  ];


  $scope.getQuote = function () {
    $http.get(apiUrl)
    .then(function(response) {
      var data = response.data.contents.quotes;
      data.forEach(function(item) {
        console.log(item);
        $scope.quote = item
      });
    })
    .catch(function(error) {
      console.log ('Error getting from Quote API', error);
    });
  }

  $scope.signout = AuthFact.signout;

}]);

