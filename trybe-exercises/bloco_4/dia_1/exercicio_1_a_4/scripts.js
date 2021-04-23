let a = Math.floor(((Math.random() < 0.5 ? -1 : 1) * Math.random())*10);
let b = Math.floor(((Math.random() < 0.5 ? -1 : 1) * Math.random())*10);
let c = Math.floor(((Math.random() < 0.5 ? -1 : 1) * Math.random())*10);

console.log(`Valor de a: ${a} || Valor de b: ${b} || Valor de c: ${c}`);

const adicao = a + b;
console.log(`a + b = ${adicao}`);
const subtracao = a - b;
console.log(`a - b = ${subtracao}`);
const multiplicacao = a * b;
console.log(`a * b = ${multiplicacao}`);
const divisao = a / b;
console.log(`a / b = ${divisao}`);
const modulo = a % b;
console.log(`a % b = ${modulo}`);

const checaMaior = a > b ? 'A' : 'B';
console.log(`O maior número entre a e b: ${checaMaior}`);

const checaMaior2 = (a,b,c) => {
  if (a > b && a > c) {
      console.log('O maior número entre a, b e c: A');
  } else if (b > a && b > c) {
      console.log('O maior número entre a, b e c: B');
  } else if (c > a && c > b) {
      console.log('O maior número entre a, b e c: C');
  } else {
      console.log('Um ou mais números são iguais entre a, b e c.');
  };
};

checaMaior2(a,b,c);

const checaPositivo = (a) => {
  if (a > 0) {
    console.log('a é positivo');
  } else if (a < 0) {
    console.log('a é negativo');
  } else {
    console.log('a é igual a zero');
  };
};

checaPositivo(a);