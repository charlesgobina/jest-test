const calc = require('./calc.js');

describe('calculator operations', () => {
    test('addition', () => {
        expect(calc.add(2,3)).toBe(5);
        expect(calc.add(7,10)).toBe(17);
        expect(calc.add(90,10)).toBe(100);
    });

    test('subtract', () => {
        expect(calc.subtract(2,3)).toBe(-1)
        expect(calc.subtract(10,3)).toBe(7)
        expect(calc.subtract(90,10)).toBe(80)
    });

    test('multiply', () => {
        expect(calc.multiply(2,3)).toBe(6)
        expect(calc.multiply(10,3)).toBe(30)
        expect(calc.multiply(90,10)).toBe(900)
    });

    test('divide', () => {
        expect(calc.divide(10,2)).toBe(5)
        expect(calc.divide(30,3)).toBe(10)
        expect(calc.divide(90,10)).toBe(9)
    });
})