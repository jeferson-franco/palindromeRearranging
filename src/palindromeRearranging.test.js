const solution = require('./palindromeRearranging.js');

test('test 1', () => {
    expect(solution('aabb')).toBe(true);
});

test('test 2', () => {
    expect(solution('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabc')).toBe(false);
});

test('test 3', () => {
    expect(solution('abbcabb')).toBe(true);
});

test('test 4', () => {
    expect(solution('zyyzzzzz')).toBe(true);
});

test('test 5', () => {
    expect(solution('z')).toBe(true);
});

test('test 6', () => {
    expect(solution('zaa')).toBe(true);
});

test('test 7', () => {
    expect(solution('abca')).toBe(false);
});

test('test 8', () => {
    expect(solution('abcad')).toBe(false);
});

test('test 9', () => {
    expect(solution('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbccccaaaaaaaaaaaaa')).toBe(false);
});

test('test 10', () => {
    expect(solution('abdhuierf')).toBe(false);
});
