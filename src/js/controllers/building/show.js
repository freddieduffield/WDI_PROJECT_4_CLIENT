angular
.module('ldnFabric')
.controller('BuildingsShowCtrl', BuildingsShowCtrl);

BuildingsShowCtrl.inject = ['$stateParams', 'Building', 'Material', 'CurrentUserService', '$state'];
function BuildingsShowCtrl($stateParams, Building, Material, CurrentUserService, $state) {
  const vm = this;

  // vm.building = {};
  vm.material = {};

  vm.materials = Material.query();
  vm.building = Building.get({ id: $stateParams.id });
  vm.addMaterial = addMaterial;
  vm.materialDelete = materialDelete;
  console.log(vm.materials);


  function addMaterial(){
    vm.material = {title: vm.material.title, body: vm.material.body, image: vm.material.image, user_id: CurrentUserService.currentUser.id, building_id: $stateParams.id};
    console.log(vm.material);

    Material
    .save({material: vm.material})
    .$promise
    .then(data => {
      // console.log(data);
      // console.log('Your material has been successfully added! Thank you!');
      vm.building.materials.push(data);
      $state.reload();
    });

      // $state.go('buildingsShow', $stateParams);
    // });
  }

  function materialDelete(materialId) {
    console.log(materialId);
    Material
    .delete({id: materialId})
    .$promise
    .then(() => {
      // $state.go('buildingsShow');
      $state.reload();
    });
  }
}
