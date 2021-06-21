// 01
const emailGenerator = (nomeCompleto) => {
  const email = nomeCompleto.toLowerCase().split(' ').join('_');
  return {
    nomeCompleto,
    email: `${email}@trybe.com`
  };
}

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees(emailGenerator));

// 02
const resultado = (numero, sorteio) => numero === sorteio;

const sorteiaNúmero = (numero, resultado) => {
  const sorteio = Math.ceil(Math.random() * 5);
  console.log(sorteio);
  return resultado(sorteio, numero) ? 'Parabéns você ganhou!' : 'Tente novamente';
};

console.log(sorteiaNúmero(2, resultado));

//03
const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checaRespostas = (gabarito, respostas, callback) => {
  let contador = 0;
  for (let index = 0; index < gabarito.length; index += 1) {
    const parcial = callback(gabarito[index], respostas[index]);
    contador += parcial;
  }
  return `Pontuação: ${contador}`;
};

const computaPontos = (gabarito, respostas) => {
  if (gabarito === respostas) {
    return 1;
  } else if (gabarito === 'N.A') {
    return 0;
  }
  return -0.5;
};

console.log(checaRespostas(rightAnswers, studentAnswers, computaPontos));
