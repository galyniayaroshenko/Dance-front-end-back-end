angular.module('app')
.controller('ContactCreateController', ['Contact', '$stateParams', '$scope', '$state', 'Upload', '$timeout', 'host', '$http',
  function (Contact, $stateParams, $scope, $state, Upload, $timeout, host, $http) {
    $scope.contact = {};
    $scope.createContact = function() {
      $scope.load = "loading";
      Contact.create($scope.contact, function(data) {
        if (data) {
          $scope.load = '';
          $state.go('base.editContact', {id:data.objectId});
        }
      });
    }
}]);
