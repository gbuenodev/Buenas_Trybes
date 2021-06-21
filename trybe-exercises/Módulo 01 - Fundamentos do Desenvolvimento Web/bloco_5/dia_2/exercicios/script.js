let h1 = document.createElement('h1');
h1.innerHTML = 'Exercício 5.2 - JavaScript DOM';
document.body.appendChild(h1);

let mainDiv = document.createElement('div');
mainDiv.className = 'main-content';
document.body.appendChild(mainDiv);

let centerDiv = document.createElement('div');
centerDiv.className = 'center-content';
document.getElementsByClassName('main-content')[0].appendChild(centerDiv);

let paragraph = document.createElement('p');
paragraph.innerHTML =
  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta consequuntur voluptas sed reprehenderit officia at labore iste laudantium, tenetur sapiente.';
document.getElementsByClassName('center-content')[0].appendChild(paragraph);

let leftDiv = document.createElement('div');
leftDiv.className = 'left-content';
document.getElementsByClassName('main-content')[0].appendChild(leftDiv);

let rightDiv = document.createElement('div');
rightDiv.className = 'right-content';
document.getElementsByClassName('main-content')[0].appendChild(rightDiv);

let image = document.createElement('img');
image.src = 'https://picsum.photos/200';
image.className = 'small-image';
document.getElementsByClassName('left-content')[0].appendChild(image);

let unorderedList = document.createElement('ul');

document.getElementsByClassName('right-content')[0].appendChild(unorderedList);

let unorderedListItems = [
  'Um',
  'Dois',
  'Três',
  'Quatro',
  'Cinco',
  'Seis',
  'Sete',
  'Oito',
  'Nove',
  'Dez',
];

let numbersList = document.querySelector('.right-content ul');

for (let index = 0; index < unorderedListItems.length; index += 1) {
  let item = unorderedListItems[index];

  let newItem = document.createElement('li');
  newItem.innerText = item;

  numbersList.appendChild(newItem);

  if (item.includes('Dez') || item.includes('Nove')) {
    numbersList.removeChild(newItem);
  }
}

let subtitle1 = document.createElement('h3');
let subtitle2 = document.createElement('h3');
let subtitle3 = document.createElement('h3');

document.getElementsByClassName('main-content')[0].appendChild(subtitle1);
document.getElementsByClassName('main-content')[0].appendChild(subtitle2);
document.getElementsByClassName('main-content')[0].appendChild(subtitle3);

h1.className = 'title';
subtitle1.className = 'description';
subtitle2.className = 'description';
subtitle3.className = 'description';

document.getElementsByClassName('main-content')[0].removeChild(leftDiv);

let div = document.getElementsByClassName('right-content')[0];
div.style.marginRight = 'auto';

document.getElementsByClassName(
  'center-content'
)[0].parentElement.style.backgroundColor = 'green';
