import { Component } from 'react';

class SayHello extends Component {
	constructor(props) {
		super(props);
		this.greet = this.greet(this);
		this.salutation = this.salutation(this);
	}

	greet (name) {
		name = name ? name : 'friend';
		return 'Hello, ' + name;
	}

	salutation (time) {
		if (time < 12) {
			return 'Good morning!';
		} 
		if (time >= 12 && time <= 18) {
			return 'Good afternoon!';
		}
		else {
			return 'Good evening!';
		}
	}

	render() {
		return <div>Hello</div>;
	}
}

export default SayHello;
// export let greet = (name) => {
// 	name = name ? name : 'friend';
// 	return 'Hello, ' + name;

// };

// export let salutation = (time) => {
// 	if (time < 12) {
// 		return 'Good morning!';
// 	} 
// 	if (time >= 12 && time <= 18) {
// 		return 'Good afternoon!';
// 	}
// 	else {
// 		return 'Good evening!';
// 	}
// };
