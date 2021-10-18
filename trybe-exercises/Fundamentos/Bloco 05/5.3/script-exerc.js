function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

//Exercício 1:

function createDaysOfTheMonth() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const monthDaysList = document.querySelector('#days');

    for (let index = 0; index < dezDaysList.length; index += 1) {
        let monthDays = dezDaysList[index];
        let daysItem = document.createElement('li');
        daysItem.innerText = monthDays;
        daysItem.className = 'day';

        if (index === 24 + 1 || index === 25 + 1 || index === 31 + 1) {
            daysItem.className += ' holiday'
        }

        if (index === 4 + 1 || index === 11 + 1 | index === 18 + 1 || index === 25 + 1) {
            daysItem.className += ' friday';
        }

        monthDaysList.appendChild(daysItem);
    }
};

createDaysOfTheMonth();

//Exercicio 2:
const buttonsContainer = document.querySelector('.buttons-container');

function createButtonFeriados (feriados) {
    let btnHoliday = document.createElement('button');
    btnHoliday.type = 'button';
    btnHoliday.innerText = feriados;
    btnHoliday.id = 'btn-holiday';
    buttonsContainer.appendChild(btnHoliday);
}

createButtonFeriados('Feriados');

// Exercício 3:

let buttonHolidays = document.querySelector('#btn-holiday');
let classHoliday = document.querySelectorAll('.holiday');  

buttonHolidays.addEventListener('click', function () {
    for (let index = 0; index < classHoliday.length; index += 1) {
       if (classHoliday[index].style.backgroundColor === 'green') {
       classHoliday[index].style.backgroundColor = 'rgb(238,238,238)';
       } else {
        classHoliday[index].style.backgroundColor = 'green';
       }
    }
});

// exercício 4:

 function createButtonFriday (friday) {
    let btnFriday = document.createElement('button');
    btnFriday.type = 'button';
    btnFriday.innerText = friday;
    btnFriday.id = 'btn-friday';
    buttonsContainer.appendChild(btnFriday);
}

createButtonFriday('Sexta-feira');

// Exercicio 5:

let classFridays = document.querySelectorAll('.friday');
let buttonFridays = document.querySelector('#btn-friday');
let buttonFridaysStatus = true;

buttonFridays.addEventListener('click', addFriday);

function addFriday() {
    for (let index = 0; index < classFridays.length; index += 1) {
        let statusInicial = classFridays[index].innerText;
        let statusFiday = 'SEXTOU!!!';

        if (buttonFridaysStatus === true) {
           classFridays[index].innerText = statusFiday;
           
        } else {
            classFridays[index].innerText = parseInt(document.getElementsByClassName('friday')[index].previousSibling.innerText) + 1;
        }
    } 
    buttonFridaysStatus = !buttonFridaysStatus;
}

// Exercício 6:

/* let classDay = document.querySelectorAll('.day');
console.log(classDay) */

function zoomDay (event) {
    console.log(event.target);
    event.target.style.fontSize = '40px';
}
let daysconteiner = document.querySelector('#days')
daysconteiner.addEventListener('mouseover', zoomDay);

function zoomOut (event) {
    console.log(event.target);
    event.target.style.fontSize = '18px';
}
// a função é filha do eventListener, ela pega o alvo do evento e muda ele, ai não precisa colocar pra ir um por um
daysconteiner.addEventListener('mouseout', zoomOut);

// Exercício 7:

let myTasks = document.querySelector('.my-tasks');

function addTasks (taskFrase) {
    let task = document.createElement('span');
    //let breakLine = document.createElement('br');
    task.innerText = taskFrase;
    myTasks.appendChild(task);
    //myTasks.appendChild(breakLine);
}

addTasks('Gym');
//addTasks('Study');

// Exercício 8:

function addLegend (cor) {
    let div = document.createElement('div');
    div.className = 'task';
    div.style.backgroundColor = cor;
    myTasks.appendChild(div);
}

addLegend('pink');

// Exercício 9:
let taskLegend = document.querySelector('.task');

function addClassSelected () {
    if (taskLegend.className === 'task') {
        taskLegend.className.add('selected');
    } else {
        taskLegend.className.remove('selected');
    }
}
// não tá funcionando;
taskLegend.addEventListener('click', addClassSelected);