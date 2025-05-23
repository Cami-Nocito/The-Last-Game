/**IDs elementos html.idex  */

const traducciones = [
    { id: "juegos", key: "juegos"},
    { id: "novedades", key: "novedades"},
    { id: "recomendaciones", key: "recomendaciones" },
    { id: "consolas-juegos", key: "contacto-menu" },
    { id: "tags", key: "tags" },
    { id: "nosotros", key: "aboutUs" },
    { id: "contacto-menu", key: "contactUs" },
    { id: "bienvenida", key: "welcome" },
    { id: "descuento", key: "discount" },
    { id: "boton-comederos", key: "feeders" },
    { id: "destacados", key: "featured" },
    { id: "tags", key: "tags" },
    { id: "consolas", key: "consolas" },
    { id: "videogames", key: "videogames" },
    { id: "nintendo", key: "nintendo" },
    {id: "accesories", key: "accesories"},
    { id: "form-titulo", key: "formTitle" },
    { id: "nombre", key: "namePlaceholder", isPlaceholder: true },
    { id: "correo", key: "emailPlaceholder", isPlaceholder: true },
    { id: "telefono", key: "phonePlaceholder", isPlaceholder: true },
    { id: "reset", key: "reset", isButton: true },
    { id: "enviar", key: "send", isButton: true },
    { id: "sub-texto", key: "subscribeText" },
    { id: "sub-btn", key: "subscribeBtn", isButton: true },
    { id: "localidad-label", key: "location" },
    { id: "localidad-valor", key: "locationValue" },
    { id: "telefono-label", key: "phone" },
    { id: "email-label", key: "email" },
    { id: "derechos", key: "rights" }
];

/**Detecta el cambio de idioma */

document.getElementById("idioma").addEventListener("change", (e) => {
    cambiarIdioma(e.target.value);
});

/**Función para cambiar el idioma */

function cambiarIdioma(lang) {
    fetch(`./lang/${lang}.json`)
        .then((res) => res.json())
        .then((trad) => {
            traducciones.forEach(({ id, key, isPlaceholder, isButton }) => {
                const el = document.getElementById(id);
                if (!el) return;

                if (isPlaceholder) {
                    el.placeholder = trad[key];
                } else if (isButton) {
                    el.textContent = trad[key];
                } else {
                    el.innerText = trad[key];
                }
            });
        })
        .catch((err) => console.error("Error cargando idioma:", err));
}