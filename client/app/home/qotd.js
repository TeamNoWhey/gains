//Quote of the Day API Call

var app = angular.module('Home', []);

app.service = ('QuoteCall', function($scope, $http) {
  $http({
    method: "GET",
    url: "http://quotes.rest/qod.json?category=inspire"
  }).then(function success(response) {
    $scope.quote = response.data;
  }, function error(response) {
    $scope.quote = response.statusText;
  });
});

// app.factory('qotdCall', )