const isPrime = require('../app/testFiles/isPrime');

describe("isPrime function", () => {
    test('12 -> false', () => {
        expect(isPrime(12)).toBe(false);
    });
    test('1 -> false', () => {
        expect(isPrime(1)).toBe(false);
    });
    test('2 -> true', () => {
        expect(isPrime(2)).toBe(true);
    });
    test('17 -> true', () => {
        expect(isPrime(17)).toBe(true);
    });
});