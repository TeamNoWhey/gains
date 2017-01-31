var app = angular.module('Planner', ['masa.services']);

app.controller('PlannerCtrl', ['$scope', 'WorkoutsFac', '$window', function($scope, WorkoutsFac, $window) {
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
    var user = $window.localStorage.getItem('user');
    console.log('user found before sending data to server:', user);
    var data = {exercises: $scope.exercises, user: user};
    WorkoutsFac.storeWorkout(data);
  };

  // fake. comment out later
  $scope.seeWorkoutHistory = function() {
    console.log('trying to see if we can get user exercise and workout data back from db');
    var user = $window.localStorage.getItem('user');
    var history = WorkoutsFac.getWorkoutHistory(user);
    console.log('this is the history:', history);
  }
}]);
