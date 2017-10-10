angular
.module('ldnFabric')
.controller('BuildingsNewCtrl', BuildingsNewCtrl);

BuildingsNewCtrl.$inject = ['Building', '$state', 'Period'];
function BuildingsNewCtrl(Building, $state, Period) {
  const vm = this;

  vm.addBuilding = addBuilding;
  vm.building    =  {};
  vm.periods = Period.query();

  function addBuilding() {
    Building
    .save({building: vm.building})
    .$promise
    .then(() => $state.go('buildingsIndex'));
  }
}
