import initModal from "./modules/modal.js";
import initScrollSuave from "./modules/scroll-suave.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initAnimacaoSrcoll from "./modules/scroll-animacoes.js";
import initHeaderFixo from "./modules/header.js";

initModal();
initScrollSuave();
initMenuMobile();
initAnimacaoSrcoll();
initHeaderFixo()

  const anime = new TypeIt("#typedev", {
  speed: 110
})

setTimeout(() => {
  anime.type(" ").go()
},1200)