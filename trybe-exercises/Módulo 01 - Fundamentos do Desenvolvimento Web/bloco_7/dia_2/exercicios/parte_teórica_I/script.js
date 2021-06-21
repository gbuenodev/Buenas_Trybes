const newProperty = (obj, newKey, newVal) => obj[newKey] = newVal;

const object = {};

newProperty(object, 'nome', 'gabriel');

console.log(object);