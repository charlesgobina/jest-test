const caps = require('./caps.js')

test('Check if first letter is capitalized', () => {
    expect(caps('Charles')).toBe(true)
    expect(caps('charles')).toBe(false)
})