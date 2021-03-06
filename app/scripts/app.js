'use strict';

/**
 * @ngdoc overview
 * @name tp6App
 * @description
 * # tp6App
 *
 * Main module of the application.
 */
angular
  .module('tp6App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/Person', {
              templateUrl: 'views/person.html',
              controller: 'PersonCtrl',
              controllerAs: 'person'
            })
      .otherwise({
        redirectTo: '/'
      });
  });
