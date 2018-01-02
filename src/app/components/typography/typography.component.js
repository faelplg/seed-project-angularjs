function TypographyController($log) {
  $log.log('TypographyController');
}
TypographyController.$inject = ['$log'];

export const TypographyComponent = {
  controller: TypographyController,
  template: require('./TypographyComponent.html')
};
