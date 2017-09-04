angular
 .module('ldnFabric')
 .factory('Period', PeriodsFactory);

PeriodsFactory.inject = ['$resource', 'API'];
function PeriodsFactory($resource, API) {
  return $resource(`${API}/periods/:id`, { id: '@_id'});
}
