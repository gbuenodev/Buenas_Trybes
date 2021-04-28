let numeroRomano = 'CIX';

let romanos = {
  I: 1,
  IV: 4,
  V: 5,
  IX: 9,
  X: 10,
  XL: 40,
  L: 50,
  XC: 90,
  C: 100,
  CD: 400,
  D: 500,
  CM: 900,
  M: 1000,
};


const converteRomanosEmInteiro = (numeroRomano) => {
  let arrayInteiros = [];
  for (let index = 0; index < numeroRomano.length; index += 1 ) {
    arrayInteiros.push(romanos[numeroRomano[index]]);
  };

  let primeiroNumeroDosPares = [];
  let segundoNumeroDosPares = [];

  for (let index = 0; index < arrayInteiros.length; index += 2) {
    primeiroNumeroDosPares.push(arrayInteiros[index]);
  };

  for (let secondIndex = 1; secondIndex < arrayInteiros.length; secondIndex += 2) {
    segundoNumeroDosPares.push(arrayInteiros[secondIndex]);
  };
  
  let soma = 0;

  for (numero in primeiroNumeroDosPares) {
    if (primeiroNumeroDosPares[numero] >= segundoNumeroDosPares[numero]) {
      soma += primeiroNumeroDosPares[numero] + segundoNumeroDosPares[numero];
    } else if ((primeiroNumeroDosPares[numero] < segundoNumeroDosPares[numero])) {
      soma += segundoNumeroDosPares[numero] - primeiroNumeroDosPares[numero];
    } else {
      soma += primeiroNumeroDosPares[numero];
    };
  }

  return soma;
};

console.log(converteRomanosEmInteiro(numeroRomano));
