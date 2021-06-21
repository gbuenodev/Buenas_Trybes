let numeros = [];

const selecionaNumerosAleatorios = (n) => {
  for (let i = 0; i < n; i++) {
    numeros.push(Math.floor(Math.random()*1000));
  }
};

selecionaNumerosAleatorios(3);

console.log(numeros);

const verificaSeExistePar = (arr) => {
  let resultado = 0;
  for (let i = 0; i < arr.length; i++) {
    let par = arr[i] % 2 == 0 ? true : false;
    if (par) {
      resultado++
    }
  }
  return resultado;
};

let resultadoPar = verificaSeExistePar(numeros);

if (resultadoPar >= 1) {
  console.log('Existe pelo menos um número par.');
} else {
  console.log('Não existe número par.');
};

const verificaSeExisteImpar = (arr) => {
  let resultado = 0;
  for (let i = 0; i < arr.length; i++) {
    let impar = arr[i] % 2 > 0 ? true : false;
    if (impar) {
      resultado++
    }
  }
  return resultado;
};

let resultadoImpar = verificaSeExisteImpar(numeros);

if (resultadoImpar >= 1) {
  console.log('Existe pelo menos um número ímpar.');
} else {
  console.log('Não existe número ímpar.');
};
