exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('exercises', function (table) {
      table.increments('eid'); // `id` int unsigned not null auto_increment primary key
      table.string('name', 255);
      table.string('muscle_group', 255);
      table.timestamps();
    }),
    knex.schema.createTable('users', function (table) {
      table.increments('uid'); // `id` int unsigned not null auto_increment primary key // user.increments('id').primary();
      table.string('name', 255);
      table.string('username', 255).unique();
      table.string('email', 255); // input validation should occur before insertion into the db
      table.string('password', 25);
      table.timestamps();
    }),
    knex.schema.createTable('history', function (table) { // should each user have their own individual workout-history table.
      // Otherwise, this table will become very large, causing significant performance issues
      table.integer('uid')
        .references('uid')
        .inTable('users');
      table.integer('eid')
        .references('eid')
        .inTable('exercises');
      table.integer('sets');
      table.integer('reps'); // if array, stringify before insertion
      table.string('weight'); // if array, stringify before insertion
      table.timestamps();

      /*
      when setting an array (or a value that could be an array) as the value of a json or jsonb column, you should use JSON.stringify() to convert your value to a string prior to passing it to the query builder, e.g.

      knex.table('users')
      .where({id: 1})
      .update({json_data: JSON.stringify(mightBeAnArray)});

      */
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('exercises'),
    knex.schema.dropTable('users'),
    knex.schema.dropTable('history')
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