/*const name = 'Mariana';
const birthCity = 'Volta Redonda';
const birthYear = 1994;
console.log(name, birthCity, birthYear)

let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(typeof patientId)
console.log(typeof isEnrolled)
console.log(typeof patientInfo)
console.log(typeof patientEmail)

let base = 5;
let altura = 8;
let area = base * altura;
console.log (area)
let perimetro = base + (altura*2);
console.log(perimetro)*/

let nota = 40;
let status;

if (nota >= 80) {
    //console.log('Parabéns você foi aprovado');
    status = 'aprovado';
}
else if (nota < 80 && nota >=60) {
    //console.log('Você está na nossa lista de espera');
    status = 'lista';
}
else {
    //console.log('Você foi reprovado');
    status = 'reprovado';
}

switch (status) {
    case 'aprovado':
        console.log('Parabéns você foi aprovado');
        break;
    
    case 'lista':
        console.log('Você está na nossa lista de espera');
        break;
    
    case 'reprovado':
        console.log('Você foi reprovado');
        break 
}
