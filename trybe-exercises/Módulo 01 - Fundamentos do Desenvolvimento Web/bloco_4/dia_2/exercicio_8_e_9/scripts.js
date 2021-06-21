let array = [];
for (let contagem = 1; contagem <= 25; contagem += 1) {
    array.push(contagem);
};

console.log(array);

for (let index = 0; index < array.length; index += 1) {
    let resultado = array[index] / 2;
    console.log(resultado);
};