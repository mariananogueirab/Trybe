// Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function palindromo (string) {
    for(let index = 0; index < string.length; index += 1) {
        let ultimaLetra = string[string.length - index -1];
        if (ultimaLetra != string[index]) {
            return false
        }
    }
    return true
}
console.log(palindromo('arara'))


// Crie uma função que receba um array de inteiros e retorne o índice do maior valor. Coloquei o num como o primeiro indice, pra caso tiverem só números negativos
function maiorValor (numeros) {
    let num = numeros[0];
    for ( let key in numeros) {
        if (numeros[key] > num) {
            return key
        }
    }
}
 console.log(maiorValor([10, 15, 3, 6, 9]))

// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
function biggerName(name) {
    let bigName = name[0];
    let nameArray = '';
    for (let index = 0; index < name.length; index += 1) {
        nameArray = name[index];
        if ( nameArray.length > bigName.length) {
            bigName = nameArray;

        } if (nameArray.length < bigName.length) {
            bigName = bigName;
        }
}
    return bigName
}
console.log(biggerName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));








function biggerName(name) {
    let bigName = name[0];
    let nameArray = '';
    let finalName = '';
    for (let index = 0; index < name.length; index += 1) {
        nameArray = name[index];
        if ( nameArray.length > bigName.length) {
            bigName = nameArray;
        } if (nameArray.length === bigName.length && nameArray != bigName){
            finalName = bigName + 'e' + finalName + ' e ' + nameArray;
        } if (nameArray.length < bigName.length) {
            bigName = bigName;
        }
}
    return finalName
}
console.log(biggerName(['José', 'Lucas', 'Nádia', 'Ana', 'Cairo', 'Joana']));


// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

