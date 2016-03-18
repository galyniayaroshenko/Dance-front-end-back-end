angular.module('app')
.controller('PeopleEffortListController', ['$scope', '$state', '$window', 'PeopleEffort', '$sce',
    function($scope, $state, $window, PeopleEffort, $sce) {
    $scope.peopleEffortList = PeopleEffort.get(function(data){
      $scope.peopleEffortList = data.results
      });
    $scope.deletePeopleEffort = function (arg) {
      $scope.arg = arg;
      console.log($scope.arg.id);
      if(confirm("Видалити?")){
      PeopleEffort.delete({ action: $scope.arg.id }, function () {
        PeopleEffort.get(function(data){
          $scope.peopleEffortList = data.results;
        });
      });
    };
  };
}]);
