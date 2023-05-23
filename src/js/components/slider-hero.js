import Swiper, { Navigation, Pagination } from "swiper";

const swiperHero = new Swiper(".hero__slider", {
  slidesPerView: 1,
  loop: true,
  modules: [Pagination],
  pagination: {
    el: '.hero-pag__pagination',
    type: 'bullets',
  },
});

export { swiperHero };
