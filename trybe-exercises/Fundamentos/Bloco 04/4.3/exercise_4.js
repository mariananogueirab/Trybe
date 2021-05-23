let n = 5;
let ast = '';
let espaco = '';
let linha = '';
let nLinha = Math.ceil(n/2);

for(let index = 0; index < nLinha; index += 1) {
    if (index <= 0) {
        ast = '*';
       for (indexEsp = (n-1)/2; indexEsp > 0; indexEsp -= 1) {
            espaco = espaco + ' ';
        } 
    } else if (index > 0 && index < nLinha) {
        ast = ast + '*' + '*';
        espaco = - ' ';
    }
    if (index >= nLinha) {
        espaco = '';
    }
    linha = espaco + ast + espaco
    console.log(linha);
}
