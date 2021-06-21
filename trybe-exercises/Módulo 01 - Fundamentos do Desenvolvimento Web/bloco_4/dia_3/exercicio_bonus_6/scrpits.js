let n = parseInt(Math.random()*1000);
let divisores = 0;

for (let index = 1; index <= n; index += 1) {
	if (n % index === 0) {
		divisores += 1;
	};
};

if (divisores == 2) {
	console.log (`${n} é um número primo`);
} else {
	console.log (`${n} não é um número primo`);
};