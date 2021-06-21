let nota = Math.floor(Math.random()*100);

console.log(`Sua nota foi: ${nota}`);

const estadoCandidato = (nota) => {
  if (nota >= 80) {
      return 'aprovada';
  } else if (nota >= 60 && nota < 80) {
      return 'lista';
  } else {
      return 'reprovada';
  };
};

switch (estadoCandidato(nota)) {
  case 'aprovada':
    console.log('Parabéns, você foi aprovado(a)!');
    break;
  
  case 'lista':
    console.log('Você está na nossa lista de espera.');
    break;

  case 'reprovada':
    console.log('Você foi reprovado(a).');
    break;

  default:
    console.log('Não se aplica.');
};