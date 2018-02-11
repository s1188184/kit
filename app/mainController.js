app.controller('MainController', ['$scope', '$rootScope', '$http', '$firebaseObject', '$firebaseArray', 'Auth',  
function($scope, $rootScope, $http, $firebaseObject, $firebaseArray, Auth) {


    var kit = this;

    $scope.pageClass = 'page-kit';




    getDistance = function(myLat, myLon, rideLat, rideLon) {
        if (!myLat || !myLon) {
            return 0;
        }
        var x = myLat-rideLat;
        var y = myLon-rideLon;
        var d = Math.sqrt(x*x + y*y);
        return d;
    }


    kit.rides = [];

    $rootScope.personRides = [];


    kit.currentRiderCount = 0;




    kit.init = function() {

        // 3-way bind $rootScope.personRides to firebase.
        var ref = firebase.database().ref().child("2018").child("personRides");
        $rootScope.personRides = $firebaseArray(ref);


        kit.updateLocation();

    };


    kit.updateLocation = function() {
        console.log("Updating location...");
        kit.initRides();
        console.log("Loaded rides without location.");
    }


    kit.initRides = function(myLat, myLon) {
        kit.rides = [
            {name: 'Boo Blasters', distance: getDistance(myLat, myLon, 39.342698, -84.268737)},
            {name: 'Character Carousel', distance: getDistance(myLat, myLon, 39.342698, -84.268737)},
            {name: 'Charlie Brown\'s Wind Up', distance: getDistance(myLat, myLon, 39.343267, -84.268870)},
            {name: 'Flying Ace Arial Chase', distance: getDistance(myLat, myLon, 39.341797, -84.269087)},
            {name: 'Great Pumpkin Coaster', distance: getDistance(myLat, myLon, 39.342921, -84.268409)},
            {name: 'Joe Cool\'s Dodgem School', distance: getDistance(myLat, myLon, 39.343185, -84.269087)},
            {name: 'Kite Eating Tree', distance: getDistance(myLat, myLon, 39.342207, -84.269229)},
            {name: 'Linus\' Beetle Bugs', distance: getDistance(myLat, myLon, 39.342185, -84.269943)},
            {name: 'Linus\' Launcher', distance: getDistance(myLat, myLon, 39.341950, -84.268559)},
            {name: 'Peanuts 500', distance: getDistance(myLat, myLon, 39.342788, -84.269549)},
            {name: 'Peanuts Off Road Rally', distance: getDistance(myLat, myLon, 39.342572, -84.270132)},
            {name: 'Race For Your Life Charlie Brown', distance: getDistance(myLat, myLon, 39.341542, -84.268472)},
            {name: 'Sally\'s Sea Plane', distance: getDistance(myLat, myLon, 39.342188, -84.268904)},
            {name: 'Snoopy\'s Junction', distance: getDistance(myLat, myLon, 39.342315, -84.270042)},
            {name: 'Snoopy vs Red Barron', distance: getDistance(myLat, myLon, 39.342800, -84.269145)},
            {name: 'Snoopy\'s Space Buggies', distance: getDistance(myLat, myLon, 39.342285, -84.269369)},
            {name: 'Surf Dog', distance: getDistance(myLat, myLon, 39.342285, -84.269751)},
            {name: 'Woodstock Express', distance: getDistance(myLat, myLon, 39.342987, -84.269668)},
            {name: 'Woodstock Gliders', distance: getDistance(myLat, myLon, 39.342098, -84.269419)},
            {name: 'Woodstock\'s Whirlybirds', distance: getDistance(myLat, myLon, 39.342677, -84.269185)},

            {name: 'Adventure Express', distance: getDistance(myLat, myLon, 39.344446, -84.264897)},
            {name: 'Backlot Stunt Coaster', distance: getDistance(myLat, myLon, 39.341919, -84.265930)},
            {name: 'Banshee', distance: getDistance(myLat, myLon, 39.345607, -84.265455)},
            {name: 'Bat', distance: getDistance(myLat, myLon, 0, 0)},
            {name: 'Beast', distance: getDistance(myLat, myLon, 39.340178, -84.266031)},
            {name: 'Congo Falls', distance: getDistance(myLat, myLon, 39.346119, -84.266946)},
            {name: 'Delirium', distance: getDistance(myLat, myLon, 0, 0)},
            {name: 'Diamondback', distance: getDistance(myLat, myLon, 39.342095, -84.267469)},
            {name: 'Dinosaurs Alive', distance: getDistance(myLat, myLon, 39.341162, -84.263155)},
            {name: 'Dodgem', distance: getDistance(myLat, myLon, 39.342627, -84.265356)},
            {name: 'Drop Tower', distance: getDistance(myLat, myLon, 0, 0)},
            {name: 'Eiffel Tower', distance: getDistance(myLat, myLon, 39.343308, -84.266937)},
            {name: 'Firehawk', distance: getDistance(myLat, myLon, 0, 0)},
            {name: 'Flight of Fear', distance: getDistance(myLat, myLon, 0, 0)},
            {name: 'Grand Carousel', distance: getDistance(myLat, myLon, 39.343220, -84.266148)},
            {name: 'Invertigo', distance: getDistance(myLat, myLon, 0, 0)},
            {name: 'K.I. and Miami Valley Railroad', distance: getDistance(myLat, myLon, 39.340925, -84.267922)},
            {name: 'Monster', distance: getDistance(myLat, myLon, 39.343357, -84.264792)},
            {name: 'Mystic Timbers', distance: getDistance(myLat, myLon, 39.343357, -84.264792)},
            {name: 'Racer', distance: getDistance(myLat, myLon, 39.343644, -84.264703)},
            {name: 'Scrambler', distance: getDistance(myLat, myLon, 39.343119, -84.265431)},
            {name: 'Shake, Rattle, and Roll', distance: getDistance(myLat, myLon, 39.341196, -84.264712)},
            {name: 'Vortex', distance: getDistance(myLat, myLon, 39.340721, -84.264212)},
            {name: 'Viking Fury', distance: getDistance(myLat, myLon, 39.344127, -84.266615)},
            {name: 'White Water Canyon', distance: getDistance(myLat, myLon, 0, 0)},
            {name: 'WindSeeker', distance: getDistance(myLat, myLon, 0, 0)},
            {name: 'Zephyr', distance: getDistance(myLat, myLon, 39.342356, -84.264593)}
        ];
    }



    kit.enterRide = function() {

        var submitter = Auth.$getAuth().displayName;
        var rightNow = firebase.database.ServerValue.TIMESTAMP;

        if (kit.T) {
            $rootScope.personRides.$add({person: 'Tim', ride: kit.ride, time: rightNow, submitter: submitter});
        }
        if (kit.J) {
            $rootScope.personRides.$add({person: 'Jenny', ride: kit.ride, time: rightNow, submitter: submitter});
        }
        if (kit.A) {
            $rootScope.personRides.$add({person: 'Ally', ride: kit.ride, time: rightNow, submitter: submitter});
        }
        if (kit.R) {
            $rootScope.personRides.$add({person: 'Ryan', ride: kit.ride, time: rightNow, submitter: submitter});
        }
        if (kit.L) {
            $rootScope.personRides.$add({person: 'Logan', ride: kit.ride, time: rightNow, submitter: submitter});
        }
        if (kit.N) {
            $rootScope.personRides.$add({person: 'Nolan', ride: kit.ride, time: rightNow, submitter: submitter});
        }

        kit.resetForm();
    };


    kit.resetForm = function() {
        kit.T = false;
        kit.J = false;
        kit.A = false;
        kit.R = false;
        kit.L = false;
        kit.N = false;
    };


    kit.openModal = function() {
        kit.currentRiderCount = document.querySelectorAll('input[type="checkbox"]:checked').length;
        $('#myModal').modal();
    };


    // initialize kit
    kit.init();


}]);
