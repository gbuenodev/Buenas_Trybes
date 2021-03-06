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

// Exercício 1:
const ulDays = document.querySelector('#days');

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;

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

// Exercício 2:
const buttonsContainer = document.querySelector('.buttons-container');

const createButton = (buttonText, buttonID) => {
  let button = document.createElement('button');
  button.innerText = buttonText;
  button.id = buttonID;
  buttonsContainer.appendChild(button);
};

createButton('Feriados', 'btn-holiday');

// Exercício 3:
const captureHolidayButton = document.querySelector('#btn-holiday');
const captureHolidays = document.querySelectorAll('.holiday');

captureHolidayButton.addEventListener('click', () => {
  for (let index = 0; index < captureHolidays.length; index += 1) {
    if (captureHolidays[index].style.backgroundColor === '') {
      captureHolidays[index].style.backgroundColor = 'lightgreen';
    } else {
      captureHolidays[index].style.backgroundColor = '';
    }
  }
});

// Exercício 4:
createButton('Sexta-Feira', 'btn-friday');

// Exercício 5: 
const captureFridayButton = document.querySelector('#btn-friday');
const captureFridays = document.querySelectorAll('.friday');

const captureFridayDaysNumbers = () => {
  let fridayNumbersArray = [];
  for (let index = 0; index < captureFridays.length; index += 1) {
    fridayNumbersArray.push(parseInt(captureFridays[index].innerText));
  }
  return fridayNumbersArray;
}

let numbers = captureFridayDaysNumbers();
let fridayText = 'SEXTOU !!';

captureFridayButton.addEventListener('click', () => {
  for (let index = 0; index < captureFridays.length; index += 1) {
    if ((captureFridays[index].innerText) === fridayText) {
      captureFridays[index].innerText = numbers[index];
    } else {
      captureFridays[index].innerText = fridayText;
    }
  }
});

// Exercício 6:
const captureMonthDays = document.querySelectorAll('.day');

for (let index = 0; index < captureMonthDays.length; index += 1) {
    captureMonthDays[index].addEventListener('mouseover', (event) => {
    event.target.style.fontWeight = '600';
  });
}

for (let index = 0; index < captureMonthDays.length; index += 1) {
  captureMonthDays[index].addEventListener('mouseout', (event) => {
    event.target.style.fontWeight = '200';
  });
}

// Exercício 7:
const captureDivMyTasks = document.querySelector('.my-tasks');

const adicionaTarefa = (texto) => {
  let newSpan = document.createElement('span');
  newSpan.innerText = texto;
  captureDivMyTasks.appendChild(newSpan);
};

adicionaTarefa('Estudar WebDevelopment');

// Exercício 8:
const adicionaLegendaComCor = (cor) => {
  let newDiv = document.createElement('div');
  newDiv.className = 'task';
  newDiv.style.backgroundColor = cor;
  captureDivMyTasks.appendChild(newDiv);
}

adicionaLegendaComCor('red');

// Exercício 9:
const captureDivTask = document.querySelectorAll('.task');

for (let index = 0; index < captureDivTask.length; index += 1) {
  captureDivTask[index].addEventListener('click', (event) => {
    if (event.target.className === 'task') {
      event.target.className = 'task selected';
    } else {
    event.target.className = 'task'
    }
  });
}

// Exercício 10:  
for (let index = 0; index < captureMonthDays.length; index += 1) {
  captureMonthDays[index].addEventListener('click', (event) => {
  const captureDivTaskColor = document.querySelector('.task.selected').style.backgroundColor;
    if(event.target.style.color === captureDivTaskColor) {
      event.target.style.color = '';
    } else {
      event.target.style.color = captureDivTaskColor;
    }
  });
};

// Bônus:
const input = document.querySelector('#task-input');
const addButton = document.querySelector('#btn-add');
const appointmentList = document.querySelector('.task-list');

addButton.addEventListener('click', () => {
  if (input.value.length > 0) {
    let newAppointment = document.createElement('li');
    newAppointment.innerText = input.value;
    appointmentList.appendChild(newAppointment);
    input.value = '';
  } else {
    alert('Nenhum valor foi digitado.');
  }
});

input.addEventListener ('keyup', (event) => {
  if (event.keyCode === 13 && input.value.length > 0) {
    let newAppointment = document.createElement('li');
    newAppointment.innerText = input.value;
    appointmentList.appendChild(newAppointment);
    input.value = '';
  }
});
