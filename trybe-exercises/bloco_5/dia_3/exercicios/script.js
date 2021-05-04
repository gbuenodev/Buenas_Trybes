function createDaysOfTheWeek() {
  const weekDays = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ];
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.
let ulDays = document.querySelector('#days');

const dezDaysList = [
  29,
  30,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
];

for (let index = 0; index < dezDaysList.length; index += 1) {
  let item = dezDaysList[index];
  let ulItem = document.createElement('li');
  ulItem.innerText = item;
  ulItem.className = 'day';

  if (ulItem.innerText == 24 || ulItem.innerText == 31) {
    ulItem.classList.add('day', 'holiday');
  } else if (
    ulItem.innerText == 4 ||
    ulItem.innerText == 11 ||
    ulItem.innerText == 18
  ) {
    ulItem.classList.add('day', 'friday');
  } else if (ulItem.innerText == 25) {
    ulItem.classList.add('day', 'holiday', 'friday');
  }

  ulDays.appendChild(ulItem);
}

let buttonsContainer = document.querySelector('.buttons-container');

const createButton = (buttonText) => {
  let button = document.createElement('button');
  button.innerText = buttonText;
  button.className = 'btn-holiday';
  buttonsContainer.appendChild(button);
};

createButton('Feriados');
