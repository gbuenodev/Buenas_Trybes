// Exercício 01
const fatorial = (num) => num === 0 ? 1 : (num * fatorial(num - 1));

console.log(fatorial(5));

// Exercício 02
const longestWord = (str) => str.split(' ').reduce((longest, current) => current.length > longest.length ? current : longest);

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));

// Exercício 04.1
const funcaoReplace = (str) => str.replace('x', 'Bebeto');

console.log(funcaoReplace('Tryber x aqui!'));

// Exercício 04.2

const string1 = funcaoReplace('Tryber x aqui!');
const skills = ['JS', 'HTML', 'CSS', 'SQL', 'GIT'];

const orderSkills = (str) => {
  skills.sort();
  return `${str} Minhas cinco principais habilidades são:
  - ${skills[0]}
  - ${skills[1]}
  - ${skills[2]}
  - ${skills[3]}
  - ${skills[4]}`
};

console.log(orderSkills(string1));