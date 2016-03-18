angular.module('app')
.controller('CategoryListController', ['$scope', '$state', '$window', 'Category',
  function($scope, $state, $window, Category) {
    $scope.categoryList = Category.get(function(data){
      $scope.categoryList = data.results
      });
    $scope.deleteCategory = function (arg) {
      $scope.arg = arg;
      if(confirm("Видалити?")){
      Category.delete({ action: $scope.arg.id }, function () {
        Category.get(function(data){
          $scope.categoryList = data.results;
          });
        });
      };
    };
}]);
