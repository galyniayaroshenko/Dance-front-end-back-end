angular.module('app')
  .controller('ContactViewController', ['$scope','$stateParams', 'Contact',
      function($scope, $stateParams, Contact) {
        Contact.getOne({action:$stateParams.id},function(data){
          $scope.contactView = data;
          });
  }]);
