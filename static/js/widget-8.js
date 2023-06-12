const URLactual = window.location.pathname;

if (URLactual == "/sobre-nosotros") {
    if (document.querySelector(".ui-search")) {
        const ui_search = document.querySelector(".ui-search");

        ui_search.classList.toggle("invisible");

        let main = document.querySelector("#root-app");

        let barraSuperior = document.createElement("div");
        let barraSuperiorTitulo = document.createElement("p")
        let barraSuperiorSubtitulo = document.createElement("p")

        let sobreNosotrosContenedor = document.createElement("div");

        let sobreNosotrosContenido_1 = document.createElement("div");
        let sobreNosotrosTexto_1 = document.createElement("div");
        let sobreNosotrosTexto_p_1 = document.createElement("p");
        let sobreNosotrosTexto_p_2 = document.createElement("p");
        let sobreNosotrosContenido_img_1 = document.createElement("img");

        let sobreNosotrosContenido_2 = document.createElement("div");
        let sobreNosotrosContenido_img_2 = document.createElement("img");
        let sobreNosotrosTexto_2 = document.createElement("div");
        let sobreNosotrosTexto_p_3 = document.createElement("p");
        let sobreNosotrosTexto_p_4 = document.createElement("p");

        let sobreNosotrosContenido_3 = document.createElement("div");
        let sobreNosotrosTexto_3 = document.createElement("div");
        let sobreNosotrosTexto_p_5 = document.createElement("p");
        let sobreNosotrosTexto_p_6 = document.createElement("p");
        let sobreNosotrosContenido_img_3 = document.createElement("img");

        barraSuperiorTitulo.textContent = "Sobre Nosotros";
        barraSuperiorSubtitulo.innerHTML = "<span>Home</span> / Sobre Nosotros";

        sobreNosotrosTexto_p_1.textContent = "HACEMOS TU VIDA MÁS FÁCIL";
        sobreNosotrosTexto_p_2.innerHTML = "En <span>Swiss Trading Co.</span> creemos profundamente en nuestro slogan: HACEMOS TU VIDA MÁS FÁCIL. Ese es el eje central de nuestra filosofía. Brindarte soluciones prácticas, accesibles y de buena calidad para que en tu vida diaria puedas gozar el mayor bienestar. Por eso producimos, importamos y comercializamos una amplia gama de productos de alto nivel internacional para que puedas disfrutar de tu cocina como un chef, mantener tu cuerpo en forma, relajarte y hacer de tu casa el hogar soñado. Porque lo que para ti es importante, es nuestro desafío."
        sobreNosotrosContenido_img_1.src = "https://www.swisstradingco.com/assets/img/xl_2.jpg";

        sobreNosotrosContenido_img_2.src = "https://www.swisstradingco.com/assets/img/xl_33.jpg";
        sobreNosotrosTexto_p_3.textContent = "NUESTRA MISIÓN";
        sobreNosotrosTexto_p_4.innerHTML = "<span>BRINDARTE LOS MEJORES PRODUCTOS:</span><br> Cada uno de nuestros productos representa un sueño cumplido. En el momento en que llega a tus manos, nuestra misión se convierte en un logro. Porque desde el comienzo, en el proceso de creación, de desarrollo, producción y finalmente la comercialización, vamos tejiendo una historia en la que cada una de las personas involucradas pone una parte de sí. El objetivo: hacer tu vida y la de tu familia más fácil. Porque cuando tu estás feliz con tu compra, nosotros estamos aún más felices con los resultados."

        sobreNosotrosTexto_p_5.innerHTML = "CUIDAR EL PLANETA";
        sobreNosotrosTexto_p_6.innerHTML = "El futuro del planeta es el futuro de cada uno de nosotros. Como personas y como empresas tenemos una gran responsabilidad en el cuidado del medio ambiente. Por eso desde <span>Swiss Trading Co.</span> desarrollamos productos sustentables, con procesos de producción y logística amigables con el medio ambiente. Te invitamos a asumir este compromiso juntos: vivamos en forma sustentable, pensando en el devenir de nuestra casa, el planeta Tierra.";
        sobreNosotrosContenido_img_3.src = "https://www.swisstradingco.com/assets/img/xl_3333.jpg";

        main.appendChild(barraSuperior);
        barraSuperior.appendChild(barraSuperiorTitulo);
        barraSuperior.appendChild(barraSuperiorSubtitulo);

        main.appendChild(sobreNosotrosContenedor);

        sobreNosotrosContenedor.appendChild(sobreNosotrosContenido_1);
        sobreNosotrosContenido_1.appendChild(sobreNosotrosTexto_1);
        sobreNosotrosTexto_1.appendChild(sobreNosotrosTexto_p_1);
        sobreNosotrosTexto_1.appendChild(sobreNosotrosTexto_p_2);
        sobreNosotrosContenido_1.appendChild(sobreNosotrosContenido_img_1);

        sobreNosotrosContenedor.appendChild(sobreNosotrosContenido_2);
        sobreNosotrosContenido_2.appendChild(sobreNosotrosContenido_img_2);
        sobreNosotrosContenido_2.appendChild(sobreNosotrosTexto_2);
        sobreNosotrosTexto_2.appendChild(sobreNosotrosTexto_p_3);
        sobreNosotrosTexto_2.appendChild(sobreNosotrosTexto_p_4);

        sobreNosotrosContenedor.appendChild(sobreNosotrosContenido_3);
        sobreNosotrosContenido_3.appendChild(sobreNosotrosTexto_3);
        sobreNosotrosTexto_3.appendChild(sobreNosotrosTexto_p_5);
        sobreNosotrosTexto_3.appendChild(sobreNosotrosTexto_p_6);
        sobreNosotrosContenido_3.appendChild(sobreNosotrosContenido_img_3);

        barraSuperior.classList.add("barra-superior");

        sobreNosotrosContenedor.classList.add("sobre-nosotros-contenedor");

        sobreNosotrosContenido_1.classList.add("sobre-nosotros-contenido");
        sobreNosotrosTexto_1.classList.add("sobre-nosotros-texto");
        sobreNosotrosTexto_p_1.classList.add("titulo");
        sobreNosotrosTexto_p_1.classList.add("titulo-naranja");
        sobreNosotrosTexto_p_2.classList.add("parrafo");

        sobreNosotrosContenido_2.classList.add("sobre-nosotros-contenido");
        sobreNosotrosContenido_2.classList.add("column-reverse");
        sobreNosotrosTexto_2.classList.add("sobre-nosotros-texto");
        sobreNosotrosTexto_p_3.classList.add("titulo");
        sobreNosotrosTexto_p_3.classList.add("titulo-rojo");
        sobreNosotrosTexto_p_4.classList.add("parrafo");

        sobreNosotrosContenido_3.classList.add("sobre-nosotros-contenido");
        sobreNosotrosTexto_3.classList.add("sobre-nosotros-texto");
        sobreNosotrosTexto_p_5.classList.add("titulo");
        sobreNosotrosTexto_p_5.classList.add("titulo-rojo");
        sobreNosotrosTexto_p_6.classList.add("parrafo");

        throw new Error("Error controlado");
    } else if (document.querySelector(".ui-search--zrp")) {
        const ui_search = document.querySelector(".ui-search--zrp");

        ui_search.classList.toggle("invisible");

        let main = document.querySelector("#root-app");

        let barraSuperior = document.createElement("div");
        let barraSuperiorTitulo = document.createElement("p")
        let barraSuperiorSubtitulo = document.createElement("p")

        let sobreNosotrosContenedor = document.createElement("div");

        let sobreNosotrosContenido_1 = document.createElement("div");
        let sobreNosotrosTexto_1 = document.createElement("div");
        let sobreNosotrosTexto_p_1 = document.createElement("p");
        let sobreNosotrosTexto_p_2 = document.createElement("p");
        let sobreNosotrosContenido_img_1 = document.createElement("img");

        let sobreNosotrosContenido_2 = document.createElement("div");
        let sobreNosotrosContenido_img_2 = document.createElement("img");
        let sobreNosotrosTexto_2 = document.createElement("div");
        let sobreNosotrosTexto_p_3 = document.createElement("p");
        let sobreNosotrosTexto_p_4 = document.createElement("p");

        let sobreNosotrosContenido_3 = document.createElement("div");
        let sobreNosotrosTexto_3 = document.createElement("div");
        let sobreNosotrosTexto_p_5 = document.createElement("p");
        let sobreNosotrosTexto_p_6 = document.createElement("p");
        let sobreNosotrosContenido_img_3 = document.createElement("img");

        barraSuperiorTitulo.textContent = "Sobre Nosotros";
        barraSuperiorSubtitulo.innerHTML = "<span>Home</span> / Sobre Nosotros";

        sobreNosotrosTexto_p_1.textContent = "HACEMOS TU VIDA MÁS FÁCIL";
        sobreNosotrosTexto_p_2.innerHTML = "En <span>Swiss Trading Co.</span> creemos profundamente en nuestro slogan: HACEMOS TU VIDA MÁS FÁCIL. Ese es el eje central de nuestra filosofía. Brindarte soluciones prácticas, accesibles y de buena calidad para que en tu vida diaria puedas gozar el mayor bienestar. Por eso producimos, importamos y comercializamos una amplia gama de productos de alto nivel internacional para que puedas disfrutar de tu cocina como un chef, mantener tu cuerpo en forma, relajarte y hacer de tu casa el hogar soñado. Porque lo que para ti es importante, es nuestro desafío."
        sobreNosotrosContenido_img_1.src = "https://www.swisstradingco.com/assets/img/xl_2.jpg";

        sobreNosotrosContenido_img_2.src = "https://www.swisstradingco.com/assets/img/xl_33.jpg";
        sobreNosotrosTexto_p_3.textContent = "NUESTRA MISIÓN";
        sobreNosotrosTexto_p_4.innerHTML = "<span>BRINDARTE LOS MEJORES PRODUCTOS:</span><br> Cada uno de nuestros productos representa un sueño cumplido. En el momento en que llega a tus manos, nuestra misión se convierte en un logro. Porque desde el comienzo, en el proceso de creación, de desarrollo, producción y finalmente la comercialización, vamos tejiendo una historia en la que cada una de las personas involucradas pone una parte de sí. El objetivo: hacer tu vida y la de tu familia más fácil. Porque cuando tu estás feliz con tu compra, nosotros estamos aún más felices con los resultados."

        sobreNosotrosTexto_p_5.innerHTML = "CUIDAR EL PLANETA";
        sobreNosotrosTexto_p_6.innerHTML = "El futuro del planeta es el futuro de cada uno de nosotros. Como personas y como empresas tenemos una gran responsabilidad en el cuidado del medio ambiente. Por eso desde <span>Swiss Trading Co.</span> desarrollamos productos sustentables, con procesos de producción y logística amigables con el medio ambiente. Te invitamos a asumir este compromiso juntos: vivamos en forma sustentable, pensando en el devenir de nuestra casa, el planeta Tierra.";
        sobreNosotrosContenido_img_3.src = "https://www.swisstradingco.com/assets/img/xl_3333.jpg";

        main.appendChild(barraSuperior);
        barraSuperior.appendChild(barraSuperiorTitulo);
        barraSuperior.appendChild(barraSuperiorSubtitulo);

        main.appendChild(sobreNosotrosContenedor);

        sobreNosotrosContenedor.appendChild(sobreNosotrosContenido_1);
        sobreNosotrosContenido_1.appendChild(sobreNosotrosTexto_1);
        sobreNosotrosTexto_1.appendChild(sobreNosotrosTexto_p_1);
        sobreNosotrosTexto_1.appendChild(sobreNosotrosTexto_p_2);
        sobreNosotrosContenido_1.appendChild(sobreNosotrosContenido_img_1);

        sobreNosotrosContenedor.appendChild(sobreNosotrosContenido_2);
        sobreNosotrosContenido_2.appendChild(sobreNosotrosContenido_img_2);
        sobreNosotrosContenido_2.appendChild(sobreNosotrosTexto_2);
        sobreNosotrosTexto_2.appendChild(sobreNosotrosTexto_p_3);
        sobreNosotrosTexto_2.appendChild(sobreNosotrosTexto_p_4);

        sobreNosotrosContenedor.appendChild(sobreNosotrosContenido_3);
        sobreNosotrosContenido_3.appendChild(sobreNosotrosTexto_3);
        sobreNosotrosTexto_3.appendChild(sobreNosotrosTexto_p_5);
        sobreNosotrosTexto_3.appendChild(sobreNosotrosTexto_p_6);
        sobreNosotrosContenido_3.appendChild(sobreNosotrosContenido_img_3);

        barraSuperior.classList.add("barra-superior");

        sobreNosotrosContenedor.classList.add("sobre-nosotros-contenedor");

        sobreNosotrosContenido_1.classList.add("sobre-nosotros-contenido");
        sobreNosotrosTexto_1.classList.add("sobre-nosotros-texto");
        sobreNosotrosTexto_p_1.classList.add("titulo");
        sobreNosotrosTexto_p_1.classList.add("titulo-naranja");
        sobreNosotrosTexto_p_2.classList.add("parrafo");

        sobreNosotrosContenido_2.classList.add("sobre-nosotros-contenido");
        sobreNosotrosContenido_2.classList.add("column-reverse");
        sobreNosotrosTexto_2.classList.add("sobre-nosotros-texto");
        sobreNosotrosTexto_p_3.classList.add("titulo");
        sobreNosotrosTexto_p_3.classList.add("titulo-rojo");
        sobreNosotrosTexto_p_4.classList.add("parrafo");

        sobreNosotrosContenido_3.classList.add("sobre-nosotros-contenido");
        sobreNosotrosTexto_3.classList.add("sobre-nosotros-texto");
        sobreNosotrosTexto_p_5.classList.add("titulo");
        sobreNosotrosTexto_p_5.classList.add("titulo-rojo");
        sobreNosotrosTexto_p_6.classList.add("parrafo");

        throw new Error("Error controlado");
    }
}


