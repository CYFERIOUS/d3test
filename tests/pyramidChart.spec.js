describe('pyramidController', function() {
  
  beforeEach(module('maps'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('controller exists', function() {
    it('controller is defined', function() {
      var $scope = {};
      var controller = $controller('pyramidCtrl', { $scope: $scope });
      expect(controller).toBeDefined();
    });
  });
});