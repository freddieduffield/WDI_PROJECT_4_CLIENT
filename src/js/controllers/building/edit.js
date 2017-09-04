angular
.module('ldnFabric')
.controller('BuildingsEditCtrl', BuildingsEditCtrl);

BuildingsEditCtrl.inject = ['$stateParams', 'Building', '$state'];
function BuildingsEditCtrl($stateParams, Building, $state) {
  const vm = this;
  vm.building = Building.get($stateParams);
  vm.update = buildingsUpdate;
  vm.delete = buildingsDelete;

  function buildingsUpdate() {
    Building
    .update({id: vm.building.id},{building: vm.building})
    .$promise
    .then(() => $state.go('buildingsShow', $stateParams));
  }

  function buildingsDelete() {
    Building
    .remove({ id: vm.building.id })
    .$promise
    .then(() => {
      $state.go('buildingsIndex');
    });
  }
}
