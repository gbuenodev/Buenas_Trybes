const salario = ((Math.floor(Math.random() * (7000 * 100 - 100) + 100 * 100)/100) + 1000).toFixed(2);

console.log(`Salário: ${salario}`);

const calculaINSS = (salario) => {
    if (salario <= 1556.94) {
        return (salario * 0.08).toFixed(2);
    } else if (salario > 1556.94 && salario <= 2594.92) {
        return (salario * 0.09).toFixed(2);
    } else if (salario > 2594.92 && salario <= 5189.82) {
        return (salario * 0.11).toFixed(2);
    } else {
        return 570.88;
    }
};

const INSS = calculaINSS(salario);

console.log(`INSS: ${INSS}`);

const salarioBase = salario - INSS;

const calculaIR = (salarioBase) => {
    if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
        return ((salarioBase * 0.075) - 142.80).toFixed(2);       
    } else if (salarioBase > 2826.65 && salarioBase <= 3751.05) {
        return ((salarioBase * 0.15) - 354.80).toFixed(2);
    } else if (salarioBase > 3751.05 && salarioBase <= 4664.68) {
        return ((salarioBase * 0.225) - 636.13).toFixed(2); 
    } else {
        return ((salarioBase * 0.275) - 869.36).toFixed(2);
    }
};

const IR = calculaIR(salarioBase);

console.log(`IR: ${IR}`);

const salarioLiquido = (salarioBase - IR).toFixed(2);

console.log(`Salário Líquido: ${salarioLiquido}`);