import React from 'react';
import TestUtils from 'react-dom/test-utils';
import PollQuestion from '../src/components/PollQuestion.js';

describe('Greet', () => {
	it('renders without problems', () => {
		const pollQuestion = TestUtils.renderIntoDocument(<PollQuestion />);
		expect(pollQuestion).toEqual(jasmine.anything());
	});
});
	
