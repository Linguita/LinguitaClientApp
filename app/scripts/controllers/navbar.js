'use strict';
/**
 * @ngdoc function
 * @name angularClient.directive:mynavbar
 * @description
 * # mynavbar
 * Directive NavBar
 */
angular.module('modNavbar', [])
    .directive('navbar',function() {
       /* var controller = ['$scope', '$location', '$route', function($scope, $location, $route) {
                $scope.navClass = function(page) {
                    var currentRoute = $location.path().substring(1).split('/')[0];
                    return page === currentRoute ? 'active' : '';
                };

                $scope.routes = [];

                angular.forEach($route.routes, function(value) {
                    if (value.navitem) {
                        var routeitem = {};
                        routeitem.path = value.originalPath;
                        routeitem.name = value.name;
                        routeitem.templateUrl = value.templateUrl;
                        routeitem.controller = value.controller;
                        $scope.routes.push(routeitem);
                    }
                });
                $scope.isCollapsed = true;
            }];
*/
            return {
                restrict: 'AE',
                //replace: true,
                //transclude: false,
                //scope: {
                //    title: '@'
                //},
                //controller: controller,
                templateUrl: 'views/navbar.html',
            };
    });
