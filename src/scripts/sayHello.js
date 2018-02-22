export let greet = (name) => {
	name = name ? name : 'friend';
	return 'Hello, ' + name;

};

export let salutation = (time) => {
	if (time < 12) {
		return 'Good morning!';
	} 
	if (time >= 12 && time <= 18) {
		return 'Good afternoon!';
	}
	else {
		return 'Good evening!';
	}
};
