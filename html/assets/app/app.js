var ScrollMagic = require('scrollmagic')
import { map } from './component/map/index'
import { restaurantGallery } from './component/restaurant/gallery'
import { franchisingInit } from './component/franchising/index'
import { lavkaInit } from './component/lavka/index'

document.addEventListener('DOMContentLoaded', function () {
  // Choise restaurant
  Array.prototype.slice.call(document.querySelectorAll('.restaurant')).forEach(function (el, i) {
    el.addEventListener('mouseenter', function () {
      el.classList.add('restaurantIsHover')
      document.querySelector('.restaurantsSlogan').classList.remove('restaurantsSloganIsShow')
    })

    el.addEventListener('mouseleave', function () {
      el.classList.remove('restaurantIsHover')
      document.querySelector('.restaurantsSlogan').classList.add('restaurantsSloganIsShow')
    })

    el.querySelector('.buttonOutline').addEventListener('click', function () {
      el.classList.add('restaurantIsPage')
      document.querySelector('.restaurants').classList.add('restaurantsIsActive')
      document.querySelector('.headerControl').classList.add('headerControlIsShow')
      document.querySelector('.restaurantsSlogan').classList.remove('restaurantsSloganIsShow')
      window.addEventListener('wheel', onWheel)
    })
    Array.prototype.slice.call(document.querySelectorAll('.js-restaurant-back')).forEach(function (elButton, i) {
      elButton.addEventListener('click', function () {
        el.classList.remove('restaurantIsPage')
        document.querySelector('.restaurants').classList.remove('restaurantsIsActive')
        document.querySelector('.headerControl').classList.remove('headerControlIsShow')
        document.querySelector('.restaurantsSlogan').classList.add('restaurantsSloganIsShow')
        window.removeEventListener('wheel', onWheel)
      })
    })
  })

  // Menu
  document.querySelector('.buttonShowNav').addEventListener('click', function () {
    console.log('click')
    document.querySelector('.mainMenu').classList.add('mainMenuShow')
  })

  function onWheel (e) {
    e = e || window.event
    // wheelDelta не дает возможность узнать количество пикселей
    var delta = e.deltaY || e.detail || e.wheelDelta
    const elGallery = document.querySelector('.restaurantPageGallery')
    if (delta > 130) {
      elGallery.classList.add('restaurantPageGalleryShow')
    }
    if (delta < -130) {
      elGallery.classList.remove('restaurantPageGalleryShow')
    }

    e.preventDefault ? e.preventDefault() : (e.returnValue = false)
  }

  restaurantGallery()
  if (document.contains(document.querySelector('.map'))) {
    map()
  }
  franchisingInit()
  lavkaInit()
  document.querySelector('.buttonActivateCart').addEventListener('click', function () {
      document.querySelector('.activateModal').classList.add('activateModalShow')
  })
    document.querySelector('.activateModalClose').addEventListener('click', function () {
        document.querySelector('.activateModal').classList.remove('activateModalShow')
    })
})
