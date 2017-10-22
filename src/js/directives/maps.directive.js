angular
.module('ldnFabric')
.directive('googleMap', googleMap);

googleMap.$inject = ['$window'];
function googleMap($window) {
  const directive = {
    restrict: 'E',
    replace: true,
    template: '<div class="google-map"></div>',
    scope: {
      buildings: '='
    },
    link(scope, element) {
      setTimeout(function() {
        const map = new $window.google.maps.Map(element[0], {
          zoom: 14,
          center: {lat: 51.5152519, lng: -0.0745329},
          mapTypeId: 'satellite'
        });
      //   const infoWindowContent = '<div class="infowindow">'+
      //     '<img src="{{building.image}}" alt="">'+
      // '  <a ui-sref="buildingsShow({ id: building.id})">building.name</a>'+
      //   '</div>';

        scope.buildings.forEach(building => {
          var marker = new $window.google.maps.Marker({
            position: { lat: building.lat, lng: building.long },
            map: map,
            animation: $window.google.maps.Animation.DROP
          });
          marker.addListener('click', function() {
            infowindow.open(map, marker);
          });
          var infowindow = new $window.google.maps.InfoWindow({
            content: building.name
          });
        });
      }, 900);
    }
  };
  return directive;
}
