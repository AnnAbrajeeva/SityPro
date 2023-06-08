// Данный файл - лишь собрание подключений готовых компонентов.
// Рекомендуется создавать отдельный файл в папке components и подключать все там

// Определение операционной системы на мобильных
import { mobileCheck } from "./functions/mobile-check";
import {
  swiperHero,
  swiperPortfolio,
  swiperServices,
  swiperPortfolioTablet,
} from "./components/sliders";

// Определение ширины экрана
// import { isMobile, isTablet, isDesktop } from './functions/check-viewport';
// if (isDesktop()) {
//   console.log('...')
// }

// Троттлинг функции (для ресайза, ввода в инпут, скролла и т.д.)
// import { throttle } from './functions/throttle';
// let yourFunc = () => { console.log('throttle') };
// let func = throttle(yourFunc);
// window.addEventListener('resize', func);

// Фикс фулскрин-блоков
// import './functions/fix-fullheight';

// Реализация бургер-меню
// import { burger } from './functions/burger';

// Реализация остановки скролла (не забудьте вызвать функцию)
// import { disableScroll } from './functions/disable-scroll';

// Реализация включения скролла (не забудьте вызвать функцию)
// import { enableScroll } from './functions/enable-scroll';

// Реализация модального окна
// import GraphModal from 'graph-modal';
// const modal = new GraphModal();

// Реализация табов
// import GraphTabs from 'graph-tabs';
// const tabs = new GraphTabs('tab');

// Получение высоты шапки сайта (не забудьте вызвать функцию)
// import { getHeaderHeight } from './functions/header-height';

// Подключение плагина кастом-скролла
// import 'simplebar';

// Подключение плагина для позиционирования тултипов
// import { createPopper, right} from '@popperjs/core';
// createPopper(el, tooltip, {
//   placement: 'right'
// });

// Подключение свайпера
// import Swiper, { Navigation, Pagination } from 'swiper';
// Swiper.use([Navigation, Pagination]);
// const swiper = new Swiper(el, {
//   slidesPerView: 'auto',
// });

// Подключение анимаций по скроллу
// import AOS from 'aos';
// AOS.init();

// Подключение параллакса блоков при скролле
// import Rellax from 'rellax';
// const rellax = new Rellax('.rellax');

// Подключение плавной прокрутки к якорям
import SmoothScroll from "smooth-scroll";
const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
});

// Подключение событий свайпа на мобильных
// import 'swiped-events';
// document.addEventListener('swiped', function(e) {
//   console.log(e.target);
//   console.log(e.detail);
//   console.log(e.detail.dir);
// });

import { validateForms } from "./functions/validate-forms";
const rules1 = [
  {
    ruleSelector: "[data-name='validate-name']",
    rules: [
      {
        rule: "required",
        errorMessage: "Введите Ваше имя"
      },
      {
        rule: "minLength",
        value: 3,
        errorMessage: "Имя не должно быть меньше 3 букв"
      },
    ],
  },
  {
    ruleSelector: "[data-phone='validate-phone']",
    rules: [
      {
        rule: "required",
        errorMessage: "Введите, пожалуйста, Ваш номер"
      },
    ],
  },
  {
    ruleSelector: "[data-check='validate-check']",
    rules: [
      {
        rule: "required",
        errorMessage: "Требуется Ваше согласие"
      },
    ],
  },
];



const afterForm = () => {
  console.log("Произошла отправка, тут можно писать любые действия");
};

validateForms(".form-section__form", rules1, afterForm);
validateForms(".modal__form", rules1, afterForm);
