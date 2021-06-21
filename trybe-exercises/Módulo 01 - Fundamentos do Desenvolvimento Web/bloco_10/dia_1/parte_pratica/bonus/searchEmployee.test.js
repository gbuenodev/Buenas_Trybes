const { professionalBoard, searchEmployee } = require('./searchEmployee');

describe('Testa a função searchEmployee', () => {
  it('Testa se searchEmployee é uma função', () => {
    expect(typeof searchEmployee).toBe('function');
  });
  it('Testa se o parâmetro firstName corresponde ao nome do funcionário encontrado', () => {
    expect(searchEmployee('4678-2', 'firstName')).toBe('Paul');
  });
  it('Testa se o parâmetro lastName corresponde ao último nome do funcionário encontrado', () => {
    expect(searchEmployee('4456-4', 'lastName')).toBe('Zuckerberg');
  });
  it('Testa se o parâmetro specialities corresponde às especialidades do funcionário encontrado', () => {
    expect(searchEmployee('9852-2-2', 'specialities')).toEqual(['Ruby', 'SQL']);
  });
  it('Testa a mensagem de erro ao passar parâmetro "id" equivocado', () => {
    expect(() => { searchEmployee('1256-5') }).toThrow(new Error('ID não identificada'));
  });
  it('Testa a mensagem de erro ao passar parâmetro "detail" equivocado', () => {
    expect(() => { searchEmployee('1256-4', 'Negasaver') }).toThrow(new Error('Informação indisponível'));
  });
});
