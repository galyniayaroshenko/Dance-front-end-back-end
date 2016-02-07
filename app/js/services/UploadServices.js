angular.module('app')
.factory('UploadFile', [
  '$resource', 'host',
  function ($resource, host) {
    var link = host + 'files/:action';
    return $resource(link, { action: '@action'}, {
      getOne: { method: 'POST', params: { action: '@action' }}
    });
  }]);
