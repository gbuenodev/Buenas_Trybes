const testes = require('./exercicio_dia3');
jest.mock('./exercicio_dia3');

describe('Exercicios Bloco 10 - Dia 3 - Parte Prática', () => {
  describe('Testa função generateRandomNumber', () => {
    it('Testa função mockando o valor retornado', () => {
      testes.generateRandomNumber = jest.fn().mockReturnValue(10);

      testes.generateRandomNumber();
      expect(testes.generateRandomNumber).toHaveBeenCalled();
      expect(testes.generateRandomNumber).toHaveBeenCalledTimes(1);
      expect(testes.generateRandomNumber()).toBe(10);
      testes.generateRandomNumber.mockRestore();
    });

    it('Testa mock muito doido e sem sentido', () => {
      testes.generateRandomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);

      expect(testes.generateRandomNumber(10, 2)).toBe(5);
      expect(testes.generateRandomNumber).toHaveBeenCalled();
      expect(testes.generateRandomNumber).toHaveBeenCalledTimes(1);
      expect(testes.generateRandomNumber).toHaveBeenCalledWith(10, 2);
      testes.generateRandomNumber.mockRestore();
    });

    it("Testa mock que faz menos sentido que o primeiro", () => {
      testes.generateRandomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);

      expect(testes.generateRandomNumber(2, 3, 4)).toBe(24);
      expect(testes.generateRandomNumber).toHaveBeenCalled();
      expect(testes.generateRandomNumber).toHaveBeenCalledTimes(1);
      expect(testes.generateRandomNumber).toHaveBeenCalledWith(2, 3, 4);
    });

    it("Testa mock que definitivamente não tem sentido algum", () => {
      testes.generateRandomNumber.mockReset();
      expect(testes.generateRandomNumber).toHaveBeenCalledTimes(0);

      testes.generateRandomNumber.mockImplementation(a => a * 2);

      expect(testes.generateRandomNumber(5)).toBe(10);
      expect(testes.generateRandomNumber).toHaveBeenCalled();
      expect(testes.generateRandomNumber).toHaveBeenCalledTimes(1);
      expect(testes.generateRandomNumber).toHaveBeenCalledWith(5);
    });
  });

  describe("testando implementações", () => {
    test("mockando função para receber um parâmetro e retornar em caixa baixa", () => {
      testes.firstFunction.mockImplementation(a => a.toLowerCase());

      expect(testes.firstFunction("UPPERCASE")).toBe("uppercase");
      expect(testes.firstFunction).toHaveBeenCalled();
      expect(testes.firstFunction).toHaveBeenCalledTimes(1);
      expect(testes.firstFunction).toHaveBeenCalledWith("UPPERCASE");
    });

    test("mockando função que recebe um parâmetro e retorna a última letra", () => {
      testes.secondFunction.mockImplementation(a => a.charAt(a.length - 1));

      expect(testes.secondFunction("letter")).toBe("r");
      expect(testes.secondFunction).toHaveBeenCalled();
      expect(testes.secondFunction).toHaveBeenCalledTimes(1);
      expect(testes.secondFunction).toHaveBeenCalledWith("letter");
    });

    test("mockando função que recebe 3 parâmetros e os concatena", () => {
      testes.thirdFunction.mockImplementation((a, b, c) => a.concat(b, c));

      expect(testes.thirdFunction("tr", "y", "be")).toBe("trybe");
      expect(testes.thirdFunction).toHaveBeenCalled();
      expect(testes.thirdFunction).toHaveBeenCalledTimes(1);
      expect(testes.thirdFunction).toHaveBeenCalledWith("tr", "y", "be");
    });
  });
});