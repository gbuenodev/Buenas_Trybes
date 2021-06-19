const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

describe('Exercicio 01', () => {
  it('Testa se função uppercase converte minúsculas em maíusculas', (done) => {
    uppercase('AloAlo', (str) => {
      expect(str).toBe('ALOALO');
      done();
    });
  });
});