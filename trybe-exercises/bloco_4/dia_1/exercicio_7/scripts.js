let nota = Math.floor(Math.random()*100);

console.log(nota);

const conceito = (nota) => {
  if (nota >= 90 && nota <= 100) {
      return 'A';
  } else if (nota >= 80 && nota < 90) {
      return 'B';
  } else if (nota >= 70 && nota < 80) {
      return 'C';
  } else if (nota >= 60 && nota < 70) {
      return 'D';
  } else if (nota >= 50 && nota < 60) {
      return 'E';
  } else if (nota >= 0 && nota < 50) {
      return 'F';
  } else {
      return 'Erro: Nota Inválida.';
  }
};

console.log(conceito(nota));