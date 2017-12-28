import angular from 'angular';

/* App routing */
import 'angular-ui-router';
import routesConfig from './app.routes';

/* App container */
import {AppContainer} from './app/app.container';

/* Style */
import './index.less';

/* Containers & Components */
// import {containersModule} from './app/containers/index';
import {componentsPackage} from './app/components/index';

export const app = 'app';

angular
  .module(app, [
    'ui.router',
    componentsPackage
  ])
  .component('appContainer', AppContainer)
  .config(routesConfig);
