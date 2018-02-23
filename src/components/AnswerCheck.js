
import React from 'react';
import PropType from 'prop-types';

function AnswerCheck(props){
	return(<div>{props.checkedValue === props.correctAnswer ? 'correct':'wrong'}</div>);
}

export default AnswerCheck;