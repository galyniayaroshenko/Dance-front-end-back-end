angular.module('app')
  .controller('ContactViewController', ['$scope','$stateParams', 'Contact', function($scope, $stateParams, Contact) {
    console.log($stateParams.id);
    Contact.getOne({action:$stateParams.id},function(data){
      $scope.contactView = data;
        console.log($scope.contactView);
      });
  }]);
