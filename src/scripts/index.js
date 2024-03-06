import { handleDarkmode } from "./header.js";

handleDarkmode();

import { applyInputRangeStyle } from "./imputRange.js";


import{ listadeálbuns } from "./albumsDatabase.js";

function creatCard({título, gênero, banda, preço, img}){
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    console.log(cardDiv);

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
            </div>`
   
   
      return cardDiv;
}


function rendercards(cardsArray) {
    const divCards = document.querySelector(".div__cards");

    cardsArray.forEach((cardsinfo) => {
        const cardImage = creatCard(cardsinfo);
        divCards.appendChild(cardImage);
    });
}

rendercards(listadeálbuns);


function routine() {
    applyInputRangeStyle();
}