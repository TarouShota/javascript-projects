import combine from './sum'
const toSum = require('./sum');


test('returns a+b', () => {
    expect(toSum(1, 2)).toBe(3)
});
test('returns a*b', () => {
    expect(combine(4, 6)).toBe(24)
});
test('object assignment', () => {
    const data = { one: 1 };
    data['two'] = 2;
    expect(data).toEqual({ one: 1, two: 2 });
});

test('adding positive numbers is not zero', () => {
    for (let a = 1; a < 10; a++) {
        for (let b = 1; b < 10; b++) {
            expect(a + b).not.toBeLessThan(0);
        }
    }
});

test('adding floating point numbers', () => {
    const value = 0.1 + 0.2;
    //expect(value).toBe(0.3);           This won't work because of rounding error
    expect(value).toBeCloseTo(0.3); // This works.
});

test('using reg expres', () => {
    expect(/[01345678]/.test("in 1992")).toBeTruthy();
    expect(2 + 2).toBe(5);
    // expect(/[0-9]/.test("in 1992")).not.toBeFalsy;
})
// → true
// → true
test('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
});