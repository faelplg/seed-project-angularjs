import angular from 'angular';

/* App routing */
import 'angular-ui-router';
import routesConfig from './app.routes';

/* Style */
import './index.less';

/* Containers & Components */
import {containersPackage} from './app/containers/index';
import {componentsPackage} from './app/components/index';

export const app = 'app';

angular
  .module(app, [
    'ui.router',
    containersPackage,
    componentsPackage
  ])
  .config(routesConfig);
