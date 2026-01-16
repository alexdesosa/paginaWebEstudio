// Esperar a que el DOM esté cargado
document.addEventListener("DOMContentLoaded", () => {
  // 1. Efecto de cambio de color en el Header al hacer scroll
  const header = document.querySelector("header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.style.backgroundColor = "#050c16"; // Un azul un poco más oscuro al bajar
      header.style.padding = "0.5rem 5%"; // Se achica un poquito el menú
    } else {
      header.style.backgroundColor = "#0A192F"; // Vuelve al color original
      header.style.padding = "1rem 5%";
    }
  });

  // 2. Animación de aparición (Scroll Reveal)
  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Aplicamos la animación a las tarjetas de servicios y títulos
  document.querySelectorAll(".card, h2").forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.8s ease-out";
    observer.observe(el);
  });
});
