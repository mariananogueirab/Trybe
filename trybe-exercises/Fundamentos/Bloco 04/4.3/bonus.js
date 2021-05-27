let n = 7;
let ast = '';
let espacoDentro = '';
let espacoFora = '';
let linha = '';
let nLinha = Math.ceil(n/2);
console.log(nLinha)

for(let index = 0; index < nLinha; index += 1) {
    

    if (index === 0) {
        ast = '*';
       
        for (indexFora = 1; indexFora < nLinha; indexFora += 1) {
            espacoFora = espacoFora + ' ';
        }
        linha = espacoFora + ast + espacoFora;
    }
    if (index > 0 && index < nLinha -1) {
        espacoFora = espacoFora.substring(0, espacoFora.length -1);
        for (indexEsp = 0; indexEsp < index; indexEsp += 1) {
            espacoDentro = espacoDentro + ' ';
        }
        linha = espacoFora + ast + espacoDentro + ast + espacoFora;
    }
    if (index === (nLinha-1)) {
        for (indexAst = 1; indexAst < n; indexAst += 1) {
            ast = ast + '*';
        }
        espacoDentro = '';
        espacoFora = '';
        linha = ast
    }
    console.log(linha);
   
}
