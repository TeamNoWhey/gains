exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('exercises', function (table) {
      table.increments(); // `id` int unsigned not null auto_increment primary key
      table.string('name', 255);
      table.string('muscle_group', 255);
      table.timestamps();
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('exercises')
  ])
};

// exports.up = function(knex, Promise) {
//   return Promise.all([
//     knex.schema.createTable('users', function (table) {
//       table.increments(); // `id` int unsigned not null auto_increment primary key // user.increments('id').primary();
//       table.string('name', 255);
//       table.string('username', 255).unique();
//       table.string('email', 255); // input validation should occur before indertion into the db
//       table.string('password', 25);
//       table.timestamps();
//     });  
//   ])
// };

// exports.down = function(knex, Promise) {
//   return Promise.all([
//     knex.schema.dropTable('users');
//   ])
// };