exports.list = function list(direction) {

	let theList = ['run', 'eat', 'jump'];
	let reorderedList;

	if (direction === 'ascending') {
		reorderedList = theList.sort();
	} if (direction === 'descending') {
		reorderedList = theList.sort().reverse();
	} else {
		reorderedList = theList;
	}

	return reorderedList;
};