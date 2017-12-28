export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider

    .state('app', {
      url: '/',
      // component: 'appContainer',
      component: 'typographyComponent'
      // abstract: true
    });
    // .state('app.typography', {
    //   url: '/typography',
    //   component: 'typographyComponent'
    // });
}
