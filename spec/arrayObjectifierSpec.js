var arrayObjectifier = require('../src/arrayObjectifier.js');
describe('analyze array', function() {
	it('takes in an array of numbers and returns said array', function() {
		let actual = arrayObjectifier.pass([1,2,4,34,5,52]);
		// let expected = [1,2,3,4,5];
		let expected = [1,2,34,4,5,52];
		expect(actual).toEqual(expected);
	});
});