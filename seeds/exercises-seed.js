var exercises = require('../exercises-data.js'); // array with object representing exercises and their corresponding muscle groups


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('exercises').del()
    .then(function () {
      let exercisesInsertions = [];

      for (let i = 0; i < exercises.length; i++) {
        exercisesInsertions.push(createExercise(knex, exercises[i]));
      }
      // let exercisesInsertions = exercises.forEach(exercise => createExercise(knex, exercise));
      return Promise.all(exercisesInsertions);
    });
    // .then(function(eI) {
    //   return Promise.all(eI);
    //       // [knex('exercises').insert({name: 'incline bench', muscle_group: 'chest'})]
    // })
};

let createExercise = (knex, exercise) => {
  return knex('exercises').insert({
    name: exercise.name,
    muscle_group: exercise.muscle_group,
    created_at: new Date(),
    updated_at: new Date()
  })
}




// function createExercise(knex, user) {
//   return knex.table('users')
//     .returning('id')
//     .insert(
//     {
//       email: user.email,
//       password: user.password, // hash for 123456
//       role: user.role,
//       type: user.type,
//       active: user.active
//     }
//   )
//     .then(function(userIds){
//       return knex('profiles')
//         .insert(
//         {
//           firstname: user.Profile.firstname,
//           lastname: user.Profile.lastname,
//           address1: user.Profile.address1,
//           city: user.Profile.city,
//           user_id: userIds[0],
//           country_code: user.Profile.country_code,
//           phone: user.Profile.phone
//         }
//       );
//     });
// }

