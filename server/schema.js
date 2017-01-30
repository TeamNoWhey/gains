var db = require('./db.js');

db.knex.schema.createTable('users', function (table) {
  table.increments().primary(); // `id` int unsigned not null auto_increment primary key // user.increments('id').primary();
  table.string('first_name', 255);
  table.string('last_name', 255);
  table.string('username', 255).unique();
  table.string('email', 255); // input validation should occur before indertion into the db
  table.string('password', 25);
  table.timestamps();
});  

db.knex.schema.createTable('userinfo', function (table) {
  table.increments(); // foreign key, must link to specific user
  table.string('sex');
  table.integer('age');
  table.integer('weight');
  table.integer('height'); // inches or centimeters, or both?
  table.decimal('fat');
  table.integer('wt_goal');
  table.decimal('fat_goal');
  table.integer('caloric_limit');
  table.string('goal');
  table.integer('max_squat');
  table.integer('max_bench');
  table.integer('max_deadlift');
  table.timestamps();
});

db.knex.schema.createTable('exercises', function (table) {
  table.increments(); // `id` int unsigned not null auto_increment primary key
  table.string('name', 255);
  table.string('muscle_group', 255);
  table.timestamps();
});  

db.knex.schema.createTable('history', function (table) { // should each user have their own individual workout-history table.
  // Otherwise, this table will become very large, causing significant performance issues
  table.increments(); // foreign key for user
  table.string('name', 255); // foreign key for exercise name
  table.string('muscle-group', 255); // foreign key for exercise muscle group
  table.integer('sets');
  table.integer('reps');
  table.json('weight'); // weight lifted on each set
  /*
  when setting an array (or a value that could be an array) as the value of a json or jsonb column, you should use JSON.stringify() to convert your value to a string prior to passing it to the query builder, e.g.

  knex.table('users')
  .where({id: 1})
  .update({json_data: JSON.stringify(mightBeAnArray)});

  */
  table.timestamps();
});  

// open connection to pg, connect app to pg db, check to see if schemas are there