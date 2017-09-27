angular
.module('ldnFabric')
.factory('Period', PeriodsFactory);

PeriodsFactory.$inject = ['$resource', 'API'];
function PeriodsFactory(API, $resource) {
  return $resource(`${API}/periods/:id`, { id: '@_id'}
);
}
