document.addEventListener("DOMContentLoaded", function () {

    const tabla = document.querySelector("table");
    const encabezado = document.querySelector("header");

    // Crear buscador
    const buscador = document.createElement("input");

    buscador.type = "text";
    buscador.placeholder = "Buscar producto...";
    buscador.id = "buscador";

    // Estilos del buscador
    buscador.style.display = "block";
    buscador.style.width = "50%";
    buscador.style.maxWidth = "500px";
    buscador.style.margin = "20px auto";
    buscador.style.padding = "12px";
    buscador.style.fontSize = "16px";
    buscador.style.border = "2px solid #1565c0";
    buscador.style.borderRadius = "8px";
    buscador.style.outline = "none";

    // Agregar buscador antes de la tabla
    tabla.parentNode.insertBefore(buscador, tabla);

    // Función para buscar
    buscador.addEventListener("keyup", function () {

        const texto = buscador.value.toLowerCase();

        const filas = tabla.querySelectorAll("tr");

        filas.forEach(function (fila, indice) {

            // No ocultar el encabezado
            if (indice === 0) {
                return;
            }

            const contenido = fila.textContent.toLowerCase();

            if (contenido.includes(texto)) {
                fila.style.display = "";
            } else {
                fila.style.display = "none";
            }
        });
    });

    // Mensaje cuando una imagen no carga
    const imagenes = document.querySelectorAll("td img");

    imagenes.forEach(function (imagen) {

        imagen.addEventListener("error", function () {
            imagen.alt = "Imagen no disponible";
            imagen.style.backgroundColor = "#eeeeee";
        });

    });

});
