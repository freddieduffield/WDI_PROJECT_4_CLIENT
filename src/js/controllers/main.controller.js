angular
 .module('ldnFabric')
 .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$rootScope', 'CurrentUserService', '$state'];
function MainCtrl($rootScope, CurrentUserService, $state) {
  const vm = this;
  // vm.addBuilding = addBuilding;
  // vm.centerMapOnDestination = centerMapOnDestination;



  $rootScope.$on('loggedIn', () => {
    vm.user = CurrentUserService.currentUser;
  });

  $rootScope.$on('loggedOut', () => {
    vm.user = null;
    $state.go('login');
  });

  vm.logout = () => {
    CurrentUserService.removeUser();
  };

  // function addBuilding(){
  //   console.log(Building);
  // //   Building
  // //   .save({ id: vm.building._id }, vm.lat_lng)
  // //   .$promise
  // //   .then(building =>{
  // //     vm.building.lat_lng = building.lat_lng;
  // //     vm.lat_lng = {};
  // //     // $rootScope.$broadcast('updatedDestinations', { data: vm.group.destinatio });
  // //   });
  // }
  //
  // function centerMapOnDestination(event, destination) {
  //   angular.element(event.target).parent().children().removeClass('selected');
  //   console.log(angular.element(event.target).parent().children());
  //   if (!(event.target.classList.contains('selected'))) {
  //     event.target.className += ' selected';
  //   }
  //   $rootScope.$broadcast('centerMapOnDestination', {
  //     data: destination
    // });
  // }
}
