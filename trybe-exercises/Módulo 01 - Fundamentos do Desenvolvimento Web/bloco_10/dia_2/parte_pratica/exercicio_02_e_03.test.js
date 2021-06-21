const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
    if (users[id]) {
      return resolve(users[id]);
    };
    return reject({ error: 'User with ' + id + ' not found.' });
  });
};

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
};

describe('Exercicio 02 - usando promise', () => {
  describe('Quando o id existe', () => {
    it('Testa se o nome é retornado', () => {
      expect.assertions(1);
      return expect(getUserName(4)).resolves.toBe('Mark');
    });
  });
  describe('Quando o id não existe', () => {
    it('Testa se o erro é retornado', () => {
      expect.assertions(1);
      return expect(getUserName(8)).rejects.toEqual({ error: 'User with 8 not found.' });
    });
  });
});

describe('Exercicio 02 - usando async / await', () => {
  describe('Quando o id existe', () => {
    it('Testa se o nome é retornado', async () => {
      expect.assertions(1);
      const response = await getUserName(4)
      expect(response).toBe('Mark');
    });
  });
  describe('Quando o id não existe', () => {
    it('Testa se o erro é retornado', async () => {
      expect.assertions(1);
      try {
        const response = await getUserName(8);
      } catch (error) {
        expect(error).toEqual({ error: 'User with 8 not found.' });
      }
    });
  });
});