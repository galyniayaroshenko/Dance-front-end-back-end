angular.module('app')
  .controller('CategoryViewController', ['$scope','$stateParams', 'Category',
    function($scope, $stateParams, Category) {
      Category.getOne({action:$stateParams.id},function(data){
        $scope.categoryView = data;
        });
  }]);
