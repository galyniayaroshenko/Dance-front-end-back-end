angular.module('app')
.controller('CategoryCreateController', ['Category', '$stateParams', '$scope', '$state', 'Upload', '$timeout', 'host', '$http',
  function (Category, $stateParams, $scope, $state, Upload, $timeout, host, $http) {
    $scope.category = {};
    $scope.createCategory = function() {
      $scope.load = "loading";
      Category.create($scope.category, function(data) {
        if (data) {
          $scope.load = '';
          $state.go('base.editCategory', {id:data.objectId});
        }
      });
    }
}]);
