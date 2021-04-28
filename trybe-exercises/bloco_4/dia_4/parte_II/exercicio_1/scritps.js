const verificaPalindromo = (palavra) => {
  let palavraAoContrario = '';
  
  for (let ultimaLetra = palavra.length; ultimaLetra > 0; ultimaLetra -= 1) {
    palavraAoContrario += palavra[ultimaLetra - 1];
  };

  let palindromo = palavraAoContrario === palavra ? true : false;
  return palindromo;
};

console.log(verificaPalindromo('arara'));