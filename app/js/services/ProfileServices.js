angular.module('app')
.factory('Profile', [
  '$resource', 'host',
  function ($resource, host) {
    var link = host + 'users/:action';
    return $resource(link, { action: '@action'}, {
      get: { method: 'GET', params: { action: '@action' }},
      logOut: { method: 'GET', params: { action: '@action' }},
      create: { method: 'POST', params: { action: '@action' }},
      delete: {method: 'DELETE', params: { action: '@action' } },
      update: { method: 'PUT',  params: { action: '@action'  } },
      id: {method: 'GET', params: { action: '$resource.id' } }
    });
  }]);
