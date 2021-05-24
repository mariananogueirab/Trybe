let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1 - Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

for (let index = 0; index < numbers.length; index +=1) {
    console.log(numbers[index]);
}

// 2 - Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

let sum = 0;

for (let index1 = 0; index1 < numbers.length; index1 += 1) {
    sum = sum + numbers[index1];
}

console.log(sum);

// 3 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let media = sum / numbers.length
console.log(media)

// 4 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

if (media > 20) {
    console.log('Valor maior que 20');
} else {
    console.log('Valor menor ou igual a 20');
}

// 5 - Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let maiorValor = 0;
for (let index2 = 0; index2 < numbers.length; index2 +=1) {
    if (numbers[index2] > maiorValor) {
        maiorValor = numbers[index2];
    }
}
console.log(maiorValor)


// 6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let numImpar = 0;
for (let index3 = 0; index3 < numbers.length; index3 +=1) {
    if (numbers[index3]%2 != 0) {
        numImpar+=1
    }
}

console.log(numImpar)

// 7 - Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let menorValor = maiorValor;
for (let index4 = 0; index4 < numbers.length; index4 +=1) {
    if (numbers[index4] < menorValor) {
        menorValor = numbers[index4];
    }
}
console.log(menorValor)

