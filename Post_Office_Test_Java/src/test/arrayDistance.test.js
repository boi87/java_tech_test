const arrayDistance = require('../app/testFiles/arrayDistance');

describe("arrayDistance function", () => {
    test('[4, 56, 34, 66] -> 10', () => {
        expect(arrayDistance([4, 56, 34, 66])).toBe(10);
    });
    test('[1, 5, 99, 110] -> 4', () => {
        expect(arrayDistance([1, 5, 99, 110])).toBe(4);
    });
    test('empty arr -> err message', () => {
        expect(arrayDistance([])).toBe('Please pass a valid array (min. length 2).');
    });
});