const arrayDistance = (arr) => {
	const distances = [];

	// check we have at least 2 elements in the array
    if (arr.length > 1) {
        // sort arr in ascending order
        const sorted = arr.sort((a, b) => a - b);
        // loop and fill distances array
        for (var i = 0; i < sorted.length - 1; i++) {
            distances.push(sorted[i + 1] - sorted[i]);
        }
        // sort distances arr in ascending order and return first value
        return distances.sort((a, b) => a - b)[0];
    } else {
        return 'Please pass a valid array (min. length 2).'
    }
};

module.exports = arrayDistance;