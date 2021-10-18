// Desafio 13
function hydrate(frase) {
  let numberOfDrinks = frase.match(/[0-9]/g);
  let totalOfDrinks = 0;
  for (let index = 0; index < numberOfDrinks.length; index += 1) {
    totalOfDrinks += parseInt(numberOfDrinks[index], 10);
  }
  if (totalOfDrinks > 1) {
    return totalOfDrinks + ' copos de água';
  }
    return totalOfDrinks + ' copo de água';
}