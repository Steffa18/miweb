document.addEventListener("DOMContentLoaded", () => {
    // ==========================================
    // 1. EFECTO DE ESCRITURA DINÁMICA EN EL H1
    // ==========================================
    const textoCompleto = "Mi Página Web en Construcción";
    const elementoTexto = document.getElementById("texto-escrito");
    let indice = 0;
    const velocidadEscritura = 80; // Milisegundos por letra

    function escribirTitulo() {
        if (indice < textoCompleto.length) {
            elementoTexto.textContent += textoCompleto.charAt(indice);
            indice++;
            setTimeout(escribirTitulo, velocidadEscritura);
        }
    }

    // Iniciar el efecto de escritura
    escribirTitulo();

    // ==========================================
    // 2. INTERACTIVIDAD DEL MODO OSCURO
    // ==========================================
    const btnTheme = document.getElementById("btn-theme");

    btnTheme.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            btnTheme.textContent = "☀️ Modo Claro";
        } else {
            btnTheme.textContent = "🌙 Modo Oscuro";
        }
    });
});