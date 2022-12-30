const URLactual = window.location.pathname;

if (URLactual == "/beneficios") {
    if (document.querySelector(".ui-search")) {
        const ui_search = document.querySelector(".ui-search");

        ui_search.classList.toggle("invisible");

        let main = document.querySelector("#root-app");

        let barraSuperior = document.createElement("div");
        let barraSuperiorTitulo = document.createElement("p")
        let barraSuperiorSubtitulo = document.createElement("p")

        let beneficiosContenedor = document.createElement("div");

        let beneficiosTop = document.createElement("div");

        let beneficiosTarjeta_1 = document.createElement("div");
        let beneficiosTarjeta_1_img = document.createElement("img");
        let beneficiosTexto_1 = document.createElement("div");
        let beneficiosTarjeta_1_p_1 = document.createElement("p");
        let beneficiosTarjeta_1_p_2 = document.createElement("p");

        let beneficiosTarjeta_2 = document.createElement("div");
        let beneficiosTarjeta_2_img = document.createElement("img");
        let beneficiosTexto_2 = document.createElement("div");
        let beneficiosTarjeta_2_p_1 = document.createElement("p");
        let beneficiosTarjeta_2_p_2 = document.createElement("p");

        let beneficiosTarjeta_3 = document.createElement("div");
        let beneficiosTarjeta_3_img = document.createElement("img");
        let beneficiosTexto_3 = document.createElement("div");
        let beneficiosTarjeta_3_p_1 = document.createElement("p");
        let beneficiosTarjeta_3_p_2 = document.createElement("p");

        let beneficiosBottom = document.createElement("div");

        let beneficiosTarjeta_4 = document.createElement("div");
        let beneficiosTarjeta_4_img = document.createElement("img");
        let beneficiosTexto_4 = document.createElement("div");
        let beneficiosTarjeta_4_p_1 = document.createElement("p");
        let beneficiosTarjeta_4_p_2 = document.createElement("p");

        let beneficiosTarjeta_5 = document.createElement("div");
        let beneficiosTarjeta_5_img = document.createElement("img");
        let beneficiosTexto_5 = document.createElement("div");
        let beneficiosTarjeta_5_p_1 = document.createElement("p");
        let beneficiosTarjeta_5_p_2 = document.createElement("p");

        barraSuperiorTitulo.textContent = "Beneficios";
        barraSuperiorSubtitulo.innerHTML = "<span>Home</span> / Beneficios";

        beneficiosTarjeta_1_img.src = "https://www.swisstradingco.com/assets/img/blog-7.jpg";
        beneficiosTarjeta_1_p_1.textContent = "EXPERIENCIA DE COMPRA INSUPERABLE";
        beneficiosTarjeta_1_p_2.textContent = "Sabemos que una buena experiencia de compra comienza en el momento en que tú nos llamas. Por eso, contamos con operadores especializados para brindarte una experiencia gratificante y responder con el más alto nivel a tus demandas.";

        beneficiosTarjeta_2_img.src = "https://www.swisstradingco.com/assets/img/blog-8.jpg";
        beneficiosTarjeta_2_p_1.textContent = "COMPROMISO TOTAL";
        beneficiosTarjeta_2_p_2.textContent = "Creemos que el mejor negocio es que nuestros clientes estén satisfechos, por eso asumimos un compromiso total en cada uno de nuestros proyectos, en todas las áreas de la empresa.";

        beneficiosTarjeta_3_img.src = "https://www.swisstradingco.com/assets/img/blog-10.jpg";
        beneficiosTarjeta_3_p_1.textContent = "COMPRA SEGURA";
        beneficiosTarjeta_3_p_2.textContent = "Ahora más que nunca, tú necesitas comprar online de la forma más segura. Por eso, te ofrecemos un servicio confiable. Para que puedas comprar lo que te gusta, lo que necesites, sin moverte de tu casa y con toda la seguridad que mereces.";

        beneficiosTarjeta_4_img.src = "https://www.swisstradingco.com/assets/img/blog-11.jpg";
        beneficiosTarjeta_4_p_1.textContent = "ENTREGA A DOMICILIO";
        beneficiosTarjeta_4_p_2.textContent = "El mundo cambió. Y tus costumbres también. Por eso, te ofrecemos el mejor servicio de entrega a domicilio. Tú nos indicas dónde quieres que se haga la entrega y nosotros te lo llevamos. Así de fácil, sin moverte de tu casa."

        beneficiosTarjeta_5_img.src = "https://www.swisstradingco.com/assets/img/blog-12.jpg";
        beneficiosTarjeta_5_p_1.textContent = "GARANTÍA DE 90 DÍAS";
        beneficiosTarjeta_5_p_2.textContent = "Compra tranquilo, todos nuestros productos cuentan con garantía. Si por algún motivo no estás 100% conforme, sólo debes solicitar el cambio o devolución. Sin excusas ni cuestionamientos. Tienes 90 días para probarlo. Un beneficio más de Swiss Trading Co. para hacer tu vida más fácil.";

        main.appendChild(barraSuperior);
        barraSuperior.appendChild(barraSuperiorTitulo);
        barraSuperior.appendChild(barraSuperiorSubtitulo);

        main.appendChild(beneficiosContenedor);

        beneficiosContenedor.appendChild(beneficiosTop);

        beneficiosTop.appendChild(beneficiosTarjeta_1);
        beneficiosTarjeta_1.appendChild(beneficiosTarjeta_1_img);
        beneficiosTarjeta_1.appendChild(beneficiosTexto_1);
        beneficiosTexto_1.appendChild(beneficiosTarjeta_1_p_1);
        beneficiosTexto_1.appendChild(beneficiosTarjeta_1_p_2);

        beneficiosTop.appendChild(beneficiosTarjeta_2);
        beneficiosTarjeta_2.appendChild(beneficiosTarjeta_2_img);
        beneficiosTarjeta_2.appendChild(beneficiosTexto_2);
        beneficiosTexto_2.appendChild(beneficiosTarjeta_2_p_1);
        beneficiosTexto_2.appendChild(beneficiosTarjeta_2_p_2);

        beneficiosTop.appendChild(beneficiosTarjeta_3);
        beneficiosTarjeta_3.appendChild(beneficiosTarjeta_3_img);
        beneficiosTarjeta_3.appendChild(beneficiosTexto_3);
        beneficiosTexto_3.appendChild(beneficiosTarjeta_3_p_1);
        beneficiosTexto_3.appendChild(beneficiosTarjeta_3_p_2);

        beneficiosContenedor.appendChild(beneficiosBottom);

        beneficiosBottom.appendChild(beneficiosTarjeta_4);
        beneficiosTarjeta_4.appendChild(beneficiosTarjeta_4_img);
        beneficiosTarjeta_4.appendChild(beneficiosTexto_4);
        beneficiosTexto_4.appendChild(beneficiosTarjeta_4_p_1);
        beneficiosTexto_4.appendChild(beneficiosTarjeta_4_p_2);

        beneficiosBottom.appendChild(beneficiosTarjeta_5);
        beneficiosTarjeta_5.appendChild(beneficiosTarjeta_5_img);
        beneficiosTarjeta_5.appendChild(beneficiosTexto_5);
        beneficiosTexto_5.appendChild(beneficiosTarjeta_5_p_1);
        beneficiosTexto_5.appendChild(beneficiosTarjeta_5_p_2);

        barraSuperior.classList.add("barra-superior");

        beneficiosContenedor.classList.add("beneficios-contenedor");

        beneficiosTop.classList.add("beneficios-top");
        beneficiosBottom.classList.add("beneficios-bottom");

        beneficiosTarjeta_1.classList.add("beneficios-tarjeta");
        beneficiosTarjeta_2.classList.add("beneficios-tarjeta");
        beneficiosTarjeta_3.classList.add("beneficios-tarjeta");
        beneficiosTarjeta_4.classList.add("beneficios-tarjeta");
        beneficiosTarjeta_5.classList.add("beneficios-tarjeta");

        beneficiosTexto_1.classList.add("beneficios-texto");
        beneficiosTexto_2.classList.add("beneficios-texto");
        beneficiosTexto_3.classList.add("beneficios-texto");
        beneficiosTexto_4.classList.add("beneficios-texto");
        beneficiosTexto_5.classList.add("beneficios-texto");

        beneficiosTarjeta_1_p_1.classList.add("titulo");
        beneficiosTarjeta_2_p_1.classList.add("titulo");
        beneficiosTarjeta_3_p_1.classList.add("titulo");
        beneficiosTarjeta_4_p_1.classList.add("titulo");
        beneficiosTarjeta_5_p_1.classList.add("titulo");

        beneficiosTarjeta_1_p_2.classList.add("parrafo");
        beneficiosTarjeta_2_p_2.classList.add("parrafo");
        beneficiosTarjeta_3_p_2.classList.add("parrafo");
        beneficiosTarjeta_4_p_2.classList.add("parrafo");
        beneficiosTarjeta_5_p_2.classList.add("parrafo");

        throw new Error("Error controlado");
    } else if (document.querySelector(".ui-search--zrp")) {
        const ui_search = document.querySelector(".ui-search--zrp");

        ui_search.classList.toggle("invisible");

        let main = document.querySelector("#root-app");

        let barraSuperior = document.createElement("div");
        let barraSuperiorTitulo = document.createElement("p")
        let barraSuperiorSubtitulo = document.createElement("p")

        let beneficiosContenedor = document.createElement("div");

        let beneficiosTop = document.createElement("div");

        let beneficiosTarjeta_1 = document.createElement("div");
        let beneficiosTarjeta_1_img = document.createElement("img");
        let beneficiosTexto_1 = document.createElement("div");
        let beneficiosTarjeta_1_p_1 = document.createElement("p");
        let beneficiosTarjeta_1_p_2 = document.createElement("p");

        let beneficiosTarjeta_2 = document.createElement("div");
        let beneficiosTarjeta_2_img = document.createElement("img");
        let beneficiosTexto_2 = document.createElement("div");
        let beneficiosTarjeta_2_p_1 = document.createElement("p");
        let beneficiosTarjeta_2_p_2 = document.createElement("p");

        let beneficiosTarjeta_3 = document.createElement("div");
        let beneficiosTarjeta_3_img = document.createElement("img");
        let beneficiosTexto_3 = document.createElement("div");
        let beneficiosTarjeta_3_p_1 = document.createElement("p");
        let beneficiosTarjeta_3_p_2 = document.createElement("p");

        let beneficiosBottom = document.createElement("div");

        let beneficiosTarjeta_4 = document.createElement("div");
        let beneficiosTarjeta_4_img = document.createElement("img");
        let beneficiosTexto_4 = document.createElement("div");
        let beneficiosTarjeta_4_p_1 = document.createElement("p");
        let beneficiosTarjeta_4_p_2 = document.createElement("p");

        let beneficiosTarjeta_5 = document.createElement("div");
        let beneficiosTarjeta_5_img = document.createElement("img");
        let beneficiosTexto_5 = document.createElement("div");
        let beneficiosTarjeta_5_p_1 = document.createElement("p");
        let beneficiosTarjeta_5_p_2 = document.createElement("p");

        barraSuperiorTitulo.textContent = "Beneficios";
        barraSuperiorSubtitulo.innerHTML = "<span>Home</span> / Beneficios";

        beneficiosTarjeta_1_img.src = "https://www.swisstradingco.com/assets/img/blog-7.jpg";
        beneficiosTarjeta_1_p_1.textContent = "EXPERIENCIA DE COMPRA INSUPERABLE";
        beneficiosTarjeta_1_p_2.textContent = "Sabemos que una buena experiencia de compra comienza en el momento en que tú nos llamas. Por eso, contamos con operadores especializados para brindarte una experiencia gratificante y responder con el más alto nivel a tus demandas.";

        beneficiosTarjeta_2_img.src = "https://www.swisstradingco.com/assets/img/blog-8.jpg";
        beneficiosTarjeta_2_p_1.textContent = "COMPROMISO TOTAL";
        beneficiosTarjeta_2_p_2.textContent = "Creemos que el mejor negocio es que nuestros clientes estén satisfechos, por eso asumimos un compromiso total en cada uno de nuestros proyectos, en todas las áreas de la empresa.";

        beneficiosTarjeta_3_img.src = "https://www.swisstradingco.com/assets/img/blog-10.jpg";
        beneficiosTarjeta_3_p_1.textContent = "COMPRA SEGURA";
        beneficiosTarjeta_3_p_2.textContent = "Ahora más que nunca, tú necesitas comprar online de la forma más segura. Por eso, te ofrecemos un servicio confiable. Para que puedas comprar lo que te gusta, lo que necesites, sin moverte de tu casa y con toda la seguridad que mereces.";

        beneficiosTarjeta_4_img.src = "https://www.swisstradingco.com/assets/img/blog-11.jpg";
        beneficiosTarjeta_4_p_1.textContent = "ENTREGA A DOMICILIO";
        beneficiosTarjeta_4_p_2.textContent = "El mundo cambió. Y tus costumbres también. Por eso, te ofrecemos el mejor servicio de entrega a domicilio. Tú nos indicas dónde quieres que se haga la entrega y nosotros te lo llevamos. Así de fácil, sin moverte de tu casa."

        beneficiosTarjeta_5_img.src = "https://www.swisstradingco.com/assets/img/blog-12.jpg";
        beneficiosTarjeta_5_p_1.textContent = "GARANTÍA DE 90 DÍAS";
        beneficiosTarjeta_5_p_2.textContent = "Compra tranquilo, todos nuestros productos cuentan con garantía. Si por algún motivo no estás 100% conforme, sólo debes solicitar el cambio o devolución. Sin excusas ni cuestionamientos. Tienes 90 días para probarlo. Un beneficio más de Swiss Trading Co. para hacer tu vida más fácil.";

        main.appendChild(barraSuperior);
        barraSuperior.appendChild(barraSuperiorTitulo);
        barraSuperior.appendChild(barraSuperiorSubtitulo);

        main.appendChild(beneficiosContenedor);

        beneficiosContenedor.appendChild(beneficiosTop);

        beneficiosTop.appendChild(beneficiosTarjeta_1);
        beneficiosTarjeta_1.appendChild(beneficiosTarjeta_1_img);
        beneficiosTarjeta_1.appendChild(beneficiosTexto_1);
        beneficiosTexto_1.appendChild(beneficiosTarjeta_1_p_1);
        beneficiosTexto_1.appendChild(beneficiosTarjeta_1_p_2);

        beneficiosTop.appendChild(beneficiosTarjeta_2);
        beneficiosTarjeta_2.appendChild(beneficiosTarjeta_2_img);
        beneficiosTarjeta_2.appendChild(beneficiosTexto_2);
        beneficiosTexto_2.appendChild(beneficiosTarjeta_2_p_1);
        beneficiosTexto_2.appendChild(beneficiosTarjeta_2_p_2);

        beneficiosTop.appendChild(beneficiosTarjeta_3);
        beneficiosTarjeta_3.appendChild(beneficiosTarjeta_3_img);
        beneficiosTarjeta_3.appendChild(beneficiosTexto_3);
        beneficiosTexto_3.appendChild(beneficiosTarjeta_3_p_1);
        beneficiosTexto_3.appendChild(beneficiosTarjeta_3_p_2);

        beneficiosContenedor.appendChild(beneficiosBottom);

        beneficiosBottom.appendChild(beneficiosTarjeta_4);
        beneficiosTarjeta_4.appendChild(beneficiosTarjeta_4_img);
        beneficiosTarjeta_4.appendChild(beneficiosTexto_4);
        beneficiosTexto_4.appendChild(beneficiosTarjeta_4_p_1);
        beneficiosTexto_4.appendChild(beneficiosTarjeta_4_p_2);

        beneficiosBottom.appendChild(beneficiosTarjeta_5);
        beneficiosTarjeta_5.appendChild(beneficiosTarjeta_5_img);
        beneficiosTarjeta_5.appendChild(beneficiosTexto_5);
        beneficiosTexto_5.appendChild(beneficiosTarjeta_5_p_1);
        beneficiosTexto_5.appendChild(beneficiosTarjeta_5_p_2);

        barraSuperior.classList.add("barra-superior");

        beneficiosContenedor.classList.add("beneficios-contenedor");

        beneficiosTop.classList.add("beneficios-top");
        beneficiosBottom.classList.add("beneficios-bottom");

        beneficiosTarjeta_1.classList.add("beneficios-tarjeta");
        beneficiosTarjeta_2.classList.add("beneficios-tarjeta");
        beneficiosTarjeta_3.classList.add("beneficios-tarjeta");
        beneficiosTarjeta_4.classList.add("beneficios-tarjeta");
        beneficiosTarjeta_5.classList.add("beneficios-tarjeta");

        beneficiosTexto_1.classList.add("beneficios-texto");
        beneficiosTexto_2.classList.add("beneficios-texto");
        beneficiosTexto_3.classList.add("beneficios-texto");
        beneficiosTexto_4.classList.add("beneficios-texto");
        beneficiosTexto_5.classList.add("beneficios-texto");

        beneficiosTarjeta_1_p_1.classList.add("titulo");
        beneficiosTarjeta_2_p_1.classList.add("titulo");
        beneficiosTarjeta_3_p_1.classList.add("titulo");
        beneficiosTarjeta_4_p_1.classList.add("titulo");
        beneficiosTarjeta_5_p_1.classList.add("titulo");

        beneficiosTarjeta_1_p_2.classList.add("parrafo");
        beneficiosTarjeta_2_p_2.classList.add("parrafo");
        beneficiosTarjeta_3_p_2.classList.add("parrafo");
        beneficiosTarjeta_4_p_2.classList.add("parrafo");
        beneficiosTarjeta_5_p_2.classList.add("parrafo");

        throw new Error("Error controlado");
    }
}