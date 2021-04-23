let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let newArray = [];
let resultado = 0;

for (let index = 1; index < array.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
        resultado = array[index] * array[secondIndex];
    }
    newArray.push(resultado);
  }

console.log(newArray);