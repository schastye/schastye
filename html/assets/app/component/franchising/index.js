export function franchisingInit () {
  require('./bideo.js')
  const franchisingElement = document.querySelector('.franchising')
  if (document.contains(franchisingElement)) {
    window.addEventListener('wheel', onWheelFranchising)

    ;(function () {
    var bv = new Bideo()
    bv.init({

      // Video element
      videoEl: document.querySelector('.franchisingVideo'),

      // Container element
      container: document.querySelector('.franchising'),

      // Resize
      resize: true,

      // autoplay: false,

      isMobile: window.matchMedia('(max-width: 768px)').matches,

      // playButton: document.querySelector('#play'),
      // pauseButton: document.querySelector('#pause'),

      // Array of objects containing the src and type
      // of different video formats to add
      src: [
        {
          src: 'video/franchising.mp4',
          type: 'video/mp4'
        }
      ],

      // What to do once video loads (initial frame)
      onLoad: function () {
        document.querySelector('.franchisingVideoCover').style.display = 'none'
      }
    })
  }())
  }
  function onWheelFranchising (e) {
    e = e || window.event
    // wheelDelta не дает возможность узнать количество пикселей
    var delta = e.deltaY || e.detail || e.wheelDelta
    const elGallery = document.querySelector('.franchisingPage')
    if (delta > 10) {
      elGallery.classList.add('franchisingPageShow')
      document.querySelector('.header').classList.add('headerBlack')
      document.querySelector('.headerControl').classList.add('headerControlIsShow')
    }
    else {
      elGallery.classList.remove('franchisingPageShow')
      document.querySelector('.header').classList.remove('headerBlack')
      document.querySelector('.headerControl').classList.remove('headerControlIsShow')
    }
    e.preventDefault ? e.preventDefault() : (e.returnValue = false)
  }
}
// window.removeEventListener('wheel', onWheel)
