const {encode, decode} = require('./encode-decode');

describe('when using encode function', () => {
  it('should be a function', () => {
    expect(encode).toBeDefined();
  });

  it('should return', () => {
    expect(encode('ala')).toBe('1l1');
    expect(encode('ele')).toBe('2l2');
    expect(encode('in')).toBe('3n');
    expect(encode('ovo')).toBe('4v4');
    expect(encode('nu')).toBe('n5');
  })

  it('should return the same number of caracteres', () => {
    expect(encode('mariana').length).toBe(7);
  })
});

describe('when using decode function', () => {
  it('should be a function', () => {
    expect(decode).toBeDefined();
  });

  it('should return', () => {
    expect(decode('1l1')).toBe('ala');
    expect(decode('2l2')).toBe('ele');
    expect(decode('3n')).toBe('in');
    expect(decode('4v4')).toBe('ovo');
    expect(decode('n5')).toBe('nu');
  })

  it('should return the same number of caracteres', () => {
    expect(decode('m1r31n1').length).toBe(7);
  })
});