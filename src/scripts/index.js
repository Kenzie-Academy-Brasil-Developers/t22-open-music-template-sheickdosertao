import { handleDarkmode } from "./header.js";
import { applyInputRangeStyle } from "./inputRange.js";
import { listadealbuns } from "./albumsDatabase.js";
import { criarDarkMode } from "./theme.js";

applyInputRangeStyle();

function creatCard({ título, gênero, banda, preço, img }) {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    cardDiv.innerHTML =
        `<img src=${img} alt="Album 1">
        <h3 class="titulo__cards">${título}</h3>
        <div class="p__cards">
            <p class="p__card">${banda}</p>
            <p class="p__card">${gênero}</p>
        </div>
        <div class="p__cards">
            <p class="p__valor">${preço}</p>
            <button class="botao__compra">Comprar</button>
        </div>`;

    return cardDiv;
}

function butaoGenero() {
    const genero = document.querySelectorAll("#selecionado");

    let previousButton = null;

    genero.forEach(genero => {
        genero.addEventListener('click', () => {
            if (previousButton) {
                previousButton.style.backgroundColor = '';
            }
            genero.style.backgroundColor = 'red';
            previousButton = genero;
        });
    });
}

function rendercards(listadealbuns) {
    const divCards = document.querySelector(".div__cards");
    divCards.innerHTML = "";
    if (listadealbuns && Array.isArray(listadealbuns)) {
        listadealbuns.forEach(album => {
            const cardImage = creatCard(album);
            divCards.appendChild(cardImage);
        });
    } else {
        console.error('listadealbuns não está definida ou não é um array');
    }
}


let precoCd = 0;
function filtroinput() {
    const input = document.querySelector(".input__ranger");
    const precoSpan = document.querySelector(".price__input > span");
    precoCd = input.valueAsNumber;

    precoSpan.innerHTML = precoCd;

   
   


    
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const precoCard = parseFloat(card.querySelector('.p__valor').textContent);
        if (precoCard > precoCd) {
            card.style.display = 'none';
        } else {
            card.style.display = 'block';
        }
    });
   
}

document.getElementById('precos').addEventListener('input', function() {
    filtroinput();
});


handleDarkmode();
criarDarkMode();
butaoGenero();
rendercards(listadealbuns);

