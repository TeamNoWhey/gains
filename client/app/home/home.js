var app = angular.module('Home', []);

app.controller('HomeCtrl', function($scope, $http) {
  var apiUrl = "http://quotes.rest/qod.json?category=inspire";


  $scope.goals = [
  'Goal #1 with a checkboxxxxx after',
  'Goal #2 sjdakdjka',
  'Goal #3 jkjkljjkljijo'
  ];
  $scope.message = 'Everyone see this please';


  $scope.getQuote = function () {
    $http.get(apiUrl)
    .then(function(response) {
      var data = response.data.contents.quotes;
      data.forEach(function(item) {
        console.log(item);
        $scope.quote = item
      });
    });
  }

  // $scope.quote = QuoteCall.quote;

});


// app.factory = ('QuoteCall', ['$http', function($http) {
//   var quote = 'Some quote';
//   var apiUrl = "http://quotes.rest/qod.json?category=inspire";

//   // $http({
//   //   method: "GET",
//   //   url: "http://quotes.rest/qod.json?category=inspire"
//   // }).then(function success(response) {
//   //   console.log('Success data: ', response.data);
//   //   quote = response.data;
//   // }, function error(response) {
//   //   console.log('Error data: ', response.statusText);

//   //   quote = response.statusText;
//   // });
// var getQuote = function () {
//   return $http.get(apiUrl);
// };
//   return quote;
// });