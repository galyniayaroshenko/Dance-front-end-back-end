angular.module('app')
  .controller('YearViewController', ['$scope','$stateParams', 'Year', function($scope, $stateParams, Year) {
    console.log($stateParams.id);
    Year.getOne({action:$stateParams.id},function(data){
      $scope.yearView = data;
        console.log($scope.yearView);
      });
  }]);
