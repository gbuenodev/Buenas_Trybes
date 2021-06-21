let n = 7;
let simbolo = '*';
let linha = '';
let meio = Math.floor(n / 2);
let controleEsq = meio;
let controleDir = meio;


for (let linhaIndex = 0; linhaIndex < n; linhaIndex += 2) {
	for (let colunaIndex = 0; colunaIndex < n; colunaIndex += 1) {
		if (colunaIndex == controleEsq || colunaIndex == controleDir || linhaIndex == n - 1) {
			linha += simbolo;
		} else {
			linha += ' ';
		}
	};
	console.log(linha);
	linha = '';
  controleDir += 1;
  controleEsq -= 1;
};
