document.addEventListener("DOMContentLoaded", () => {
  const botones = document.querySelectorAll(".botonM");

  botones.forEach((boton) => {
    boton.addEventListener("click", () => {
      const contenido = boton.nextElementSibling;
      if (contenido) {
        contenido.classList.toggle("mostrar");
        boton.textContent = contenido.classList.contains("mostrar") 
          ? "Ocultar Pasos" 
          : "Mostrar Pasos";
      }
    });
  });
});
