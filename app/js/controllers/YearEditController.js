angular.module('app')
.controller('YearEditController', ['Year', '$stateParams', '$scope', '$state', 'Upload', '$timeout', 'host', '$http',
  function (Year, $stateParams, $scope, $state, Upload, $timeout, host, $http) {

  Year.getOne({action: $stateParams.id}, function(data) {
    $scope.year = data;
    console.log($scope.year);
  });


  $scope.updateYear = function() {
    $scope.load = "loading";
    Year.update({action: $stateParams.id}, $scope.year, function(data) {
      if (data) {
        $scope.load = '';
        console.log("success");
      }
    });
  }
}]);
