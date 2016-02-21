angular.module('app')
.controller('ContactCreateController', ['Contact', '$stateParams', '$scope', '$state', 'Upload', '$timeout', 'host', '$http', function (Contact, $stateParams, $scope, $state, Upload, $timeout, host, $http) {

  $scope.contact = {};


  $scope.createContact = function() {
    console.log($scope.contact);
    $scope.load = "loading";
    Contact.create($scope.contact, function(data) {
      if (data) {
        $scope.load = '';
        console.log("success");
        $state.go('base.editContact');
      }
    });
  }
}]);
