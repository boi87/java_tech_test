const arrayDistance = require('../app/testFiles/arrayDistance');

describe("arrayDistance function", () => {
    test('[4, 56, 34, 66] -> 10', () => {
        expect(arrayDistance([4, 56, 34, 66])).toBe(10);
    })
});