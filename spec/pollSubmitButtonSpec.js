import React from 'react';
import TestUtils from 'react-dom/test-utils';
import PollSubmitButton from '../src/components/PollSubmitButton.js';

describe('Greet', () => {
	it('renders without problems', () => {
		const pollSubmitButton = TestUtils.renderIntoDocument(<PollSubmitButton />);
		expect(pollSubmitButton).toEqual(jasmine.anything());
	});
});
	
