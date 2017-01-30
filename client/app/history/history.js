var app = angular.module('History', ['masa.services']);

// app.controller('HistoryCtrl', function() {

// });
app.controller('HistoryCtrl', ['$scope', 'WorkoutsFac', '$window', function($scope, WorkoutsFac, $window) {

  // fake. comment out later
  $scope.seeWorkoutHistory = function() { // need to get all user's exercise/workout data
    console.log('trying to see if we can get user exercise and workout data back from db');
    // var user = $window.localStorage.getItem('user');


    var history = WorkoutsFac.getWorkoutHistory();
    console.log('this is the history:', history);
  };
}]);