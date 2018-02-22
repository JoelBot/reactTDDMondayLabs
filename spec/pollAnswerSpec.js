import React from 'react';
import TestUtils from 'react-dom/test-utils';
import PollAnswer from '../src/components/PollAnswer.js';

describe('Greet', () => {
	it('renders without problems', () => {
		const pollAnswer = TestUtils.renderIntoDocument(<PollAnswer />);
		expect(pollAnswer).toEqual(jasmine.anything());
	});
});
	
