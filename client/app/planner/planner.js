var app = angular.module('Planner', ['masa.services']);

app.controller('PlannerCtrl', ['$scope', 'WorkoutsFac', function($scope, WorkoutsFac) {
  $scope.newExercise = {};
  $scope.exercises = [];

  $scope.add = function() {
    console.log('adding new exercise to the workout plan');
    console.log('this is the new exercise:', $scope.newExercise);
    $scope.exercises.push($scope.newExercise);
    console.log('exercises in workout plan:', $scope.exercises);
    $scope.newExercise = {};
  };

  $scope.logWorkout = function() { // takes the exercises collection and sends it to a POST req, headed towards /workoutHistory
    console.log('about to send exercise data from workout to the server');
    console.log('this is the exercise data:', $scope.exercises);
    WorkoutsFac.storeWorkout($scope.exercises);
  };

  // fake. comment out later
  $scope.seeWorkoutHistory = function() {
    console.log('trying to see if we can get user exercise and workout data back from db');
    var history = WorkoutsFac.getWorkoutHistory();
    console.log('this is the history:', history);
  }
}]);
