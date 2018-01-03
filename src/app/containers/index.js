import angular from 'angular';

import {AppContainer} from './app/app.container';
import {LeftSidebarContainer} from './grids/left-sidebar/leftSidebar.container';

export const containersPackage = 'containersPackage';

angular
  .module(containersPackage, [])
    .component('appContainer', AppContainer)
    .component('leftSidebarContainer', LeftSidebarContainer);
