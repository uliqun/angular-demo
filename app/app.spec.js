describe('PhoneListController', function() {

  beforeEach(module('phonecatApp'));

  it('should create a `phones` model with 4 phones', inject(function($controller) {
    var scope = {};
    var ctrl = $controller('PhoneListController', {$scope: scope});

    expect(scope.phones.length).toBe(4);
   expect(scope.name).toBe('world2');
  }));

});