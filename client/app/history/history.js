var app = angular.module('History', ['masa.services']);

  // fake. comment out later
  $scope.seeWorkoutHistory = function() { // need to get all user's exercise/workout data
    console.log('trying to see if we can get user exercise and workout data back from db');


    var history = WorkoutsFac.getWorkoutHistory();
    console.log('this is the history:', history);
  };
}]);