angular
 .module('ldnFabric')
 .controller('BuildingsNewCtrl', BuildingsNewCtrl);

BuildingsNewCtrl.$inject = ['Building', '$state', 'Period'];
function BuildingsNewCtrl($state, Building, Period) {
  const vm = this;

  // vm.addPeriodToBuilding = addPeriodToBuilding;
  vm.addBuilding = addBuilding;
  vm.building    =  {};
  vm.periods = Period.query();

  function  addBuilding() {
    Building
    .save({building: vm.building})
    .$promise
    .then(() => $state.go('buildingsIndex'));
  }

  // function addPeriodToBuilding() {
  //   Period
  //   .
  // }

}
