angular
.module('ldnFabric')
.controller('BuildingsShowCtrl', BuildingsShowCtrl);

BuildingsShowCtrl.$inject = ['$stateParams', 'Building', 'Material', 'Favourite', 'CurrentUserService', '$state'];
function BuildingsShowCtrl($stateParams, Building, Material, Favourite, CurrentUserService, $state) {
  const vm = this;

  // vm.building = {};
  vm.material = {};
  vm.favourite = {};
  vm.building = Building.get({ id: $stateParams.id });
  vm.addMaterial = addMaterial;
  vm.materialDelete = materialDelete;
  vm.addFavourite = addFavourite;
  vm.tabs = tabs;
  vm.likedForm = false;





  function addMaterial(){
    vm.material.user_id = CurrentUserService.currentUser.id;
    vm.material.building_id = parseInt($stateParams.id);
    console.log(vm.material);
    Material
    .save({material: vm.material})
    .$promise
    .then(data => {
      // console.log('Your material has been successfully added! Thank you!');
      vm.building.materials.push(data);
      // $state.reload();
    });

    // $state.go('buildingsShow', $stateParams);
    // });
  }

  function materialDelete(materialId) {
    Material
    .delete({id: materialId})
    .$promise
    .then(() => {
      // $state.go('buildingsShow');
      $state.reload();
    });
  }

  function addFavourite() {
    vm.likedForm = true;
    vm.favourite = {
      user_id: CurrentUserService.currentUser.id,
      building_id: parseInt($stateParams.id)
    };

    console.log(vm.favourite);
    console.log(vm.likedForm);

    Favourite
    .save(vm.favourite)
    .$promise
    .then(() => {
      console.log('favourite was saved!');
      // $state.reload();
    });

  }

  function tabs($scope, $window) {
    $scope.tabs = [
      { title:'Dynamic Title 1', content:'Dynamic content 1' },
      { title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
    ];

    $scope.alertMe = function() {
      setTimeout(function() {
        $window.alert('You\'ve selected the alert tab!');
      });
    };

    $scope.model = {
      name: 'Tabs'
    };
  }
}
