angular
   .module('hstone', ['ui.router'])
   .config(config)

function config($stateProvider, $urlRouterProvider) {
 $urlRouterProvider.otherwise('/');

 $stateProvider
 .state('home', {
   url: '/',
   templateUrl: 'home.html'
 }).state('home.code', {
   url: 'code',
   templateUrl: 'html/code.html'
 }).state('home.illustrations', {
   url: 'illustrations',
   templateUrl: 'html/illustrations.html'
 }).state('home.science', {
   url: 'science',
   templateUrl: 'html/science.html'
 }).state('home.writing', {
   url: 'writing',
   templateUrl: 'html/writing.html'
 })
}
