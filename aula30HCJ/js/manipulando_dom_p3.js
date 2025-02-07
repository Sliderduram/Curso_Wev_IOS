// M�todo querySelector
let paragrafo = document.querySelector('p');
paragrafo.style.background = '#FBBEBA';

// Busca a tag e a classe
let parClasse = (document.querySelector('p.exemplo').innerHTML =
    'Mudei o texto aqui');

// Busca somente a classe
let elemento = (document.querySelector('.myclass').style.fontSize = 'x-large');

// Fun��o chamada pelo evento onclick
const Clique = () => {
    document.querySelector('#my-span').style.backgroundColor = '#CEFBBA';
};

// M�todo querySelectorAll
let listaLi = document.querySelectorAll('li');
for (i = 0; i < listaLi.length; i++) {
    listaLi[i].style.border = '1px solid #0000FF';
    listaLi[i].style.padding = '3px';
}
console.log(listaLi);

// Busca por id
let myLi = document.querySelectorAll('#my-li');
myLi.forEach((li) => {
    li.innerHTML = 'Mudou aqui!';
    li.style.background = '#FBBEBA';
});

// Busca por classe
let myItem = document.querySelectorAll('.item');
//myItem.forEach((item) => (item.style.backgroundColor = '#E7BAFB'));
for (j = 0; j < myItem.length; j++) {
    if (j % 2 === 0) myItem[j].style.backgroundColor = '#E7BAFB';
}

// Busca por elemento e classe
let myTeste = document.querySelectorAll('li.teste');
myTeste.forEach((elemento) => (elemento.style.color = '#FFF'));
