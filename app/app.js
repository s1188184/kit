var app = angular.module('KitModule', ['ngRoute', 'ngAnimate', 'ngTouch', 'chart.js', 'ui.odometer', 'firebase'])

    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/main.html',
                controller: 'MainController',
                resolve: {
                    // controller will not be loaded until $waitForSignIn resolves
                    // Auth refers to our $firebaseAuth wrapper in the factory below
                    "currentAuth": ["Auth", function (Auth) {
                        // $waitForSignIn returns a promise so the resolve waits for it to complete
                        return Auth.$waitForSignIn();
                    }]                    
                }
            })
            .when('/data', {
                templateUrl: 'app/data.html',
                controller: 'DataController',
                controllerAs: 'data',
            })
            .when('/charts', {
                templateUrl: 'app/charts.html',
                controller: 'ChartsController',
            })
            .otherwise({
                redirectTo: '/'
            })
    })

    .factory("Auth", ["$firebaseAuth",
        function ($firebaseAuth) {
            // return $firebaseAuth();
            var auth = $firebaseAuth();

            // login with Google
            auth.$signInWithPopup("google").then(function (firebaseUser) {
                console.log("Signed in as:", firebaseUser.user.displayName);
            }).catch(function (error) {
                console.log("Authentication failed:", error);
            });
            return auth;
            
        }
    ])
    
    
    
    .service('kit', function($firebaseArray) {

        var personRides = [];

        var temp = 'tim';

       
        return {
            temp,
            personRides,
            setPersonRides: function() { 
                // 3-way bind $rootScope.personRides to firebase.
                var ref = firebase.database().ref().child("2019").child("personRides");
                personRides = $firebaseArray(ref);
            }
        };

    });