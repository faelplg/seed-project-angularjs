import angular from 'angular';

import {TypographyComponent} from './typography/typography.component';

export const componentsPackage = 'componentsPackage';

angular
  .module(componentsPackage, [])
    .component('typographyComponent', TypographyComponent);
