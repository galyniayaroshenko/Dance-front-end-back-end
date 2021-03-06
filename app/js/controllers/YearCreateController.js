angular.module('app')
.controller('YearCreateController', ['Year', '$stateParams', '$scope', '$state', 'Upload', '$timeout', 'host', '$http',
  function (Year, $stateParams, $scope, $state, Upload, $timeout, host, $http) {
    $scope.year = {};
    $scope.createYear = function() {
      $scope.load = "loading";
      Year.create($scope.year, function(data) {
        if (data) {
          $scope.load = '';
          $state.go('base.editYear', {id:data.objectId});
        }
      });
  }
}]);
