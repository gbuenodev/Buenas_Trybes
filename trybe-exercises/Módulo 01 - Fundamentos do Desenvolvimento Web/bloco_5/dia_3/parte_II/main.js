const divUm = document.getElementById('divUm');
const divDois = document.getElementById('divDois');
const divTres = document.getElementById('divTres');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');

//  Crie uma função que adicione a classe 'tech' ao elemento selecionado;
// 1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

const classeTech = (elemento) => {
  let todosComTech = document.querySelector('.tech');
  todosComTech.classList.remove('tech');
  elemento.target.className = 'tech';
};

divUm.addEventListener('click', classeTech);
divDois.addEventListener('click', classeTech);
divTres.addEventListener('click', classeTech);

//  Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

const mudaTextoTech = (texto) => {
  let tech = document.querySelector('.tech');
  let input = document.querySelector('#input');
  input.addEventListener('keypress', function (tecla) {
    if (tecla.key === 'Enter') {
      tech.innerHTML = texto.target.value;
    }
  });
};

input.addEventListener('input', mudaTextoTech);

//  Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 1. Que tal redirecionar para seu portifólio?

const redireciona = () => {
  window.open('https://github.com/gbuenodev', '_blank');
};

myWebpage.addEventListener('dblclick', redireciona);

//  Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

const mudaCor = () => {
  let titulo = document.querySelector('#mySpotrybefy');
  titulo.style.color = 'green';
};

const voltaCor = () => {
  let titulo = document.querySelector('#mySpotrybefy');
  titulo.style.color = 'white';
};

myWebpage.addEventListener('mouseover', mudaCor);
myWebpage.addEventListener('mouseleave', voltaCor);

//Segue abaixo um exemplo do uso de event.target:

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

divUm.addEventListener('dblclick', resetText);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.
