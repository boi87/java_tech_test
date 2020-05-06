const longestPalindrome = require('../app/testFiles/longestPalindrome');

describe("longestPalindrome function", () => {
    test('anna kayak mom racecar sagas -> racecar', () => {
        expect(longestPalindrome('anna kayak mom racecar sagas')).toBe('racecar');
    });
    test('annass kayakss mom racecar sweagaews -> sweagaews', () => {
        expect(longestPalindrome('annass kayakss mom racecar sweagaews')).toBe('sweagaews');
    });
    test('pop yutuy -> yutuy', () => {
        expect(longestPalindrome('pop yutuy')).toBe('yutuy');
    });
});