// 01
// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Mamão', 'Abacaxi', 'Morango'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Acerola', 'Mexerica', 'Amora'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));

//02 
const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

const [saudacao, funcao] = saudacoes;

saudacoes[1](saudacoes[0]); // Olá
funcao(saudacao);
// Produza o mesmo resultado acima, porém utilizando array destructuring

// 03 
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo
[comida, animal, bebida] = [bebida, comida, animal];
console.log(comida, animal, bebida);

// 04
let numerosPares = [1, 3, 5, 6, 8, 10, 12];

console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo
[, , , ...numerosPares] = numerosPares;

console.log(numerosPares);

// 05
const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));

// 06
const getPosition = (latitude, longitude) => ({
  latitude,
  longitude,
});

console.log(getPosition(-19.8157, -43.9542));

// 07
const multiply = (number, value = 1) => {
  // Escreva aqui a sua função
  return number * value;
};

console.log(multiply(8));