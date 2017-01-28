var app = angular.module('Planner', []);
// var app = angular.module('Planner', ['masa.services']);

app.controller('PlannerCtrl', function($scope, $http){


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

  //Takes exercises array and sends post with data to server
  $scope.logWorkouts = function() {
    console.log('Hey log workout button works!');
    console.log('This.exercises inside logWorkouts: ', this.exercises);

    $http.post('/api/exercises', this.exercises)
    .then(function(success, error) {
      if (error) {
        console.log('Error posting to /api/exercises', error);
      } else {
        console.log('Success?!', success);
      }
    });
  }

});
