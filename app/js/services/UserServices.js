// angular.module('app')
// .factory('User', [
//   '$resource', 'host',
//   function ($resource, host) {
//     var link = host + 'auth/loginByEmail/:action';
//     return $resource(link, { action: '@action'}, {
//       signin: { method: 'POST', params: { action: '@action' }},
//       get1: { method: 'GET', params: { action: '@action' }},
//       delete: {method: 'DELETE', params: { action: '@action' } },
//       update: { method: 'PUT',  params: { action: '@action'  } },
//       id: {method: 'GET', params: { action: '$resource.id' } }
//     });
//   }]);
  
