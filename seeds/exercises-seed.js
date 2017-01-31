var exercises = require('../exercises-data.js'); // array with object representing exercises and their corresponding muscle groups


exports.seed = function(knex, Promise) {
  return knex('exercises').del()
    .then(function () {
      let exercisesInsertions = [];

      for (let i = 0; i < exercises.length; i++) {
        exercisesInsertions.push(createExercise(knex, exercises[i]));
      }
      return Promise.all(exercisesInsertions);
    });
};

let createExercise = (knex, exercise) => {
  return knex('exercises').insert({
    name: exercise.name,
    muscle_group: exercise.muscle_group,
    created_at: new Date(),
    updated_at: new Date()
  })
}