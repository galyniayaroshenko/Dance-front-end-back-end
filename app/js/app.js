angular
  .module('app', [
  'ngResource',
  'ngStorage',
  'ui.router',
  'ngFileUpload',
  'ngAnimate',
  'mm.foundation',
  'ngCookies'

])
.run([
  '$rootScope', '$localStorage', '$state',
  function ($rootScope, $localStorage, $state) {
    $rootScope.$on('$stateChangeStart', function (e, toState) {
      if(!$localStorage.token && toState.name !== 'acount.signin') {
        $state.go('acount.signin');
      }
    });
  }]);
