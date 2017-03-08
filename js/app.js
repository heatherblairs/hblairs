angular
   .module('hblairs', ['ui.router'])
   .config(config)

function config($stateProvider, $urlRouterProvider) {
 // $urlRouterProvider.otherwise('/home');

 $stateProvider
 .state('home', {
   url: '/',
   templateUrl: 'home.html'
 }).state('code', {
   url: 'code',
   templateUrl: 'html/code.html'
 }).state('illustrations', {
   url: 'illustrations',
   templateUrl: 'html/illustrations.html'
 }).state('science', {
   url: 'science',
   templateUrl: 'html/science.html'
 }).state('writing', {
   url: 'writing',
   templateUrl: 'html/writing.html'
 }).state('podcast', {
   url: 'podcast',
   templateUrl: 'html/podcast.html'
 })
}
