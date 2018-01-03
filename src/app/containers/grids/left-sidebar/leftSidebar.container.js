class LeftSidebarController {
  /** @ngInject */
  constructor($log) {
    $log.log('LeftSidebarController');
  }
}

export const LeftSidebarContainer = {
  template: require('./LeftSidebarContainer.html'),
  controller: LeftSidebarController
};
