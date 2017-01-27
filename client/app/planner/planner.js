var app = angular.module('Planner', []);
// var app = angular.module('Planner', ['masa.services']);

app.controller('PlannerCtrl', function($scope) {
// app.controller('PlannerCtrl', ['WorkoutsFac', function($scope, WorkoutsFac) {

  // $scope.exercises = [1,2,3];
  $scope.newExercise = {};
  $scope.exercises = [];

  // $scope.logWorkout = function() { // takes the exercises collection and sends it to a POST req, headed towards /workoutHistory
  //   console.log('$scope.exercises:', $scope.exercises);
  //   WorkoutsFac.storeWorkout($scope.exercises);
  // };


  $scope.add = function() {
    console.log('Hey add button worked!');
    $scope.exercises.push(this.newExercise);
    this.newExercise = {};
    // $scope.workouts.push
    console.log(this.exercises);

  }



// }

//   $timeout (function() {
//     console.log('timeout excercises', this.exercises);
//   }, 15000
// );


// app.factory('addWorkout', function() {
//   this.add = function () {

// }

});
