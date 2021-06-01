let footer = document.querySelector('.rodape');
let divFont = document.createElement('div');
divFont.className = 'fontSize';
footer.appendChild(divFont);


let inputFont = document.createElement('input');
inputFont.setAttribute('type', 'text');
inputFont.setAttribute('placeHolder', 'Adicione o nº de pixels da fonte com px');
inputFont.className = 'inputFontSize';
divFont.appendChild(inputFont);

let titleInputFont = document.createElement('h5');
titleInputFont.innerText = 'Nº de pixels';
divFont.appendChild(titleInputFont);


inputFont.addEventListener('keyup', function() {
    let main = document.querySelector('.principal');
    main.style.fontSize = inputFont.value;
    let tamanhoFonte = input.value;
    localStorage.setItem('tamanhoDaFonte', tamanhoFonte);
}
)

