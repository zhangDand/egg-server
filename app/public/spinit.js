const mySwiper = new Swiper('.swiper-container', {
  direction: 'vertical',
  loop: false,
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  on: {
    init() {
      swiperAnimateCache(this);
      swiperAnimate(this);
    },
    slideChangeTransitionEnd() {
      swiperAnimate(this);
    },
  },

})
;
