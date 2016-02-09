angular.module('app')
.controller('CategoryEditController', ['Category', '$stateParams', '$scope', '$state', 'Upload', '$timeout', 'host', '$http', function (Category, $stateParams, $scope, $state, Upload, $timeout, host, $http) {

  Category.getOne({action: $stateParams.id}, function(data) {
    $scope.category = data;
    console.log($scope.category);
  });


  $scope.updateCategory = function() {
    $scope.load = "loading";
    Category.update({action: $stateParams.id}, $scope.category, function(data) {
      if (data) {
        $scope.load = '';
        console.log("success");
      }
    });
  }
}]);
