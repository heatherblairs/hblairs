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
   templateUrl: 'code.html'
 }).state('home.illustrations', {
   url: 'illustrations',
  //  controller: 'IllustrationsController',
   templateUrl: 'illustrations.html'
 }).state('home.science', {
   url: 'science',
  //  controller: 'ScienceController',
   templateUrl: 'science.html'
 }).state('home.writing', {
   url: 'writing',
  //  controller: 'WritingController',
   templateUrl: 'writing.html'
 })
}
