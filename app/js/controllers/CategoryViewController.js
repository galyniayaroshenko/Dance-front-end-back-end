angular.module('app')
  .controller('CategoryViewController', ['$scope','$stateParams', 'Category', function($scope, $stateParams, Category) {
    console.log($stateParams.id);
    Category.getOne({action:$stateParams.id},function(data){
      $scope.categoryView = data;
        console.log($scope.categoryView);
      });
  }]);
