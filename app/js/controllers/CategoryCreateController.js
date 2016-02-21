angular.module('app')
.controller('CategoryCreateController', ['Category', '$stateParams', '$scope', '$state', 'Upload', '$timeout', 'host', '$http', function (Category, $stateParams, $scope, $state, Upload, $timeout, host, $http) {

  $scope.category = {};


  $scope.createCategory = function() {
    console.log($scope.category);
    $scope.load = "loading";
    Category.create($scope.category, function(data) {
      if (data) {
        $scope.load = '';
        console.log("success");
        $state.go('base.editCategory');
      }
    });
  }
}]);
