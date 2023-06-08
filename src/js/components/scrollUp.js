function addClassAfterScroll() {
  const arrowUp = document.querySelector(".footer__arrow");
  let height = document.documentElement.scrollTop;

  if (height > 1000) {
    arrowUp.classList.add('show')
  } else {
    arrowUp.classList.remove('show');
  }
}

function scrollUp() {
  window.addEventListener("scroll", addClassAfterScroll);
}

export default scrollUp;
