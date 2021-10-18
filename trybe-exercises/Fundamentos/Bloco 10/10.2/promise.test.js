const {
  getUserName,
  findUserById,
} = require('./promise');

// Utilizando a sintaxe de Promise , faça um teste que verifique o resultado da função getUserName para o caso em que o usuário é encontrado, e também um teste para o caso em que o usuário não é encontrado.

describe('when using getUserName function', () => {

  it('should return Mark', () => {
    expect.assertions(1);
    return expect(getUserName(4)).resolves.toBe('Mark');
  })

  it('should return an error', () => {
    expect.assertions(1);
    return expect(getUserName(1)).rejects.toEqual({ error: 'User with 1 not found.' });
  })
})