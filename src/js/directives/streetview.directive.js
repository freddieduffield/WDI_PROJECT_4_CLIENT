angular
.module('ldnFabric')
.directive('streetView', streetView);

/* global google:ignore */

streetView.inject = ['$window'];
function streetView($window) {
  const directive =  {
    restrict: 'E',
    replace: true,
    template: '<div class="street-view"></div>',
    scope: {
      center: '='
      // zoom: '=',
      // tile: '@'
    },
    link(scope, element) {
      setTimeout(function() {
        new $window.google.maps.StreetViewPanorama(element[0], {

          position: scope.center,
          pov: {
            heading: 150,
            pitch: 5
          },
          addressControlOptions: {
            position: google.maps.ControlPosition.BOTTOM_CENTER
          },
          linksControl: false,
          panControl: false,
          enableCloseButton: false
        });
        console.log(scope.center);
        console.log(element[0]);

      }, 200);
    }
  };
  return directive;

}
