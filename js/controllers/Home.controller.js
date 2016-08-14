angular
   .module('hstone')
   .controller('HomeController', HomeController);

 function HomeController($scope, $state) {
   $scope.getResults = function () {
     $state.go('home.movies', {
       movie: $scope.searchResults
     });
   }
 }
