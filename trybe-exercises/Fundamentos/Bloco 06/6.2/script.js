const estados = document.querySelector('#input-estado');
const estadosBR = {
AC: "Acre",
AL: "Alagoas",
AP: "Amapá",
AM: "Amazonas",
BA: "Bahia",
CE: "Ceará",
DF: "Distrito Federal",
ES: "Espírito Santo",
GO: "Goías",
MA: "Maranhão",
MT: "Mato Grosso",
MS: "Mato Grosso do Sul",
MG: "Minas Gerais",
PA: "Pará",
PB: "Paraíba",
PR: "Paraná",
PE: "Pernambuco",
PI: "Piauí",
RJ: "Rio de Janeiro",
RN: "Rio Grande do Norte",
RS: "Rio Grande do Sul",
RO: "Rondônia",
RR: "Roraíma",
SC: "Santa Catarina",
SP: "São Paulo",
SE: "Sergipe",
TO: "Tocantins",
}; 


for (let key in estadosBR) {
  const option = document.createElement('option');
  option.innerText = estadosBR[key];
  estados.appendChild(option);
}


let buttonEnviar = document.querySelector('#button-submit');

buttonEnviar.addEventListener('click', (event) => {
  event.preventDefault();
})


let picker = new Pikaday({ field: document.getElementById('datepicker') });