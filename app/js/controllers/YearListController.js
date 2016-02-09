angular.module('app')
.controller('YearListController', ['$scope', '$state', '$window', 'Year', function($scope, $state, $window, Year) {
  $scope.yearList = Year.get(function(data){
    $scope.yearList = data.results
    console.log('y', $scope.yearList);
    });
console.log($scope.yearList);

  $scope.deleteYear = function (arg) {
    $scope.arg = arg;
    if(confirm("Видалити?")){
    Year.delete({ action: $scope.arg.id }, function () {
      Year.get(function(data){
        $scope.yearList = data.results;
      });
    });
  };
  };

}]);