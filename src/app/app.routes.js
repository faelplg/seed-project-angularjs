export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/left-sidebar/typography');

  $stateProvider

    .state('app', {
      url: '',
      component: 'appContainer',
      abstract: true
    })
    .state('app.leftsidebar', {
      url: '/left-sidebar',
      component: 'leftSidebarContainer'
    })
    .state('app.leftsidebar.typography', {
      url: '/typography',
      component: 'typographyComponent'
    });
}
