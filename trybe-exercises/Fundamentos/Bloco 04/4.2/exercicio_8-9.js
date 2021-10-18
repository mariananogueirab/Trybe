// 8 - Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

let array = [];

for (let index = 1; index <= 25; index +=1) {
    array.push(index)
}
console.log(array)

// 9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 

for (let index1 = 0; index1 < array.length; index1 += 1) {
    console.log(array[index1]/2);
}