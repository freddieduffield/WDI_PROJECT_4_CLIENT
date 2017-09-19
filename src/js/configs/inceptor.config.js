angular
.module('ldnFabric')
.config('Interceptor', ['$httpProvider', function ($httpProvider){
  return $httpProvider.interceptors.push('AuthInterceptor');
}]);

// Interceptor.inject = ['$httpProvider'];
// function Interceptor($httpProvider) {
//   return $httpProvider.interceptors.push('AuthInterceptor');
// }
