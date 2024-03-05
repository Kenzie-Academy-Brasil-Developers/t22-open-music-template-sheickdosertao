export function handleDarkmode() {
    const darkMode = document.querySelector(".botao__dark");

    const html = document.querySelector("html");

    darkMode.addEventListener("click", (event) => {
       darkMode.classList.toggle("botao__dark--modif");

       html.classList.toggle("modificar__Fundo");
    });
}
