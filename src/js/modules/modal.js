export default function initModal() {
  const tabBox = document.querySelectorAll(".box");
  const tabContent = document.querySelectorAll("[data-tab='content'] section");
  const botaoFechar = document.querySelectorAll('[data-modal="fechar"]');
  const containerModal = document.querySelectorAll('[data-modal="container"]');
  const eventos = ["click", "touchstart"];

  if (
    tabBox.length &&
    tabContent.length &&
    botaoFechar.length &&
    containerModal.length
  ) {
    function activeTab(index) {
      tabContent[index].classList.add("ativo");
    }

    function fecharModal(index) {
      tabContent[index].classList.remove("ativo");
    }

     function cliqueForaModal(event, index, content) {
      if (event.target == content[index]) {
        fecharModal(index);
      }
    }

    containerModal.forEach((item, index, content) => {
      eventos.forEach((evento) => {
        item.addEventListener(evento, (event) => {
        cliqueForaModal(event, index, content);
      });
      })
    });

    tabBox.forEach((item, index) => {
      eventos.forEach((evento) => {
        item.addEventListener(evento, () => {
          activeTab(index);
        });
      })
    });

    botaoFechar.forEach((item, index) => {
      eventos.forEach((evento) => {
        item.addEventListener("click", () => {
          fecharModal(index);
        });
      })
    });

  
  }
}
