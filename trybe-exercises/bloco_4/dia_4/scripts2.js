let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge'
};

for (name in names) {
  console.log('Olá ' + names[name]);
};

let carro = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for (spec in carro) {
  console.log(spec, carro[spec]);
};
