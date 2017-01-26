var app = angular.module ('FitnessApp', []);


app.directive('qotdSaying', function() {
  return {
    restrict: 'E',
    scope: {

    },
    templateUrl: 'views/qotd.html'
  };
});