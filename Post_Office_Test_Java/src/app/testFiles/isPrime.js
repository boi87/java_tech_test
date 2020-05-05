const isPrime = (num) => {
	// check if num is 1 or 2
    if (num === 1) {
        return false;
    } else if (num === 2) {
        return true;
    } else {
    	// check dividing num to every number from 2 onwards gives 0 as remainder
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }
};


isPrime(12);