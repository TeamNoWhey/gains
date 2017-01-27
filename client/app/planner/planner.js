var app = angular.module('Planner', []);
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

// app.factory('addWorkout', function() {
//   this.add = function () {

// }


});
