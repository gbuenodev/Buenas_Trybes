let n = 5;

for (let index = 0; index < n; index += 1) {
    let linha = '';
    for (let coluna = 0; coluna < n; coluna += 1) {
        linha += '*';
    };
    console.log (linha);
};