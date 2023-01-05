const URLactual = window.location.pathname;

let favicon = document.querySelector("link[rel='shortcut icon']")
favicon.href = 'https://iili.io/hisKSs.png';

let pautas = document.querySelector(".pautas-contenedor");
let glider = document.querySelector(".glider-contain");
let iconosCategorias = document.querySelectorAll(".contenedor-iconos-categorias");

if (URLactual == "/") {
    pautas.classList.toggle("invisible");
    glider.classList.toggle("invisible");
    iconosCategorias[0].classList.toggle("invisible");
    iconosCategorias[1].classList.toggle("invisible");
}