const countBinarySubstrings = require('../code/countBinarySubstrings.js')

test('countBinarySubstrings: count', () => {
    expect(countBinarySubstrings('00110011')).toBe(6)
})