// Na linha 0, imprima 4 (n-1) espaços e 1 símbolos
// Na linha 1, imprima 3 (n-2) espaços e 2 símbolos
// Na linha 2, imprima 2 (n-3) espaços e 3 símbolos
// Na linha 3, imprima 1 (n-4) espaços e 4 símbolos
// Na linha 4, imprima 0 (n-5) espaços e 5 símbolos

let n = 5;
let simbolo = '*';
let linha = '';
let coluna = n;


for (let linhaIndex = 0; linhaIndex < n; linhaIndex += 1) {
	for (let colunaIndex = 0; colunaIndex < n; colunaIndex += 1) {
		if (colunaIndex < coluna - 1) {
			linha += '-';
		} else {
			linha += simbolo;
		}
	};
	console.log(linha);
	linha = '';
	coluna -= 1;
};
