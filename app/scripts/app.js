'use strict';

/**
 * @ngdoc overview
 * @name angularClient
 * @description
 * # angularClient
 *
 * Main module of the application.
 */
angular
    .module('angularClient', [
        'ngAnimate',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'modNavbar'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'views/home.html',
                navitem: true,
                controller: false,
                name: 'home'
            })
/*            .when('/feature', {
                templateUrl: 'views/features.html',
                controller: false,
                name: 'feature',
                navitem: true
            })
            .when('/more', {
                templateUrl: 'views/more.html',
                controller: false,
                name: 'more',
                navitem: true
            })*/
            .otherwise({
                redirectTo: '/home'
            });
    });
