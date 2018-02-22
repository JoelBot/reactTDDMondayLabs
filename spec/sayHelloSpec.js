import * as sayHello from '../src/scripts/SayHello.js';
describe('Greet', () => {
	it('concats Hello and a name', () => {
		let actual = sayHello.greet('World');
		let expected = 'Hello, World';
		expect(actual).toEqual(expected);
	});

	it('Greet says hello, Friend! when no name is given', () => {
		let actual = sayHello.greet();
		let expected = 'Hello, friend';
		expect(actual).toEqual(expected);
	});
});


describe('Greet with appropriate salutation', () => {
	it('Greet with good morning/afternoon/evening', () => {
		let actual = sayHello.salutation(11);
		let expected = 'Good morning!';
		expect(actual).toEqual(expected);
	});
	it('Greet with good morning/afternoon/evening', () => {
		let actual = sayHello.salutation(12);
		let expected = 'Good afternoon!';
		expect(actual).toEqual(expected);
	});
	it('Greet with good morning/afternoon/evening', () => {
		let actual = sayHello.salutation(19);
		let expected = 'Good evening!';
		expect(actual).toEqual(expected);
	});
});
