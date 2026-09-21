document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // ANIMACION DE TARJETAS
    // =========================

    const tarjetas = document.querySelectorAll(
        ".nieto1, .nieto2, .nieto3"
    );

    const observador = new IntersectionObserver(
        (entradas) => {
            entradas.forEach((entrada) => {
                if (entrada.isIntersecting) {
                    entrada.target.classList.add("visible");
                }
            });
        },
        {
            threshold: 0.15
        }
    );

    tarjetas.forEach((tarjeta) => {
        observador.observe(tarjeta);
    });


    // =========================
    // BOTON VOLVER ARRIBA
    // =========================

    const boton = document.createElement("button");

    boton.id = "btnArriba";
    boton.innerHTML = "↑";
    boton.title = "Volver arriba";

    document.body.appendChild(boton);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
            boton.style.display = "block";
        } else {
            boton.style.display = "none";
        }
    });

    boton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });


    // =========================
    // MENU
    // =========================

    const menu = document.querySelectorAll("nav li");
    const secciones = document.querySelectorAll(
        ".nieto1, .nieto2, .nieto3"
    );

    menu.forEach((item) => {

        item.addEventListener("click", () => {

            const texto = item.textContent
                .trim()
                .toLowerCase();

            secciones.forEach((seccion) => {

                const titulo = seccion.querySelector("h2");

                if (!titulo) return;

                const tituloTexto = titulo.textContent
                    .trim()
                    .toLowerCase();

                if (
                    tituloTexto.includes(texto) ||
                    texto.includes(tituloTexto)
                ) {
                    seccion.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });

                    seccion.style.outline = "3px solid #2563eb";

                    setTimeout(() => {
                        seccion.style.outline = "none";
                    }, 1500);
                }

            });

        });

    });

});