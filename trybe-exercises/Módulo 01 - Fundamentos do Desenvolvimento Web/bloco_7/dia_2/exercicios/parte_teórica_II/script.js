const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const studentSkills = (obj) => {
  const skills = Object.keys(obj);
  for (skill in skills) {
    console.log(`${skills[skill]}, Nível: ${obj[skills[skill]]}`);
  }
};

console.log('Estudante 1');
studentSkills(student1);

console.log('Estudante 2');
studentSkills(student2);