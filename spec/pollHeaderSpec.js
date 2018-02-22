import React from 'react';
import TestUtils from 'react-dom/test-utils';
import PollHeader from '../src/components/PollHeader.js';

describe('Greet', () => {
	it('renders without problems', () => {
		const pollheader = TestUtils.renderIntoDocument(<PollHeader />);
		expect(pollheader).toEqual(jasmine.anything());
	});
});

describe('Poll Header', () => {
	let component;
	beforeEach(() => {
		component = TestUtils.renderIntoDocument(
			<PollHeader text="Welcome to the Poll!" />
		);
	});
});
	
