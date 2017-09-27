angular
.module('ldnFabric')
.factory('Building', buildingsFactory);

buildingsFactory.$inject = ['$resource', 'API'];
function buildingsFactory($resource, API) {
  return $resource(`${API}/buildings/:id`, { id: '@_id'},
    {
      'update': { method: 'PUT' }
      // 'addDestination': { method: 'POST', url: `${API}/groups/:id/destinations/new`},
      // 'removeDestination': { method: 'DELETE', url: `${API}/groups/:groupId/destinations/:destinationId`}

    }
);
}
