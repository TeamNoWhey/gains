// var Q = require('q');
var jwt = require('jwt-simple');
// var User = require('./userModel.js');
var knex = require('../db.js');

// // Promisify a few mongoose methods with the `q` promise library
// var findUser = Q.nbind(User.findOne, User);
// var createUser = Q.nbind(User.create, User);

module.exports = {
  storeWorkout: function(req, res) {
    // req.body has the stuff
    /* req.body has exercises = [
    {name: , sets: , reps: , targetWeight: , actualWeight: },
    {name: , sets: , reps: , targetWeight: , actualWeight: }
    .
    .
    .
    }]
    */

    console.log('inserting workout exercise data into workout history');
    var exercises = req.body;
    console.log('this is what is being inserted:', exercises);


    if (exercises) {
      exercises.forEach((exercise) => {
        // lookup the eid by e-name
        // have a ref to user by uid
        console.log(exercise.name); // correctly logs exercise's name
        var eid = 7;
        knex('exercises')
          .select('eid')
          .where('name', exercise.name) // if the name doesn't match db then eid will not be set properly
          .then(function(exerciseId) {
            eid = exerciseId || 7;
          });
        console.log(eid);

        // uid is hard-coded to 1 because without signup and signin, there is no user account to tie the exercise and workout data to
        knex('history')
          .insert({uid: 1, eid: eid, sets: exercise.sets, reps: exercise.reps, weight: exercise.actualWeight})
          .then(function() {
            res.status(200).end('workout exercise data was successfuly stored in workout history!');
          }); 
      });
    }
  },

  getWorkoutHistory: function(req, res) {
    // uid is hard-coded
    knex('history')
      .select('eid', 'sets', 'reps', 'weight')
      .where('uid', 1)
      .then(function(exercises) { // should return an array of exercise objects - {eid: , sets: , reps: , weight: }
        exercises.forEach((exercise) => { // replacing eid with e_name. this method seems very inefficient...find a better way later
          knex('exercises')
          .select('name')
          .where('eid', exercise.eid) // if the name doesn't match db then eid will not be set properly
          .then(function(exerciseName) { // query returns exerciseName
            console.log('name of exercise with id', exercise.eid + ':', exerciseName);
            exercise.eid = exerciseName; // right now, all exercise names will correspond to the eid of 7, i.e. cable curl
          });
        });
        console.log('array of objects with exercise data being returned to client:', exercises);        
        res.json(exercises); // could do res.json() here
      });
  },

  signup: function (req, res, next) {
    var username = req.body.username;
    var password = req.body.password;

    console.log('inside signup');
    console.log('req.body:', req.body);

    // check to see if user already exists
    knex('users')
      .select('username')
      .where('username', username)
      .then(function(user) {
        if (user.length) {
          console.log('this user', user, 'already exists');
          next(new Error('User already exist!'));
        } else {
          // make a new user if not one
          knex('users')
            .insert({username: username, password: password})
            .then(function(user) {
              console.log('created user:', user);
            })
        }
        return user;
      })
      .then(function(user) {
        console.log('giving user jwt token');
        // create token to send back for auth
        var token = jwt.encode(user, 'secret');
        res.json({token: token});
      })
      .catch(function (error) {
        next(error);
      });
  }

  // signin: function (req, res, next) {
  //   var username = req.body.username;
  //   var password = req.body.password;

  //   findUser({username: username})
  //     .then(function (user) {
  //       if (!user) {
  //         next(new Error('User does not exist'));
  //       } else {
  //         return user.comparePasswords(password)
  //           .then(function (foundUser) {
  //             if (foundUser) {
  //               var token = jwt.encode(user, 'secret');
  //               res.json({token: token});
  //             } else {
  //               return next(new Error('No user'));
  //             }
  //           });
  //       }
  //     })
  //     .fail(function (error) {
  //       next(error);
  //     });
  // },
  
};









  // checkAuth: function (req, res, next) {
  //   // checking to see if the user is authenticated
  //   // grab the token in the header is any
  //   // then decode the token, which we end up being the user object
  //   // check to see if that user exists in the database
  //   var token = req.headers['x-access-token'];
  //   if (!token) {
  //     next(new Error('No token'));
  //   } else {
  //     var user = jwt.decode(token, 'secret');
  //     findUser({username: user.username})
  //       .then(function (foundUser) {
  //         if (foundUser) {
  //           res.send(200);
  //         } else {
  //           res.send(401);
  //         }
  //       })
  //       .fail(function (error) {
  //         next(error);
  //       });
  //   }
  // }


