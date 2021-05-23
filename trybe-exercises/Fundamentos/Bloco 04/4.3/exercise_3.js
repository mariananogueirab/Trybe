// - Agora inverta o lado do triângulo

let espaco = '';
n = 5;
let asterisco = '';
let linha= '';

for (let indexFora = 0; indexFora < n; indexFora +=1) {
    for (let indexEspaco = n-1; indexEspaco > indexFora; indexEspaco -=1) {
    espaco = espaco + " ";
    }
    for (let indexAst = 0; indexAst < indexFora + 1; indexAst +=1){
        asterisco = asterisco + '*'
    }
    linha = espaco + asterisco;
    console.log(linha);
    espaco = '';
    asterisco = '';
    linha = '';
}