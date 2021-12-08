const stringLength = require('./stringlength')

test('show lenght of string', () => {
    expect(stringLength('charlie')).toBe(true);
    expect(stringLength('charlieracecar')).toBe(false);
  });
