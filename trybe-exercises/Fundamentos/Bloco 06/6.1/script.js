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

let nome = document.querySelector('#input-name');
let email = document.querySelector('#input-email');
let cpf = document.querySelector('#input-cpf');
let endereco = document.querySelector('#input-end');
let cidade = document.querySelector('#input-cidade');
let estado = document.querySelector('#input-estado');
let typeHouse = document.getElementsByName('casa-apt');
// tipo radio pega o input pelo name.

let dataInicio = document.querySelector('#data-inicio');
let buttonEnviar = document.querySelector('#button-submit');
buttonEnviar.addEventListener('click', (event) => {
  event.preventDefault();
  let nomeOk = false;
  let data = dataInicio.value;
  let dia = parseInt(data.slice(0,2));
  let mes = parseInt(data.slice(3,5));
  let ano = parseInt(data.slice(6));
  if (nome.value != null) {
    
    
    
  if (dia > 0 && dia <= 31 && mes > 0 && mes <= 12 && ano > 0) {}  
        
  }
  
})



