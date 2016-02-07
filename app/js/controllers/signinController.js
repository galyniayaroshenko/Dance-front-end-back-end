angular.module('app') 
    .controller('signinController', [
      '$scope', '$state', '$localStorage', '$rootScope','$cookies', 'Account', 'currentUserService',
    function ($scope, $state, $localStorage, $rootScope,$cookies, Account, currentUserService) {
      currentUserService.signout();
      $scope.user = {};


      $scope.signin = function () {


        Account.signin({action: 'username='+$scope.user.username+'&'+'password='+$scope.user.password},function (result) {
          if (result.code == 101) {
            $scope.message ='email address or password you entered is not correct';
            console.log($scope.message);
          }else {
            console.log(result);

          $rootScope.token = result.sessionToken;
          $localStorage.token = result.sessionToken;
          $localStorage.user = result;



          if ($localStorage.token && $localStorage.token != null) {
              $state.go('base.index');
          }
          }
        });
      }

    }]);
