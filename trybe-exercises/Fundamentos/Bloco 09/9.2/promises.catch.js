const promise = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random()* 11);

  if (number <= 5) {
    return reject(number);
  }
  resolve(number);
})
.then(number => `Que sucesso =) nosso número foi ${number}`)
.then(msg => console.log(msg))
.catch(number => console.log(`Que fracasso =( Nosso número foi ${number}`));

// Se executarmos o código acima, vamos ver que o erro anterior desapareceu, pois agora ele foi tratado! Assim como o .then() recebe o retorno de resolve , o .catch() recebe o retorno do reject , que é passado para ele como argumento de sua função interna. Assim, quando a promise retorna um reject , pula todos os .then() e executa o primeiro .catch() que encontrar. E tem mais! O .catch() também "pega" qualquer erro que acontecer dentro de qualquer .then() anterior a ele. Por esse motivo é geralmente usado no final.