const getRepos = require('./fetch');
const fetch = require('node-fetch');

describe('when using getRepos function', () => {

  it('should get a list of repositories names', () => {
    const url = 'https://api.github.com/orgs/tryber/repos';

  /*   return getRepos(url).then(result => {
      expect(result).toContain('sd-01-week4-5-project-todo-list');
      expect(result).toContain('sd-01-week4-5-project-meme-generator'); */
      expect.assertions(1)
      return expect(getRepos(url)).resolves.toContain('sd-01-week4-5-project-todo-list')
      return expect(getRepos(url)).resolves.toContain('sd-01-week4-5-project-meme-generator')
  });

  it('should get a list of repositories names', () => {
    const url = 'https://api.github.com/orgs/tryber/repos';
    expect.assertions(1)
      return expect(getRepos(url)).resolves.toContain('sd-01-week4-5-project-meme-generator')
  });
})