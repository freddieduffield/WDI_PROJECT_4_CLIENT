angular
.module('ldnFabric')
.controller('BuildingsShowCtrl', BuildingsShowCtrl);

BuildingsShowCtrl.inject = ['$stateParams', 'Building', '$rootScope', '$scope'];
function BuildingsShowCtrl($stateParams, Building, $rootScope, $scope) {
  const vm = this;

  vm.building = Building.get({ id: $stateParams.id });
  vm.destination            = {};
  vm.placeData              = {};
  vm.addDestination         = addDestination;
  vm.removeDestination      = removeDestination;
  vm.centerMapOnDestination = centerMapOnDestination;

  Building
  .get({ id: $stateParams.id})
  .$promise
  .then(data => {
    vm.buildings = data;
    $rootScope.$broadcast('destinationData', {
      data: vm.buildings.destinations
    });
  });

  $rootScope.$on('gotPlaceData', (event, args) => {
    vm.destination.name = args.placeData.name;
    vm.destination.lat  = args.placeData.lat;
    vm.destination.long = args.placeData.lng;
    vm.destination.description = args.placeData.description;
    $scope.$apply();
  });

  function addDestination(){
    Building
    .addDestination({ id: vm.buildings._id }, vm.destination)
    .$promise
    .then(buildings =>{
      vm.buildings.destinations = buildings.destinations;
      vm.destination = {};
      $rootScope.$broadcast('updatedDestinations', { data: vm.buildings.destinations });
    });
  }

  function removeDestination(destination){
    Building
    .removeDestination({ groupId: vm.buildings._id, destinationId: destination._id} )
    .$promise
    .then(() =>{
      vm.buildings.destinations.splice(vm.buildings.destinations.indexOf(destination), 1);
      $rootScope.$broadcast('updatedDestinations', { data: vm.buildings.destinations });
      vm.destination = {};
    });
  }

  // $scope.item = false;
  function centerMapOnDestination(event, destination) {
    angular.element(event.target).parent().children().removeClass('selected');
    console.log(angular.element(event.target).parent().children());
    if (!(event.target.classList.contains('selected'))) {
      event.target.className += ' selected';
    }
    $rootScope.$broadcast('centerMapOnDestination', {
      data: destination
    });
    // $scope.item = true;
  }

}
