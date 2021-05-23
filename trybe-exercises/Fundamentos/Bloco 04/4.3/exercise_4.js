let n = 5;
let ast = '';
let espaco = '';
let subEspaco = espaco.substring();
let linha = '';
let nLinha = Math.ceil(n/2);

for(let index = 0; index < nLinha; index += 1) {
    if (index === 0) {
        ast = '*';
       for (indexEsp = (n-1)/2; indexEsp > 0; indexEsp -= 1) {
            espaco = espaco + '-';
        } 
    }
    if (index > 0 && index < nLinha) {
        ast = ast + '*' + '*';
        if (index >= nLinha-1) {
            espaco = '';
        } else {
            espaco = espaco.substring(0,espaco.length-1);
    }
    }
    linha = espaco + ast + espaco
    console.log(linha);
}
