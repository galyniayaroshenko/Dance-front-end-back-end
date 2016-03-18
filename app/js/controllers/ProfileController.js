angular.module('app')
  .controller('ProfileController', ['$scope', '$state', '$stateParams', 'Profile', 'currentUserService', '$localStorage',
    function($scope, $state, $stateParams, Profile, currentUserService, $localStorage) {
      if ($localStorage.user && $localStorage.token) {
        $state.go('base.index');
      } else {
        $state.go('acount.signin');
      }
    $scope.viewProf = currentUserService.user();
    $scope.viewProfile = Profile.get({action : $stateParams.id});
    $scope.signout = function() {
      currentUserService.signout();
    }
  }]);
