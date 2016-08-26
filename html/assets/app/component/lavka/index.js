export function lavkaInit () {
  require('../../lib/bideo.js')
  const lavkaElement = document.querySelector('.lavka')
  if (document.contains(lavkaElement)) {

    ;(function () {
    var bv = new Bideo()
    bv.init({

      // Video element
      videoEl: document.querySelector('.lavkaVideo'),

      // Container element
      container: document.querySelector('.lavka'),

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
          src: 'video/lavka.mp4',
          type: 'video/mp4'
        }
      ],

      // What to do once video loads (initial frame)
      onLoad: function () {
        document.querySelector('.lavkaVideoCover').style.display = 'none'
      }
    })
  }())
  }

}
// window.removeEventListener('wheel', onWheel)
