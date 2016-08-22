angular
   .module('hstone', ['ui.router'])
   .config(config)

function config($stateProvider, $urlRouterProvider) {
 $urlRouterProvider.otherwise('/');

 $stateProvider
 .state('home', {
   url: '/',
  //  controller: 'HomeController',
   templateUrl: 'home.html'
 }).state('home.code', {
   url: 'code',
  //  controller: 'CodeController',
   templateUrl: 'html/code.html'
 }).state('home.illustrations', {
   url: 'illustrations',
  //  controller: 'IllustrationsController',
   templateUrl: 'html/illustrations.html'
 }).state('home.science', {
   url: 'science',
  //  controller: 'ScienceController',
   templateUrl: 'html/science.html'
 }).state('home.writing', {
   url: 'writing',
  //  controller: 'WritingController',
   templateUrl: 'html/writing.html'
 })
}
