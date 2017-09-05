angular
.module('ldnFabric')
.factory('Material', materialFactory);

materialFactory.inject = ['$resource', 'API'];
function materialFactory($resource, API) {
  return $resource(`${API}/materials/:id`, { id: '@_id'},
    {
      'update': { method: 'PUT' }
    }
);
}
