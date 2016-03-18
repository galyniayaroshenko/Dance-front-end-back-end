angular.module('app')
  .controller('YearViewController', ['$scope','$stateParams', 'Year', function($scope, $stateParams, Year) {
    Year.getOne({action:$stateParams.id},function(data){
      $scope.yearView = data;
      });
  }]);
