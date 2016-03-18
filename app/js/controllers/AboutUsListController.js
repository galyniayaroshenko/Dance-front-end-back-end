angular.module('app')
.controller('AboutUsListController', ['$scope', '$state', '$window', 'AboutUs',
  function($scope, $state, $window, AboutUs) {
  $scope.aboutUsList = AboutUs.get(function(data){
    $scope.aboutUsList = data.results
    });
  $scope.deleteAboutUs = function (arg) {
    $scope.arg = arg;
    if(confirm("Видалити?")){
    AboutUs.delete({ action: $scope.arg.id }, function () {
      AboutUs.get(function(data){
        $scope.aboutUsList = data.results;
      });
    });
  };
  };
}]);
