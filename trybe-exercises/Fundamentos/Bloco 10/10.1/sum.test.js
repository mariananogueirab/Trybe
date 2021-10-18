const sum = require('./sum');

describe('when using sum function', () => {
  it('should return a + b', () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
  });

  it('should throw an Error', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow(/parameters must be numbers/);
  })
});
