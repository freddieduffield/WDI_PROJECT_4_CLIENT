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
      //   '</div>'

        scope.buildings.forEach(building => {
          console.log(building);
          var marker = new $window.google.maps.Marker({
            position: { lat: building.lat, lng: building.long },
            map: map,
            animation: $window.google.maps.Animation.DROP
          });
          marker.addListener('click', function() {
            infowindow.open(map, marker);
          });
          var infowindow = new $window.google.maps.InfoWindow({
            content: infoWindowContent
          });
        });
      }, 900);
    }
  };
  return directive;
}

// return {
//   restrict: 'E',
//   replace: true,
//   template: '<div class="google-map">GOOGLE MAP</div>',
//   scope: {
//     center: '=',
//     marker: '=',
//     name: '=',
//     lat: '=',
//     lng: '=',
//     description: '=',
//     src: '='
//   },
//   link(scope, element) {
//
//     // let markers      = [];
//     //
//     // const bounds = new $window.google.maps.LatLngBounds();
//     console.log($scope.src);
//     const building = Building.get({});
//     console.log(building);
//     const map = new $window.google.maps.Map((element[0]),{
//       center: {lat: 51.5, lng: -0.0833},
//       zoom: 14
//     });
//     const marker = new google.maps.Marker({
//       position: {lat: building.lat, lng: building.long },
//       map: map
//     });




//       const input = document.getElementById('pac-input');
//       // console.log(element[0]);
//       const autocomplete = new $window.google.maps.places.Autocomplete(input);
//
//       autocomplete.bindTo('bounds', map);
//
//       autocomplete.addListener('place_changed', function() {
//         // infowindow.close();
//         // marker.setVisible(false);
//         const place = autocomplete.getPlace();
//         // console.log(place.types);
//         scope.placeData = {
//           name: place.name,
//           lat: place.geometry.location.lat(),
//           lng: place.geometry.location.lng(),
//           description: place.types[0]
//         };
//
//         $rootScope.$broadcast('gotPlaceData', {
//           placeData: scope.placeData
//         });
//
//         if (!place.geometry) {
//           // User entered the name of a Place that was not suggested and
//           // pressed the Enter key, or the Place Details request failed.
//           window.alert('No details available for input: ' + place.name + '');
//           return;
//         }
//       });
//
//
//       $rootScope.$on('destinationData', (event, args) => {
//         if (args.data.length === 0) {
//           var listener = $window.google.maps.event.addListener(map, 'idle', function () {
//             map.setZoom(2);
//             $window.google.maps.event.removeListener(listener);
//           });
//         }
//         createMarkers(args.data);
//       });
//
//       $rootScope.$on('updatedDestinations', (event, args) => {
//         // clearMarkers();
//         createMarkers(args.data);
//       });
//
//       function createMarkers(array) {
//         array.forEach(destination => {
//           const marker = new $window.google.maps.Marker({
//             map: map,
//             position: { lat: destination.lat, lng: destination.long }
//           });
//
//           bounds.extend(marker.position);
//
//           markers.push(marker);
//         });
//
//         map.fitBounds(bounds);
//         map.setZoom(10);
//       }
//
//       $rootScope.$on('centerMapOnDestination', (event, args) => {
//         map.setCenter({lat: args.data.lat, lng: args.data.long });
//       });
//
//     }
//   };
// }
