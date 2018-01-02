export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/typography');

  $stateProvider

    .state('app', {
      url: '',
      component: 'appContainer',
      abstract: true
    })
    .state('app.typography', {
      url: '/typography',
      component: 'typographyComponent'
    });
}
