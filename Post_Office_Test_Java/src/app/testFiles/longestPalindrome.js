const longestPalindrome = (string) => {
    const palindromes = [];
    // split string to obtain substrings
    const splitString = string.split(' ');
    // check all substrings are palindromes first and add to palindromes array
    splitString.map(str =>
        str.split('').reverse().join('') === str ? palindromes.push(str) : null);

    // sort palindromes in ascending order based on their length
    palindromes.sort((palA, palB) => palB.split('').length - palA.split('').length);
    // return the longest
    return palindromes[0];
};

longestPalindrome('anna kayak mom racecar sagas');