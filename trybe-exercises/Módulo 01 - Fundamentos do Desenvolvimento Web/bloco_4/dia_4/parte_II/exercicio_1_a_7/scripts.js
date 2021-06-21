// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1]; .
// Valor esperado no retorno da função: 4 .

let array = [2, 3, 6, 7, 10, 1];

const checaMaior = (array) => {
    let maiorNumero = array[0];
    for (let numero in array) {
        if (array[numero] > maiorNumero) {
            maiorNumero = array[numero]
        };
    };
    return array.indexOf(maiorNumero);
};

console.log(checaMaior(array));

// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
// Valor esperado no retorno da função: 6 .

let array = [2, 4, 6, 7, 10, 0, -3];

const checaMaior = (array) => {
    let menorNumero = array[0];
    for (let numero in array) {
        if (array[numero] < menorNumero) {
            menorNumero = array[numero]
        };
    };
    return array.indexOf(menorNumero);
};

console.log(checaMaior(array));

// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
// Valor esperado no retorno da função: Fernanda.

let array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

const checaMaiorNome = (array) => {
    let maiorNome = array[0].length;
    let indiceMaiorNome = 0;
    for (let nome in array) {
        if (array[nome].length > maiorNome) {
            maiorNome = array[nome].length;
            indiceMaiorNome = nome;
        };
    };
    return array[indiceMaiorNome];
};

console.log(checaMaiorNome(array));

// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
// Valor esperado no retorno da função: 2 .

// let array = [2, 3, 2, 5, 8, 2, 3];

const checaRepeticao = (array) => {
    let maiorContagem = 0;
    let indiceMaiorRepeticao = 0;
    for (let index = 0; index < array.length - 1; index += 1) {
        let contagem = 0;
        for (let secondIndex = 0; secondIndex < array.length - 1; secondIndex += 1) {
            if (array[secondIndex] === array[index]) {
                contagem += 1;
            };
        };
        if (contagem > maiorContagem) {
            maiorContagem = contagem;
            indiceMaiorRepeticao = index;
        };
    };
    return array[indiceMaiorRepeticao];
};

console.log(checaRepeticao(array));

// Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
// Valor de teste: N = 5 .
// Valor esperado no retorno da função: 1+2+3+4+5 = 15 .

let n = 5;

const somaAritimetica = (n) => {
    let soma = 0;
    for (let index = 0; index <= n; index += 1) {
        soma += index;
    };
    return soma;
};

console.log(somaAritimetica(n));

// Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
// Valor de teste: 'trybe' e 'be'
// Valor esperado no retorno da função: true
// verificaFimPalavra('trybe', 'be') ;
// Retorno esperado: true
// verificaFimPalavra('joaofernando', 'fernan') ;
// Retorno esperado: false

let palavra = 'trybe';
let fimPalavra = 'be';

const verificaFimPalavra = (palavra, fimPalavra) => {
    let verifica = fimPalavra == palavra.slice(((palavra.length) - (fimPalavra.length)), palavra.length) ? true : false
    return verifica;        
};

console.log(verificaFimPalavra(palavra, fimPalavra));