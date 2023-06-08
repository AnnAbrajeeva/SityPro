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

const swiperPortfolio = new Swiper(".portfolio__slider", {
  slidesPerView: 1,
  loop: true,
  modules: [Pagination, Navigation],
  pagination: {
    el: ".portfolio-slider__pag",
    type: "fraction",
  },
  navigation: {
    nextEl: ".portfolio-slider__next",
    prevEl: ".portfolio-slider__prev",
  },

});

const swiperPortfolioTablet = new Swiper(".portfolio__slider-tablet", {
  slidesPerView: 1,
  loop: true,
  modules: [Pagination, Navigation],
  pagination: {
    el: ".portfolio-slider__pag-tablet",
    type: "bullets",
  },
});

const swiperServices = new Swiper(".services__slider", {
  slidesPerView: 1,
  loop: false,
  modules: [Pagination],
  pagination: {
    el: '.services__pag',
    type: 'bullets',
  },
});

export { swiperHero, swiperPortfolio, swiperServices, swiperPortfolioTablet };
