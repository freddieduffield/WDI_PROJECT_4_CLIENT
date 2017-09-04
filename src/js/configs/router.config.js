angular
.module('ldnFabric')
.config(Router);

Router.inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function Router($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
  .state('homepage', {
    url: '/',
    templateUrl: '/js/views/homepage.html'
  })
  .state('register', {
    url: '/register',
    templateUrl: '/js/views/authentications/register.html',
    controller: 'RegisterCtrl',
    controllerAs: 'register'
  })
  .state('login', {
    url: '/login',
    templateUrl: '/js/views/authentications/login.html',
    controller: 'LoginCtrl',
    controllerAs: 'login'
  })
  .state('buildingsIndex', {
    url: '/buildings',
    templateUrl: '/js/views/buildings/index.html',
    controller: 'BuildingsIndexCtrl',
    controllerAs: 'vm'
  })
  .state('buildingsNew', {
    url: '/buildings/new',
    templateUrl: '/js/views/buildings/new.html',
    controller: 'BuildingsNewCtrl',
    controllerAs: 'vm'
  })
  .state('buildingsShow', {
    url: '/buildings/:id',
    templateUrl: '/js/views/buildings/show.html',
    controller: 'BuildingsShowCtrl',
    controllerAs: 'vm'
  })
  .state('buildingsEdit', {
    url: '/buildings/:id/edit',
    templateUrl: '/js/views/buildings/edit.html',
    controller: 'BuildingsEditCtrl',
    controllerAs: 'vm'
  })
  .state('usersEdit', {
    url: '/users/:id/edit',
    templateUrl: '/js/views/users/edit.html',
    controller: 'UsersEditCtrl',
    controllerAs: 'vm'
  })
  .state('usersShow', {
    url: '/users/:id',
    templateUrl: '/js/views/users/show.html',
    controller: 'UsersShowCtrl',
    controllerAs: 'vm'
  })
  .state('periodsIndex', {
    url: '/periods',
    templateUrl: '/js/views/periods/index.html',
    controller: 'periodsIndexCtrl',
    controllerAs: 'vm'
  });

  $urlRouterProvider.otherwise('/');
}
