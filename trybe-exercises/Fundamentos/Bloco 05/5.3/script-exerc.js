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

        if (index === 24 || index === 25 || index === 31) {
            daysItem.className += ' holiday'
        }

        if (index === 4 || index === 11 | index === 18 || index === 25) {
            daysItem.className += ' friday';
        }

        monthDaysList.appendChild(daysItem);
    }
};

createDaysOfTheMonth();

//Exercicio 2:

function createButtonFeriados (feriados) {
    let btnHoliday = document.createElement('button');
    btnHoliday.type = 'button';
    btnHoliday.innerText = feriados;
    btnHoliday.id = 'btn-holiday';
    let buttonsContainer = document.querySelector('.buttons-container');
    buttonsContainer.appendChild(btnHoliday);
}

createButtonFeriados('Feriados');

