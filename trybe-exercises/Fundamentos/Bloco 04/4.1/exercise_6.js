let pecaXadrez = 'peao';
let peca = pecaXadrez.toLowerCase();

switch (peca) {
    case 'king':
        console.log(peca + '-> vertical, horizontal or diagonal');
        break;
    
    case 'queen':
        console.log(peca + '-> vertical, horizontal or diagonal');
        break;

    case 'bishop':
        console.log(peca + '-> diagonal');
        break;

    case 'horse':
        console.log(peca + '-> two houses vertically and two horizontally');
        break;

    case 'tower':
        console.log(peca + '-> vertical or horizontal');
        break;

    case 'pawn':
        console.log(peca + '-> one house vertically horizontally');
        break;

    default:
        console.log('Erro')
}

//Recebe o nome de uma peça de xadrez em ingês e retorna os movimentos que ela faz.