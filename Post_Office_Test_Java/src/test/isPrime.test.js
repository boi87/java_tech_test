const isPrime = require('../app/testFiles/isPrime');

describe("isPrime function", () => {
    test('12 -> false', () => {
        expect(isPrime(12)).toBe(false);
    })
});