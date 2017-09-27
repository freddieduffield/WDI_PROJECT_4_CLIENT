angular
.module('ldnFabric')
.controller('periodsIndexCtrl', periodsIndexCtrl);

periodsIndexCtrl.$inject = ['Period'];
function periodsIndexCtrl(Period) {
  const vm = this;

  vm.periods = Period.query();
}
