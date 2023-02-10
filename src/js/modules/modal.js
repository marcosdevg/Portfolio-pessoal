export default function initModal() {
  const tabBox = document.querySelectorAll(".box");
  const tabContent = document.querySelectorAll("[data-tab='content'] section");
  const botaoFechar = document.querySelectorAll('[data-modal="fechar"]');
  const containerModal = document.querySelectorAll('[data-modal="container"]');

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
        item.addEventListener("click", (event) => {
        cliqueForaModal(event, index, content);
      });
    });

    tabBox.forEach((item, index) => {
        item.addEventListener("click", () => {
          activeTab(index);
        });
    });

    botaoFechar.forEach((item, index) => {
        item.addEventListener("click", () => {
          fecharModal(index);
        });
    });

  
  }
}
