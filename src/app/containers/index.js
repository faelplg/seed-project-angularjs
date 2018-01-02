import angular from 'angular';

import {AppContainer} from './app/app.container';

export const containersPackage = 'containersPackage';

angular
  .module(containersPackage, [])
    .component('appContainer', AppContainer);
