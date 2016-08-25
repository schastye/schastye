var Swiper = require('swiper/dist/js/swiper.js')
export function restaurantGallery () {
  const sliderRestaurant = document.querySelector('.restaurantPageGallerySlider')
  if (document.contains(sliderRestaurant))
    var mainSlider = new Swiper('.restaurantPageGallerySlider', {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev'
    })
}
