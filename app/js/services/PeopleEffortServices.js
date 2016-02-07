angular.module('app')
.factory('PeopleEffort', [
  '$resource', 'host',
  function ($resource, host) {
    var link = host + 'classes/peopleEffort/:action';
    return $resource(link, { action: '@action'}, {
      get: { method: 'GET', params: { action: '@action' }},
      getOne: { method: 'GET', params: { action: '@action' }},
      delete: {method: 'DELETE', params: { action: '@action' } },
      update: { method: 'PUT',  params: { action: '@action'  } },
      create: { method: 'POST',  params: { action: ''  } },
      id: {method: 'GET', params: { action: '$resource.id' } }
    });
  }]);
