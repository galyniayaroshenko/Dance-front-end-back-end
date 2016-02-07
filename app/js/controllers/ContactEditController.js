angular.module('app')
.controller('ContactEditController', ['Contact', '$stateParams', '$scope', '$state', 'Upload', '$timeout', 'host', '$http', function (Contact, $stateParams, $scope, $state, Upload, $timeout, host, $http) {

  Contact.getOne({action: $stateParams.id}, function(data) {
    $scope.contact = data;
    console.log($scope.contact);
  });


  $scope.updateContact = function() {
    $scope.load = "loading";
    Contact.update({action: $stateParams.id}, $scope.contact, function(data) {
      if (data) {
        $scope.load = '';
        console.log("success");
      }
    });
  }
}]);
