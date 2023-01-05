let lineaFitnessFlecha = document.querySelector(".linea-fitness-flecha");
let lineaGourmetFlecha = document.querySelector(".linea-gourmet-flecha");
let lineaBienestarFlecha = document.querySelector(".linea-bienestar-flecha");
let lineaCasaFlecha = document.querySelector(".linea-casa-flecha");

let lineaFitnessMobile = document.querySelector(".linea-fitness");
let lineaGourmetMobile = document.querySelector(".linea-gourmet");
let lineaBienestarMobile = document.querySelector(".linea-bienestar");
let lineaCasaMobile = document.querySelector(".linea-casa");

lineaFitnessFlecha.addEventListener('click', function(){
    lineaFitnessFlecha.classList.toggle("animacion-rotacion");
    lineaFitnessMobile.classList.toggle("invisible");
});

lineaGourmetFlecha.addEventListener('click', function(){
    lineaGourmetFlecha.classList.toggle("animacion-rotacion");
    lineaGourmetMobile.classList.toggle("invisible");
});

lineaBienestarFlecha.addEventListener('click', function(){
    lineaBienestarFlecha.classList.toggle("animacion-rotacion");
    lineaBienestarMobile.classList.toggle("invisible");
});

lineaCasaFlecha.addEventListener('click', function(){
    lineaCasaFlecha.classList.toggle("animacion-rotacion");
    lineaCasaMobile.classList.toggle("invisible");
});