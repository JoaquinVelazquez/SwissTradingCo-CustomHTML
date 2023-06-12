const URLactual = window.location.pathname;

(function() {
    let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = 'https://iili.io/hisKSs.png';
    document.getElementsByTagName('head')[0].appendChild(link);
  })();
  function faviconIn(){
    let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';link.rel = 'shortcut icon';
    link.href = 'https://iili.io/hisKSs.png';
    document.getElementsByTagName('head')[0].appendChild(link)
  };
  
  setTimeout(faviconIn,1000);

let pautas = document.querySelector(".pautas-contenedor");
let glider = document.querySelector(".glider-contain");
let iconosCategorias = document.querySelectorAll(".contenedor-iconos-categorias");

if (URLactual == "/") {
    pautas.classList.toggle("invisible");
    glider.classList.toggle("invisible");
    iconosCategorias[0].classList.toggle("invisible");
    iconosCategorias[1].classList.toggle("invisible");
}

