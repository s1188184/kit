

// angular.module('KitModule', [])
//     .controller('KitController', function() {

var app = angular.module('KitModule', ['ngRoute', 'ngAnimate', 'ngTouch', 'chart.js', 'ui.odometer'])

    .config(function($routeProvider) {
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
            .otherwise ({
                redirectTo:'/'
            })


    })



//
//    .controller('ExportController', function($scope) {
//
//        $scope.pageClass = 'page-export';
//
//    })
//
//    .controller('ImportController', function($scope) {
//
//        $scope.pageClass = 'page-import';
//
//        // var importCtrl = this;
//
//        $scope.importPersonRides = function() {
//        
//            var personRides = [];
//        
//            // Get existing person rides from localStorage if they exist.
//            var storedEntries = localStorage.getItem('kitRides');
//            if (storedEntries && storedEntries != 'undefined') {
//                personRides = JSON.parse(storedEntries);
//            }
//        
//        
//            // Parse imported person rides JSON and push into existingPersonRides array.
//            var importText = $scope.importBlock;
//            console.log('importText: ' + importText);
//            if (importText) {
//                var newPersonRides = JSON.parse(importText);
//        
//                for (var i = 0; i < newPersonRides.length; i++) {
//                    personRides.push(newPersonRides[i]);
//                }
//        
//                var confirmed = window.confirm('Import ' + newPersonRides.length + ' new records?');
//        
//                if (confirmed) {
//                    // Save new consolidated personRides to localStorage.
//                    localStorage.setItem('kitRides', JSON.stringify(personRides));
//        
//                    alert(newPersonRides.length + " records imported.");
//        
//                    // document.getElementById('import').value = '';
//                    $scope.importBlock = '';
//                }
//            }
//            else {
//                console.log('Nothing to import.');
//            }
//        
//        };
//
//
//        $scope.specialImportPersonRides = function() {
//
//            var personRides = [];
//
//            // // Get existing person rides from localStorage if they exist.
//            // var storedEntries = localStorage.getItem('kitRides');
//            // if (storedEntries && storedEntries != 'undefined') {
//            //     personRides = JSON.parse(storedEntries);
//            // }
//
//
//            // Parse imported person rides JSON and push into existingPersonRides array.
//            var importText = $scope.importBlock;
//            console.log('importText: ' + importText);
//            if (importText) {
//                var newPersonRides = JSON.parse(importText);
//
//
//
//
//
//                for (var i = 0; i < newPersonRides.length; i++) {
//
//                    var myDate = Date.parse(newPersonRides[i].time);
//                    newPersonRides[i].time = myDate;
//
//
//                    personRides.push(newPersonRides[i]);
//                }
//
//                var confirmed = window.confirm('Import ' + newPersonRides.length + ' new records?');
//
//                if (confirmed) {
//                    // Save new consolidated personRides to localStorage.
//                    localStorage.setItem('kitRides', JSON.stringify(personRides));
//
//                    alert(newPersonRides.length + " records imported.");
//
//                    // document.getElementById('import').value = '';
//                    $scope.importBlock = '';
//                }
//            }
//            else {
//                console.log('Nothing to import.');
//            }
//
//        };
//
//
//    })


;

