angular
 .module('ldnFabric')
 .factory('Building', buildingsFactory);

buildingsFactory.inject = ['$resource', 'API'];
function buildingsFactory($resource, API) {
  return $resource(`${API}/buildings/:id`, { id: '@_id'});
}
