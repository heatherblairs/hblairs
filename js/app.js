angular
   .module('hstone', ['ui.router'])
   .config(config)

function config($stateProvider, $urlRouterProvider) {
 $urlRouterProvider.otherwise('/');

 $stateProvider
 .state('home', {
   url: '/',
   controller: 'mainController',
   templateUrl: 'home.html'
 }).state('home.code', {
   url: 'code',
   controller: 'mainController',
   templateUrl: 'html/code.html'
 }).state('home.illustrations', {
   url: 'illustrations',
   controller: 'mainController',
   templateUrl: 'html/illustrations.html'
 }).state('home.science', {
   url: 'science',
   controller: 'mainController',
   templateUrl: 'html/science.html'
 }).state('home.writing', {
   url: 'writing',
   controller: 'mainController',
   templateUrl: 'html/writing.html'
 })
}

angular
    .module('app')
    .directive('bsActiveLink', ['$location', function ($location) {
    return {
        restrict: 'A', //use as attribute
        replace: false,
        link: function (scope, elem) {
            //after the route has changed
            scope.$on("$routeChangeSuccess", function () {
                var hrefs = ['/#' + $location.path(),
                             '#' + $location.path(), //html5: false
                             $location.path()]; //html5: true
                angular.forEach(elem.find('a'), function (a) {
                    a = angular.element(a);
                    if (-1 !== hrefs.indexOf(a.attr('href'))) {
                        a.parent().addClass('currentPage');
                    } else {
                        a.parent().removeClass('currentPage');
                    };
                });
            });
        }
    }
}]);
