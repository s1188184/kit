var app = angular.module('KitModule', ['ngRoute', 'ngAnimate', 'ngTouch', 'chart.js', 'ui.odometer', 'firebase'])

    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/main.html',
                controller: 'MainController'

            })
            .when('/data', {
                templateUrl: 'app/data.html',
                controller: 'DataController',
                controllerAs: 'data'
            })
            .when('/charts', {
                templateUrl: 'app/charts.html',
                controller: 'ChartsController'
            })
            .otherwise({
                redirectTo: '/'
            })
    });

