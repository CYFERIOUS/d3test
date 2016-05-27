describe('pyramidController', function() {
  
  beforeEach(module('maps'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('controller exists', function() {
    it('controller is defined', function() {
      var $scope = {};
      var $element = '<my-element-to-test></my-element-to-test>';
      var controller = $controller('pyramidCtrl', { $scope: $scope, $element:$element });
      expect(controller).toBeDefined();
    });
  });
});