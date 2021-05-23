// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

let linha = '';
let n = 5;

for (let index =0; index < n; index += 1) {
    for (let index2 =0; index2 < index +1; index2 += 1) {
        linha = linha + '*';
}
console.log(linha);
linha = '';
}
