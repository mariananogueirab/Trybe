// Para pegar o maior número:
const numbers = [50, 85, -30, 3, 15];

const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);

const bigger = numbers.reduce(getBigger, 0);
console.log(bigger); // 85


// Para somar os números pares:
const numbers2 = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const getEven = (number) => number % 2 === 0;
const sumPair = (currentValue, number) => currentValue + number;

const sumNumbers = (array) => array.filter(getEven).reduce(sumPair); // Olhe que código pequeno e conciso!

console.log(sumNumbers(numbers2)); // 152

// Para os números pares, também dá:

const sumEvenNum = numbers2.filter((number) => number % 2 ===0).reduce((acc, num) => acc + num, 0)
console.log(sumEvenNum) // 152

// ou:

const sumPairNum = (currentValue, number) => (
  (number % 2 === 0) ? currentValue + number : currentValue
);

const sumNumbersEven = (array) => array.reduce(sumPairNum, 0);

console.log(sumNumbersEven(numbers2)); // 152