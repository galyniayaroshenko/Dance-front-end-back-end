angular.module('app')
.controller('CategoryListController', ['$scope', '$state', '$window', 'Category', function($scope, $state, $window, Category) {
  $scope.categoryList = Category.get(function(data){
    $scope.categoryList = data.results
    });
console.log($scope.categoryList);

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
