const arrow = document.querySelector(".about__open-btn");
const hiddenContent = document.querySelector(".about__hidden-content");
const content = document.querySelector('.about__content')

function openAboutSection() {
  arrow.addEventListener("click", () => {
    arrow.classList.add('hide');
    content.classList.add('about__content--open');
  });
}

export default openAboutSection;
