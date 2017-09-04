angular
 .module('ldnFabric')
 .controller('BuildingsIndexCtrl', BuildingsIndexCtrl);

BuildingsIndexCtrl.inject = ['Building'];
function BuildingsIndexCtrl(Building) {
  const vm = this;

  vm.buildings = Building.query();

}
