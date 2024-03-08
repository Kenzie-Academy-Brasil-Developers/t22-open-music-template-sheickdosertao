import { handleDarkmode } from "./header.js";
import { applyInputRangeStyle } from "./inputRange.js";

import { criarDarkMode } from "./theme.js";
import { armazenaFunction } from "./api.js";


function creatCard({ title, genre, band, price, img}) {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    cardDiv.innerHTML =
        `<img src=${img} alt="Album 1">
        <h3 class="titulo__cards">${title}</h3>
        <div class="p__cards">
            <p class="p__card">${band}</p>
            <p class="p__card">${genre}</p>
        </div>
        <div class="p__cards">
            <p class="p__valor">${price}</p>
            <button class="botao__compra">Comprar</button>
        </div>`;

    return cardDiv;
    

}

function butaoGenero() {
    const genero1 = document.querySelectorAll("#selecionado");

    let previousButton = null;

    genero1.forEach(genero1 => {
        genero1.addEventListener('click', () => {
            if (previousButton) {
                previousButton.style.backgroundColor = '';
            }
            genero1.style.backgroundColor = 'red';
            previousButton = genero1;
        });
    });
}

function rendercards(resultadoArray) {
    const divCards = document.querySelector(".div__cards");
    divCards.innerHTML = "";
    if ( resultadoArray && Array.isArray(resultadoArray)) {
        resultadoArray.forEach(album => {
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

async function main(){
    handleDarkmode();
    criarDarkMode();
    butaoGenero();
   applyInputRangeStyle();
   
    const resultadoArray = await armazenaFunction (9);
    
    rendercards(resultadoArray);
}


main()