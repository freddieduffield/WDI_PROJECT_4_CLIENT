angular
.module('ldnFabric')
.config(Interceptor);

Interceptor.inject = ['$httpProvider', 'AuthInterceptor'];
function Interceptor($httpProvider) {
  return $httpProvider.interceptors.push('AuthInterceptor');
}
