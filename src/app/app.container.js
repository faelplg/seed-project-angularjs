class AppController {
  /** @ngInject */
  constructor($log) {
    $log.log('AppController');
  }
}

export const AppContainer = {
  template: require('./AppContainer.html'),
  controller: AppController
};
