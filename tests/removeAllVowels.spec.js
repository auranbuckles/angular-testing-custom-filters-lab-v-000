describe('removeAllVowels Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

	it('should remove all vowels in a string', function () {
		var results = $filter('removeAllVowels')('beanie');
		expect(results).toEqual('bn');
	});

});
