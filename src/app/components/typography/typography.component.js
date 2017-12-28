function TypographyController($log) {
  $log.log('Seed Project - AngularJS | TypographyComponentController');
}
TypographyController.$inject = ['$log'];

export const TypographyComponent = {
  controller: TypographyController,
  template: require('./TypographyComponent.html')
};
