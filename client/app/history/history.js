var app = angular.module('History', ['masa.services']);

app.controller('HistoryCtrl', ['$scope', 'WorkoutsFac', function($scope, WorkoutsFac) {

  // fake. comment out later
  $scope.seeWorkoutHistory = function() {
    console.log('trying to see if we can get user exercise and workout data back from db');
    var history = WorkoutsFac.getWorkoutHistory();
    console.log('this is the history:', history);
  }
}]);

