var app = angular.module ('FitnessApp', []);


app.directive('navbarShow', function () {
  return {
    restrict: 'E',
    scope: {

    },
    templateUrl: 'views/nav-bar.html'
  }
})