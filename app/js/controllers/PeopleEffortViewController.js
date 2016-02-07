angular.module('app')
  .controller('PeopleEffortViewController', ['$scope','$stateParams', 'PeopleEffort', function($scope, $stateParams, PeopleEffort) {
    console.log($stateParams.id);
    PeopleEffort.get({action:$stateParams.id},function(data){
      $scope.peopleEffortView = data;
        console.log($scope.peopleEffortView);
      });
  }]);
