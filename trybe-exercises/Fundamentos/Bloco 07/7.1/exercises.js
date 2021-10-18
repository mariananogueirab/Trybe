// Parte 1.1:

const testingScope = escopo => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
   // console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

testingScope(false);

// Parte 1.2:

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const createString = oddsAndEvens => {
  let sort = oddsAndEvens.sort(function (a, b){return a - b});
  console.log(`Os números ${sort} se encontram em ordem crescente`);
}
console.log(oddsAndEvens);
createString(oddsAndEvens);

// Parte 2.1

const factorial = num => {
  let facNum = num;
  for (let index = 1; index < num; index += 1) {  
    facNum = facNum*(num - index);  
  }
  console.log(facNum);
} 
factorial(5);

// Parte 2.2:

const biggerWord = frase => {
  let fraseToArray = frase.split(' ');
  let word = fraseToArray[0];
  for (let index = 0; index < fraseToArray.length; index += 1) {
    if(word.length < fraseToArray[index].length) {
      word = fraseToArray[index];
    }
  }
  console.log(word);
}
biggerWord("Antônio foi no banheiro e não sabemos o que aconteceu");