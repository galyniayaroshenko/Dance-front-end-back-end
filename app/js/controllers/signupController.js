angular.module('app')
  .controller('signupController', ['$stateParams', '$scope', '$state', 'Upload', '$timeout', 'host', 'Profile', function($stateParams, $scope, $state, Upload, $timeout, host, Profile) {
  $scope.profileList = Profile.get();

$scope.user = {};

    $scope.createUser = function () {
      console.log($scope.user);
      Profile.create({user : $scope.user}, function (result) {
        $scope.result = result;
        console.log($scope.result);
      });
    };

  }]);
