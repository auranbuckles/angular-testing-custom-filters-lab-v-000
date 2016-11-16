describe('Favorite Food Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

	it('should filter an array of objects depending on the favoriteFood property in the object', function () {
		var mockedList = [
			{ name: 'Jackie', favoriteFood: 'ice cream'},
			{ name: 'Jaime', favoriteFood: 'chocolate'},
			{ name: 'Jack', favoriteFood: 'lemons'}
		];

		var results = $filter('favoriteFood')(mockedList, 'ice cream');
		expect(results.length).toBe(1);
		expect(results[0].name).toBe('Jackie');
	})
	
});
