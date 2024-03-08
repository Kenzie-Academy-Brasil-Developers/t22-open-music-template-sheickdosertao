export function criarDarkMode() {
    const darkMode = document.querySelector(".botao__dark");


    const html = document.querySelector("html");

    const escuroDark = localStorage.getItem("@openMusic:theme");
    

    if(escuroDark) {
        html.classList.add("modificar__fundo");
        darkMode.classList.add("botao__dark--sun");
    }


darkMode.addEventListener("click", (event) => {
        darkMode.classList.toggle("botao__dark--sun");

        html.classList.toggle("modificar__fundo");

        html.classList.contains("modificar__fundo")
            ? localStorage.setItem("@openMusic:theme", "dark")
            : localStorage.removeItem(" @openMusic:theme");
    });

}

