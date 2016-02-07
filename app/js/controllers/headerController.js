angular.module('app')
  .controller('headerController', ['$scope','$state','$stateParams', '$window', 'Profile', function($scope, $state, $stateParams, $window, Profile) {
    $scope.userList = Profile.get();
    console.log($scope.userList);

  }]);
