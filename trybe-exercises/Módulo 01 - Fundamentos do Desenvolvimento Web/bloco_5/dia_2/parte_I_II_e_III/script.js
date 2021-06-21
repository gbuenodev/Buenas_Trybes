document.querySelector('#elementoOndeVoceEsta');
document.querySelector('#elementoOndeVoceEsta').parentElement.style.color =
  'red';
document.querySelector('#primeiroFilhoDoFilho').innerText = 'Alouu, cheguei!';
document.querySelector('#pai').firstElementChild;
document.querySelector('#elementoOndeVoceEsta').previousElementSibling;
document.querySelector('#elementoOndeVoceEsta').nextSibling;
document.querySelector('#elementoOndeVoceEsta').nextElementSibling;
document.querySelector('#pai').children[2];

let irmao = document.createElement('div');
irmao.setAttribute('id', 'irmao');

document.querySelector('#pai').appendChild(irmao);

let filho = document.createElement('div');
filho.setAttribute('class', 'filho');

document.querySelector('#elementoOndeVoceEsta').appendChild(filho);

document.querySelector('#primeiroFilhoDoFilho').appendChild(filho);

document.querySelectorAll('.filho')[0].parentElement.parentElement
  .nextElementSibling;

document.querySelector('#quartoEUltimoFilho').remove();
document.querySelector('#terceiroFilho').remove();
document.querySelector('#primeiroFilho').remove();
document.querySelector('#segundoEUltimoFilhoDoFilho').remove();
document.querySelector('#irmao').remove();
document.querySelector('.filho').remove();
