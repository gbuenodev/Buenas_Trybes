const mudaTextoDoElemento = (tag, indexDaTag, texto) => {
  let elemento = document.getElementsByTagName(tag);
  elemento[indexDaTag].innerText = texto;
};

let novoTexto =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, nulla?';

mudaTextoDoElemento('p', 1, novoTexto);

const mudaCorDoElemento = (classe, indexDaSubclasse, propriedade) => {
  let elemento = document.getElementsByClassName(classe);
  elemento[indexDaSubclasse].style.backgroundColor = propriedade;
};

mudaCorDoElemento('main-content', 0, 'rgb(76,164,109)');

mudaCorDoElemento('center-content', 0, 'white');

let textoCorrigido = 'Exercício 5.1 - JavaScript';

mudaTextoDoElemento('h1', 0, textoCorrigido);

const logaTextoDosParagrafos = () => {
  let paragrafos = document.getElementsByTagName('p');
  for (let index = 0; index < paragrafos.length; index += 1) {
    console.log(paragrafos[index].innerText);
  }
};

logaTextoDosParagrafos();

const todosOsParagrafosCaixaAlta = () => {
  let paragrafos = document.getElementsByTagName('p');
  for (let index in paragrafos) {
    paragrafos[index].innerText = paragrafos[index].innerText.toUpperCase();
  }
};

todosOsParagrafosCaixaAlta();
