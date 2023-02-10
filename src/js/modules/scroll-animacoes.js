export default function initAnimacaoSrcoll() {
  ScrollReveal().reveal(".intro", {
    delay: 700,
    duration: 1500,
    origin: "left",
    distance: "80px",
  });
  ScrollReveal().reveal(".presentation-img", {
    delay: 900,
    duration: 1500,
    origin: "top",
    distance: "100px",
  });
  ScrollReveal().reveal("#menu li a", {
    delay: 100,
    origin: "top",
    interval: 200,
    distance: "50px",
  });

  ScrollReveal().reveal(".about-author", {
    delay: 500,
    duration: 1100,
    origin: "left",
    distance: "80px",
  });

  ScrollReveal().reveal(".about-description", {
    delay: 500,
    duration: 1100,
    origin: "bottom",
    distance: "80px",
  });

  ScrollReveal().reveal(".skill", {
    delay: 400,
    origin: "bottom",
    duration: 1000,
    interval: 200,
    distance: "50px",
  });

  ScrollReveal().reveal(".box", {
    delay: 100,
    origin: "top",
    duration: 1000,
    interval: 200,
    distance: "80px",
  });

  ScrollReveal().reveal(".networks", {
    delay: 100,
    origin: "left",
    duration: 1000,
    distance: "100px",
  });
  
  ScrollReveal().reveal('.title',{ 
    delay: 200,
    origin: 'left',
    duration: 1200, 
    distance: '100px' 
});
}
