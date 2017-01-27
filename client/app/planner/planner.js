angular.module('masa.workout', [])

.controller('WorkoutCtrl', function($scope){

  // $scope.exercises = [];
  $scope.exercisesExample = [
    {name: 'incline bench', sets: 3, reps: 12, target_weight: 185},
    {name: 'deadlift', sets: 4, reps: 8, target_weight: 225},
    {name: 'db thrusters', sets: 3, reps: 12, target_weight: 30}
  ];

  $scope.addExercise = function(passInFormInputs) {
    $scope.exercises.push({'id':'choice'+newItemNo});
  };





});
