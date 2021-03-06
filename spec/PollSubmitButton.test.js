import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import { shallow,mount,render } from 'enzyme';
import PollSubmitButton from '../src/components/PollSubmitButton';

describe('Poll Submit Button', function() {


	it('renders without a problem', function () {
		var pollsubmitbutton = TestUtils.renderIntoDocument(<PollSubmitButton />);
		var buttonText = ReactDOM.findDOMNode(pollsubmitbutton).textContent;
		expect(buttonText).toBe('Go!');
	});
});

describe('Poll Submit Button Again', function() {


	it('renders without a problem', function () {
		var pollsubmitbutton = shallow(<PollSubmitButton />);
		expect(pollsubmitbutton.text()).toEqual('Go!');
	});

	it('calls handler function on click', function () {
		const PollSubmitButton = require('../src/components/PollSubmitButton').default;
		var handleClick = jest.getMockFunction();
		var pollsubmitbutton = TestUtils
			.renderIntoDocument(
				<PollSubmitButton
					question={0}
					handleClick={handleClick}
				/>);

		var buttonInstance = ReactDOM.findDOMNode(pollsubmitbutton);

		TestUtils.Simulate.click(buttonInstance);

		expect(handleClick).toBeCalled();

		var numberOfCallsMadeIntoMockFunction = handleClick.mock.calls.length;

		expect(numberOfCallsMadeIntoMockFunction).toBe(1);
});

});