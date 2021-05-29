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
    const monthDaysList = document.querySelector('.days-container');

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
let buttonFridaysStatus = false;

let escutador = buttonFridays.addEventListener('click', addFriday);

function addFriday() {
    for (let index = 0; index < classFridays.length; index += 1) {
        classFridays[index].innerText = 'SEXTOU!!!';
        buttonFridaysStatus = true;
    } 
    /* if (buttonFridaysStatus === true) {
        classFridays[index].innerText = parseInt(daysItem[index].previousElementSibling.innerText, 10) + 1;
    }

    buttonFridaysStatus = !buttonFridaysStatus; */
}
// Exercício 6:



