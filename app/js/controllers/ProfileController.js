angular.module('app')
  .controller('ProfileController', ['$scope', '$state', '$stateParams', 'Profile', 'currentUserService', '$localStorage',
    function($scope, $state, $stateParams, Profile, currentUserService, $localStorage) {
      if ($localStorage.user && $localStorage.token) {
        $state.go('base.index');
      } else {
        $state.go('acount.signin');
      }

console.log("wow");
    console.log($stateParams.id);
    $scope.viewProf = currentUserService.user();
    console.log($scope.viewProf);
    $scope.viewProfile = Profile.get({action : $stateParams.id});
    console.log($scope.viewProfile);

$scope.signout = function() {
  console.log('logout');
  currentUserService.signout();

}

  }]);
