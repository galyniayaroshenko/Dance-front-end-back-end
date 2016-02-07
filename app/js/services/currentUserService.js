angular.module('app')
.factory('currentUserService', [
  '$state', '$rootScope', '$localStorage', 'Account',
  function($state, $rootScope, $localStorage, Account) {
    return {
      user: function () {
        return $localStorage.user;
      },

      signout: function () {


            delete $localStorage.user;
            delete $localStorage.token;
            delete $rootScope.token;
            $state.go('acount.signin');


      }
    };
  }]);
