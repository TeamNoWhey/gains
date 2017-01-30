var app = angular.module('Home', ['masa.services']);

app.controller('HomeCtrl', ['$scope', '$http', 'AuthFact', function($scope, $http, AuthFact) {
  var apiUrl = "http://quotes.rest/qod.json?category=inspire";


  $scope.goals = [

  //Make this dynamic at some point and store goals
  'Goal #1: is to make this dynamic',
  'Goal #2: where you can check checkboxes',
  'Goal #3: but for now we\'ll leave it static',
  'Goal #4: because MVP and this isn\'t important.'
  ];


  $scope.getQuote = function () {
    $http.get(apiUrl)
    .then(function(response) {
      var data = response.data.contents.quotes;
      data.forEach(function(item) {
        $scope.quote = item
      });
    })
    .catch(function(error) {
      console.log ('Error getting from Quote API', error);
    });
  }

  $scope.signout = AuthFact.signout;

}]);

