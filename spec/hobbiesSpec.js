import * as hobbies from '../src/scripts/hobbies';
describe('List', () => {
	it('lists the hobbies as is', () => {
		let actual = hobbies.list();
		let expected = ['run', 'eat', 'jump'];
		expect(actual).toEqual(expected);
	});

	it('sort hobbies in ascending order', () => {
		let actual = hobbies.list('ascending');
		let expected = ['eat', 'jump', 'run'];
		expect(actual).toEqual(expected);
	});

	it('sort hobbies in descending order', () => {
		let actual = hobbies.list('descending');
		let expected = ['run', 'jump', 'eat'];
		expect(actual).toEqual(expected);
	});

});