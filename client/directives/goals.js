var app = angular.module ('FitnessApp', []);

app.directive('goalsInfo', function() {
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'views/goals.html'
  };
});