angular.module('app')
  .controller('PeopleEffortViewController', ['$scope','$stateParams', 'PeopleEffort',
      function($scope, $stateParams, PeopleEffort) {
      PeopleEffort.get({action:$stateParams.id},function(data){
        $scope.peopleEffortView = data;
        });
  }]);
