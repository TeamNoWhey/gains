var app = angular.module ('FitnessApp');

app.directive('goalsInfo', function() {
  return {
    restrict: 'E',
    scope: {
      goal: '='
    },
    templateUrl: 'views/goals.html',
  };
});