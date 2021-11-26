const { multiply } = require('../calculator');

describe('multiply', () => {
    test("should multiply two positive integers correctly", () => {
        const result = multiply(2, 2);
        expect(result).toBe(4);
    });

    test('Function is called with a negative and a positive integer. The value returned should be a negative number', () => {
        const result = multiply(3, -1);
        expect(result).toBe(-3);
    });

    test('Function is called with a negative and a positive integer. The value returned should be a negative number', () => {
        const result = multiply(3, -1);
        expect(result).toBe(-3);
    });

    test('Function is called with any number and a number 0. The value returned should be 0', () => {
        const result = multiply(5, 0);
        expect(result).toBe(0);
    })
})