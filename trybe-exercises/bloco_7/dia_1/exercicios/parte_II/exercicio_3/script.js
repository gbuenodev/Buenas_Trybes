const botao = document.querySelector('#botao');
const span = document.querySelector('#span');
let counter = 0;

botao.addEventListener('click', () => {
  counter += 1;
  span.innerHTML = counter;
});