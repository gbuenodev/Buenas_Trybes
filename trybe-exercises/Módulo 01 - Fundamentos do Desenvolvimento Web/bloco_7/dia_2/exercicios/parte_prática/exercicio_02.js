const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const novoTurno = (obj, param, valor) => obj[param] = valor;
novoTurno(lesson2, 'turno', 'noite');

const listaKeys = (obj) => Object.keys(obj);
console.log(listaKeys(lesson1));

const tamanhoObjeto = (obj) => Object.keys(obj).length;
console.log(tamanhoObjeto(lesson1));

const chavesObjeto = (obj) => Object.values(obj);
console.log(chavesObjeto(lesson1));

const novoObjeto = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(novoObjeto);
