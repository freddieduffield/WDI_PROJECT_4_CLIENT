angular
.module('ldnFabric')
.controller('periodsShowCtrl', periodsShowCtrl);

periodsShowCtrl.inject = ['Period', '$stateParams'];
function periodsShowCtrl(Period, $stateParams) {
  const vm = this;

  vm.period = {};

  vm.period = Period.get({ id: $stateParams.id });
}
