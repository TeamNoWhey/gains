exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('exercises', function (table) {
      table.increments('eid').primary(); // `id` int unsigned not null auto_increment primary key
      table.string('name', 255);
      table.string('muscle_group', 255);
      table.timestamps();
    }),
    knex.schema.createTable('users', function (table) {
      table.increments('uid').primary().unique(); // `id` int unsigned not null auto_increment primary key // user.increments('id').primary();
      table.string('name', 255);
      table.string('username', 255).unique();
      table.string('email', 255).unique(); // input validation should occur before insertion into the db
      table.string('password', 25);
      table.timestamps();
    }),
    knex.schema.createTable('history', function (table) { // should each user have their own individual workout-history table.
      // Otherwise, this table will become very large, causing significant performance issues
      table.increments('hid').primary();
      table.integer('uid') // make primary?
        .references('uid')
        .inTable('users');
      table.integer('eid')
        .references('eid')
        .inTable('exercises');
      table.integer('sets');
      table.string('reps'); // if array, stringify before insertion
      table.string('weight'); // if array, stringify before insertion
      table.timestamps();

    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('history'),
    knex.schema.dropTable('exercises'),
    knex.schema.dropTable('users')
  ])
};