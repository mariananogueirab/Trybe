const myRemove = require('./myRemove');

describe('whent using myRemove function', () => {
  it('should remove the second parameter', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
});