import * as sayHello from './sayHello.js';

// document.getElementById('Welcome-message').innerHTML = sayHello.greet('Joel');
window.addEventListener('load',() => {
	document.getElementById('welcome-message').innerHTML = sayHello.greet('Joel');
});