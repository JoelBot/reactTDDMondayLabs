import React from 'react';
import { Link } from 'react-router';

class App extends React.Component {
	render() {
		return (
			<div>
				<ul className='nav nav-pills'>
					<li className="btn btn-success" role='presentation'><Link to="/">Home</Link></li>
					<li className="btn btn-success" role='presentation'><Link to="poll">Poll</Link></li>
					<li className="btn btn-success" role='presentation'><Link to="about">About</Link></li>
				</ul>
				<div>
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default App;