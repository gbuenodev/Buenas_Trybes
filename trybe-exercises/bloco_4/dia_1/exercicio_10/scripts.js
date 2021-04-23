const custoProduto = 3000;
const valorVendaProduto = 5000;

const calculaLucro = (custo, venda) => {
    if (custo > 0 && venda > 0) {
        let lucro = venda - (custo * 1.2);
        return lucro;
    } else {
        return 'Entrada inválida';
    }
};

console.log(calculaLucro(custoProduto,valorVendaProduto));