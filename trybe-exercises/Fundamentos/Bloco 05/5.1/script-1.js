document.getElementById('page-title').innerText = 'Harry Potter';

document.getElementById('second-paragraph').innerText = 'Harry Potter é a melhor coletânea de filmes de todos os tempos! Mas os livros são melhores!';

document.getElementById('subtitle').innerText = 'Melhores Filmes';

console.log(document.getElementsByClassName('parag'));

document.getElementsByClassName('parag')[0].style.backgroundColor = 'blue';

document.getElementsByTagName('h4')[0].style.color = 'pink';




const paragraph = document.getElementById("paragraph");
paragraph.style.color = "red";