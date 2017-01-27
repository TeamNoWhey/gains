var app = angular.module('Planner', []);

/*
This will me our controller for our html templates for the
/planworkout route
*/

app.controller('PlannerCtrl', function($scope){


  // $scope.exercises = [1,2,3];
  $scope.newExercise = {};
  $scope.exercises = [];

  $scope.add = function() {
    console.log('Hey add button worked!');
    $scope.exercises.push(this.newExercise);
    this.newExercise = {};
    // $scope.workouts.push
    console.log(this.exercises);

  }


//   $timeout (function() {
//     console.log('timeout excercises', this.exercises);
//   }, 15000
// );


// app.factory('addWorkout', function() {
//   this.add = function () {

// }

});