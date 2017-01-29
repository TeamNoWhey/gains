// var Q = require('q');
// var jwt = require('jwt-simple');
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

    console.log('trying to insert workout exercise data into workout history');
    console.log('this is what we are trying to insert:', req.body);

    var exercises = req.body;

    if (exercises) {
      exercises.forEach((exercise) => {
      // lookup the eid by e-name
      // have a ref to user by uid
        var eid = 7;
        // knex('exercises').select('eid').where('name', exercise.name) || 7;
        console.log(eid);

        // uid is hard-coded to 1 because without signup and signin, there is no user account to tie the exercise and workout data to
        knex('history')
          .insert({uid: 1, eid: eid, sets: exercise.sets, reps: exercise.reps, weight: exercise.actualWeight})
          .then(function() {
            res.status(200).end('workout exercise data was successfuly stored in workout history!');
          }); 
      });
    }
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

  // signup: function (req, res, next) {
  //   var username = req.body.username;
  //   var password = req.body.password;

  //   // check to see if user already exists
  //   findUser({username: username})
  //     .then(function (user) {
  //       if (user) {
  //         next(new Error('User already exist!'));
  //       } else {
  //         // make a new user if not one
  //         return createUser({
  //           username: username,
  //           password: password
  //         });
  //       }
  //     })
  //     .then(function (user) {
  //       // create token to send back for auth
  //       var token = jwt.encode(user, 'secret');
  //       res.json({token: token});
  //     })
  //     .fail(function (error) {
  //       next(error);
  //     });
  // },

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
};
