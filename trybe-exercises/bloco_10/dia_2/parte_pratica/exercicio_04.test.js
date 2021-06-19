const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};

const URL = 'https://api.github.com/orgs/tryber/repos';

describe('Exercício 05', () => {
  it('Testa se a função retorna uma lista de respositórios', async () => {
    expect.assertions(2);
    const response = await getRepos(URL);
    expect(response).toContain('sd-01-week4-5-project-todo-list');
    expect(response).toContain('sd-01-week4-5-project-meme-generator');
  });
});
