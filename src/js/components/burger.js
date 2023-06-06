const burger = document.querySelector(".burger");
const menu = document.querySelector(".mobile-menu");

function toggleMenu() {
  burger.addEventListener("click", () => {
    burger.classList.toggle("burger--active");
    menu.classList.toggle('mobile-menu--active');
  });
}

export default toggleMenu;
