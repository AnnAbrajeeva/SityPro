import GraphModal from 'graph-modal';
const modal = new GraphModal();

function openModal() {
  const links = document.querySelectorAll("[data-modal='open-modal']");

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault;
      new GraphModal().open("first");
    });
  });
}

export default openModal;
