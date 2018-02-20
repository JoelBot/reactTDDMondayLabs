var hobbies = require('../src/hobbies.js');
describe('List', function() {
	it('lists the hobbies as is', function() {
		let actual = hobbies.list();
		let expected = ['run', 'eat', 'jump'];
		expect(actual).toEqual(expected);
	});

	it('sort hobbies in ascending order', function() {
		let actual = hobbies.list('ascending');
		let expected = ['eat', 'jump', 'run'];
		expect(actual).toEqual(expected);
	});

	it('sort hobbies in descending order', function() {
		let actual = hobbies.list('descending');
		let expected = ['run', 'jump', 'eat'];
		expect(actual).toEqual(expected);
	});

});