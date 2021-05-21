let fruits = [3, 4, 10, 1, 12];
let sum = 0;

for (let index = 0; index < fruits.length; index +=1) {
    sum = sum + fruits[index];
}

if (sum > 15){
    console.log(sum)
} else {
    console.log('Valor menor que 16')
}


let n = 9;
let resultado = 100;
for (let i = 0; i <= n; i+= 1) {
    resultado -= i;
}
console.log(resultado);

