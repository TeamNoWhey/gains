var app = angular.module ('FitnessApp', []);

app.directive('goalsInfo', function() {
  return {
    restrict: 'E',
    scope: {
    },
    templateUrl: 'views/goals.html',
  };
});