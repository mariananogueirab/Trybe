const uppercase = require('./callback');

describe('when using uppercase function', () => {

  it('should return all uppercase', (done) => {
    uppercase('trybe', (str) => {
      expect(str).toBe('TRYBE');
      done();
    })
  });

});