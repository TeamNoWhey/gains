// Depending on how you want to import the listofworkouttypes into this file, through query or brute force copy paste use the var
// at line64

(function () {
  'use strict';

// **** Import list of workout types ****
var workoutList = require('./listofworkouttypes.js');

  angular
      .module('MyApp',['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
      .controller('DemoCtrl', DemoCtrl);

  function DemoCtrl ($timeout, $q, $log) {
    var self = this;

    self.simulateQuery = false;
    self.isDisabled    = false;

    // list of `state` value/display objects
    self.workouts        = loadAll();
    self.querySearch   = querySearch;
    self.selectedItemChange = selectedItemChange;
    self.searchTextChange   = searchTextChange;

    self.newState = newState;

    function newState(workout) {
      alert("This is a test message " + workout + " done testing");
    }

    // ******************************
    // Internal methods
    // ******************************

    /**
     * Search for workouts... use $timeout to simulate
     * remote dataservice call.
     */
    function querySearch (query) {
      var results = query ? self.workouts.filter( createFilterFor(query) ) : self.workouts,
          deferred;
      if (self.simulateQuery) {
        deferred = $q.defer();
        $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
        return deferred.promise;
      } else {
        return results;
      }
    }

    function searchTextChange(text) {
      $log.info('Text changed to ' + text);
    }

    function selectedItemChange(item) {
      $log.info('Item changed to ' + JSON.stringify(item));
    }

    /**
     * Build `workouts` list of key/value pairs
     */
    function loadAll() {
      var workouts = workoutList;

      return workouts.split(/, +/g).map( function (workout) {
        return {
          value: workout.toLowerCase(),
          display: workout
        };
      });
    }

    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);

      return function filterFn(workout) {
        return (workout.value.indexOf(lowercaseQuery) === 0);
      };

    }
  }
})();