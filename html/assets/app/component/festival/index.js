var Swiper = require('swiper/dist/js/swiper.js')
export function festivalInit () {
  const sliderFestivals = document.querySelector('.festivalsSliders')
  if (document.contains(sliderFestivals))
    var mainSlider = new Swiper('.festivalsSliders', {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev'
    })
}
