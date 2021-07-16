const sum = require('./sum');

describe('when using sum function', () => {
  it('should return a + b', () => {
    expect(sum(4, 5)).toBe(9);
  });
});