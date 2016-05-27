describe('testController', function() {
  
  beforeEach(module('testMod'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('controller exists', function() {
    it('controller is defined', function() {
      var $scope = {};
      var controller = $controller('testCtrl', { $scope: $scope });
      expect(controller).toBeDefined();
    });
  });
});