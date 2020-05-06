const longestPalindrome = require('../app/testFiles/longestPalindrome');

describe("longestPalindrome function", () => {
    test('anna kayak mom racecar sagas -> racecar', () => {
        expect(longestPalindrome('anna kayak mom racecar sagas')).toBe('racecar');
    })
});