const rString = require('./rString');

test('Properly reverse a string', () => {
    expect(rString('racecar')).toBe('racecar');
    expect(rString('table')).toBe('elbat');
})