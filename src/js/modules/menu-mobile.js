export default function initMenuMobile() {
  const btnMobile = document.getElementById("btn-mobile");

  function toggleMenu(event) {
    if (event.type === "touchstart") event.preventDefault();
    const nav = document.getElementById("nav");
    nav.classList.toggle("active");
    const active = nav.classList.contains("active");
    event.currentTarget.setAttribute("aria-expanded", active);
    if (active) {
      event.currentTarget.setAttribute("aria-label", "Fechar Menu");
    } else {
      event.currentTarget.setAttribute("aria-label", "Abrir Menu");
    }
    if (window.innerWidth <= 768) {
      var elementos = document.querySelectorAll("#menu li a");
      elementos.forEach(function(elemento) {
        elemento.addEventListener("click", toggleMenu);
      });
    }
  }
  btnMobile.addEventListener("click", toggleMenu);
  btnMobile.addEventListener("touchstart", toggleMenu);

  /*Para adicinar o evento click no menu quando estiver na versão mobile*/
  
    
  
  
}
