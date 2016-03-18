angular.module('app')
  .config(['$httpProvider', function ($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.contentType = 'application/json';
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

    $httpProvider.interceptors.push([
      '$q', '$location', '$localStorage',
      function ($q, $location, $localStorage) {
        return {
          request: function (config) {
              config.headers['X-Parse-Application-Id'] = 'H5KAAYxtQs9mHofpMrAMR79g4fRB8gVi8u1L0WD8';
              config.headers['X-Parse-REST-API-Key'] = 'whotVlXPedvga8enyrfzWdywrBgL024TynNQiYH9';
            return config;
          },
          responseError: function (response) {
            $q.reject(response);
          }
        }
    }]);
  }]);
