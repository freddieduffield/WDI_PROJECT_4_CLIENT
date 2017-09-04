angular
 .module('ldnFabric')
 .controller('BuildingsShowCtrl', BuildingsShowCtrl);

BuildingsShowCtrl.inject = ['$stateParams', 'Building'];
function BuildingsShowCtrl($stateParams, Building) {
  const vm = this;

  vm.building = Building.get({ id: $stateParams.id });
}
