import React from 'react';

class PollQuestion extends React.Component {
	render() {
		return <div><input type="radio" /><p>{this.props.question}</p></div>;
	}
}

export default PollQuestion;