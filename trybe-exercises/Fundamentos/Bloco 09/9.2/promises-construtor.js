/* const promise = new Promise((resolve, reject) => {

}); */

// Para criar a Promise, utilizamos o construtor Promise junto com o operador new . Um construtor nada mais é do que uma função especial que cria um objeto a partir de uma classe.
// O construtor recebe uma função com 2 parâmetros: resolve e reject. Você pode utilizar qualquer construção, desde que seja uma função com 2 parâmetros.

// Para simular uma situação de sucesso e erro, vamos utilizar o Math.random() para sortear um valor de 0 a 10. Se o valor for entre 0 e 5 (com 5 incluso), será um fracasso, caso o valor seja entre 6 e 10, será um sucesso. Nosso programa ficaria assim:

const promise = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random() * 11);

  if (number <= 5) {
    return reject(console.log(`Que fracasso =( Nosso número foi ${number}`));
  }
  resolve(console.log(`Que sucesso =) nosso número foi ${number}`));
});