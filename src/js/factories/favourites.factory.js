angular
 .module('ldnFabric')
 .factory('Favourite', FavouritesFactory);

FavouritesFactory.$inject = ['$resource', 'API'];
function FavouritesFactory($resource, API) {
  return $resource(`${API}/favourites/:id`, { id: '@_id'});
}
