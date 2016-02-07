angular.module('app')
  .controller('ProfileViewAllController', ['$scope','$state','$stateParams', '$window', 'Profile', function($scope, $state, $stateParams, $window, Profile) {
    $scope.userList = Profile.get();


    $scope.deleteUser = function (arg) {
      //console.log(arg);
      $scope.arg = arg;
      console.log($scope.arg.id);
      Profile.delete({ action: $scope.arg.id }, function (data) {
        console.log(data);
        $scope.userList = Profile.get();
      });
    };

  }]);
