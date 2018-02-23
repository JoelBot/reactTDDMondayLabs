import React from 'react';
import PollHeader from '../components/PollHeader.js';
import PollQuestion from '../components/PollQuestion.js';
import RadioButton from '../components/RadioButton.js';
import PollSubmitButton from '../components/PollSubmitButton.js';
import RadioButtonGroup from '../components/RadioButtonGroup';
import data from '../data/data.json';

class PollContainer extends React.Component {
	constructor(){
		super();
		this.setCheckedValue = this.setCheckedValue.bind(this);
		this.state = {
			header: 'Welcome to the poll!',
			question: 'What is the best?',
			correctAnswer: 'Pizzas',
			checkedValue: ''
		};
	}

	setCheckedValue(value) {
		this.setState({checkedValue: value});
		console.log('current choice: ' + value);
	}

	render() {
		var rowStyle = {
			backgroundColor: '#dadada',
			border: '1px solid black',
			borderRadius: '6px',
			padding: '10px'
		};
		// const choices = [
		// 	{value: 'Tacos', label: 'Tacos'},
		// 	{value: 'Pizza', label: 'Pizza'},
		// 	{value: 'Cheese', label: 'Cheese'}
		// ];

		return (
			<div className="container">
				<div className="jumbotron">
					<PollHeader text={data.poll.header} />
				</div>
				<div className="row" style={rowStyle}>
					<div className="col-sm-4 col-sm-offset-4">
						<form>
							<PollQuestion text={data.poll.questions[0].question} />
							<RadioButtonGroup 
								name='answer'
								checkedValue={this.state.checkedValue}
								choices={data.poll.questions[0].choices} onChange={this.setCheckedValue}/>
							<PollSubmitButton />
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default PollContainer;