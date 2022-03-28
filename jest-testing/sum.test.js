
const sum = require('./test.js');

test('returns random number', () => {
    expect(sum(1, 2)).toBe(3)
});