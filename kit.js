var app = angular.module('KitModule', ['ngRoute', 'ngAnimate', 'ngTouch', 'chart.js', 'ui.odometer', 'firebase'])

    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'kit.html',
                controller: 'MainController'

            })
            .when('/data', {
                templateUrl: 'data.html',
                controller: 'DataController',
                controllerAs: 'data'
            })
            .when('/import', {
                templateUrl: 'import.html',
                controller: 'ImportController'
            })
            .when('/export', {
                templateUrl: 'export.html',
                controller: 'ExportController'
            })
            .when('/charts', {
                templateUrl: 'charts.html',
                controller: 'ChartsController'
            })
            .otherwise({
                redirectTo: '/'
            })
    });

