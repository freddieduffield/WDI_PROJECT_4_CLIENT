angular
.module('ldnFabric')
.factory('Material', MaterialFactory);

MaterialFactory.$inject = ['$resource', 'API'];
function MaterialFactory($resource, API) {
  return $resource(`${API}/materials/:id`, { id: '@_id'},
    {
      'update': { method: 'PUT' }
    }
);
}
