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
  option.value = key;
  estados.appendChild(option);
}

let nome = document.querySelector('#input-name');

/* nome.addEventListener('keyup', () => {
  let nomeVerify = nome.value.trim();
  console.log(nomeVerify.length)
  if (nomeVerify.length > 0 && nomeVerify.length < 40) {
    return nome.value; 
  }
  alert('Nome Inválido');
}) */

let email = document.querySelector('#input-email');

/* email.addEventListener('keyup', () => {
  let emailVerify = email.value.trim();
  console.log(emailVerify);
  console.log(emailVerify.match(/@/g));
  if (emailVerify.length > 0 && emailVerify.length < 50) {
    return emailVerify;
  } 
    alert('E-mail inválido');
})
 */
let cpf = document.querySelector('#input-cpf');

let endereco = document.querySelector('#input-end');
let cidade = document.querySelector('#input-cidade');
let estado = document.querySelector('#input-estado');
let typeHouse = document.getElementsByName('casa-apt');
let resumo = document.querySelector('#resumo-curriculo');
let cargo = document.querySelector('#input-cargo');
let descricaoCargo = document.querySelector('#descricao-cargo');
let dataInicio = document.querySelector('#data-inicio');
let buttonEnviar = document.querySelector('#button-submit');
let buttonLimpar = document.querySelector('#button-limpar')
let todosOsDados = [nome, email, cpf, endereco, cidade, estado, typeHouse, resumo, cargo, descricaoCargo, dataInicio];
let consolidado = document.querySelector('#consolidado').innerText;

buttonEnviar.addEventListener('click', (event) => {
  event.preventDefault();
  if (nome.value.trim().length > 0 && nome.value.trim().length < 40) {
    if (email.value.trim().length > 0 && email.value.trim().length < 50) {
      if (cpf.value.trim().length === 11) {
        if (endereco.value.trim().length > 0 && endereco.value.trim().length < 200) {
          console.log('Tudo Ok');
         
        for(let index = 0; index < todosOsDados.length; index += 1) {
          consolidado += todosOsDados[index].value;
            

          }

          consolidado.innerText = consolidate()
          
        }
      }
    }
  } else {
    console.log('Nok');
  }




/*   let nomeOk = false;
  let data = dataInicio.value;
  let dia = parseInt(data.slice(0,2));
  let mes = parseInt(data.slice(3,5));
  let ano = parseInt(data.slice(6));
  if (nome.value != null) {
    
    
    
  if (dia > 0 && dia <= 31 && mes > 0 && mes <= 12 && ano > 0) {}  
        
  } */
  
})



