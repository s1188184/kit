app.controller('DataController', ['$scope', '$rootScope', '$filter', function($scope, $rootScope, $filter) {

    this.name = 'DataController';

    $scope.pageClass = 'page-data';

    $scope.sortType = 'time';
    $scope.sortReverse = true;
    if (!$rootScope.filterTerm) {
        $rootScope.filterTerm={};
    }
    

    $scope.setFilter = function() {

        $rootScope.filteredRides = $rootScope.personRides;

        if ($rootScope.filterTerm.t) {
            $rootScope.filteredRides = $filter('filter')($rootScope.filteredRides, $rootScope.filterTerm.t);
        }
        if ($rootScope.filterTerm.d) {
            var out = [];
            angular.forEach($rootScope.filteredRides, function(ride){

                var filterMoment = moment($rootScope.filterTerm.d);
                var rideMoment = moment(ride.time);
                if (filterMoment.isSame(rideMoment, 'day')) {
                    out.push(ride);
                }
            });
            $rootScope.filteredRides = out;
        }
        if ($rootScope.filterTerm.ride) {
            $rootScope.filteredRides = $filter('filter')($rootScope.filteredRides, $rootScope.filterTerm.ride);
        }
        if ($rootScope.filterTerm.person) {
            $rootScope.filteredRides = $filter('filter')($rootScope.filteredRides, $rootScope.filterTerm.person);
        }

    };

    $scope.$watchCollection('filterTerm', function() {
       $scope.setFilter(); 
    });

    $scope.formatDate = function(strDate) {
        var myMoment = moment(strDate);
        return myMoment.format('MM/DD/YY');
    };

    $scope.formatTime = function(strDate) {
        var myMoment = moment(strDate);
        return myMoment.format('HH:mm');
    };

    $scope.filterByDate = function(strDate) {
        $rootScope.filteredRides = $filter('filter')($scope.personRides, strDate);
    };

    $scope.clearAll = function() {
        var confirmDelete = window.confirm('Are you sure you want to permanently delete all records?');
        if (confirmDelete) {
            localStorage.clear();
            $rootScope.personRides = [];
        }
    }


}]);
