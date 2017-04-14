app.controller('ChartsController', ['$scope', '$rootScope', '$http', function($scope, $rootScope, $http) {

    $scope.pageClass = 'page-charts';
    
    
    if (!$rootScope.personRides || $rootScope.personRides.length==0) {
        $http.get('https://kings-island-tracker.firebaseio.com/personRides.json')
        .then(function(response) {
            $rootScope.personRides = response.data;
            $rootScope.filteredRides = $rootScope.personRides;
            process();
        });
    }
    else {
        process();
    }

    
    function process() {

        $scope.costPerRide = (500/$rootScope.personRides.length).toFixed(2);

        var rideCounts = {};
        var personCounts = {};

        var visits = {
            days:[],
            persons:{}
        }
        
        

        for (var i=0; i < $rootScope.filteredRides.length; i++) {
            var ride = $rootScope.filteredRides[i].ride;
            var person = $rootScope.filteredRides[i].person;
            var visitDay = moment($rootScope.filteredRides[i].time).format('MM/DD/YY');


            rideCounts[ride] = rideCounts[ride] ? rideCounts[ride]+1 : 1;
            personCounts[person] = personCounts[person] ? personCounts[person]+1 : 1;

            // Add visit to days if it doesn't already exist.
            if (visits.days.indexOf(visitDay) < 0) {
                visits.days.push(visitDay);
            }


            if (!visits.persons[person]) {
                visits.persons[person] = {};
            }
            if (!visits.persons[person][visitDay]) {
                visits.persons[person][visitDay] = 0;
            }

            visits.persons[person][visitDay] = visits.persons[person][visitDay] + 1;

        }


        var sortedRideCounts = [];
        for (var r in rideCounts) {
            sortedRideCounts.push([r, rideCounts[r]]);
        }
        sortedRideCounts.sort(function(a, b) {
            return b[1] - a[1];
        });


        var sortedPersonCounts = [];
        for (var p in personCounts) {
            sortedPersonCounts.push([p, personCounts[p]]);
        }
        sortedPersonCounts.sort(function(a, b) {
            return b[1] - a[1];
        });


        // function getSeries(sortedRides, maxLength) {
        function getSortedData(sortedData, index, maxLength) {
            var arr = [];
            if (maxLength) {
                maxLength = (maxLength < sortedData.length) ? maxLength : sortedData.length;
            }
            else {
                maxLength = sortedData.length;
            }

            for (var i = 0; i < maxLength; i++) {
                arr.push(sortedData[i][index]);
            }
            return arr;
        }


        Chart.defaults.global.colors=['#0d87e9', '#439a46', '#862197', '#e08600', '#cb171e','#aaaaaa'];




        $scope.ridePopularityLabels = getSortedData(sortedRideCounts, 0, 5);
        $scope.ridePopularitySeries = ['Rides'];
        $scope.ridePopularityData = [getSortedData(sortedRideCounts, 1, 5)];
        $scope.ridePopularityOptions = {
            legend: {
                display: false, 
                position: 'bottom'
            },
            scales: {
                xAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        };



        
        $scope.ridePopularityPieLabels = getSortedData(sortedRideCounts, 0, 10);
        $scope.ridePopularityPieData = getSortedData(sortedRideCounts, 1, 10);
        
        



        $scope.riderScoreboardLabels = getSortedData(sortedPersonCounts, 0);
        $scope.riderScoreboardSeries = ['Rides'];
        $scope.riderScoreboardData = [getSortedData(sortedPersonCounts, 1)];
        $scope.riderScoreboardOptions = {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        };
        $scope.riderScoreboardColors = ['#439a46'];





        var visitPersonRidesData = [];
        var visitPersonRidesSeries = [];
        var persons = [];
        for (var key in visits.persons) {
            
            visitPersonRidesSeries.push(key);
            
            persons.push(visits.persons[key]);


            var temp = [];
            for (var key2 in visits.persons[key]) {
                temp.push(visits.persons[key][key2]);
            }
            visitPersonRidesData.push(temp);
        }






        $scope.visitPersonRidesLabels = visits.days;
        $scope.visitPersonRidesSeries = visitPersonRidesSeries;
        $scope.visitPersonRidesData = visitPersonRidesData;
        $scope.visitPersonRidesOptions = {
            legend: {
                display: true, 
                position: 'bottom'
            },
            scales: {
                xAxes: [{
                    stacked: true
                }],
                yAxes: [{
                    stacked: true
                }]
            }
        };
    
    } // end of process()




}]);