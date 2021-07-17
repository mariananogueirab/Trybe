const {
  getUserName,
  findUserById,
} = require('./async-await');

describe('when using getUserName function', () => {

  it('should return Paul', async () => {
    expect.assertions(1);
    await expect(getUserName(5)).resolves.toBe('Paul');
  });

  it('should return an error', async () => {
    expect.assertions(1);
    await expect(getUserName(1)).rejects.toEqual({ error: 'User with 1 not found.' })
  });
});