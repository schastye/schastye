export function fabricInit () {
  require('../../lib/bideo.js')
  const fabricElement = document.querySelector('.fabric')
  if (document.contains(fabricElement)) {

    (function () {
    var bv = new Bideo()
    bv.init({

      // Video element
      videoEl: document.querySelector('.fabricVideo'),

      // Container element
      container: document.querySelector('.fabric'),

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
          src: 'video/fabric.mp4',
          type: 'video/mp4'
        }
      ],

      // What to do once video loads (initial frame)
      onLoad: function () {
        document.querySelector('.fabricVideoCover').style.display = 'none'
      }
    })
  }())
  }

}
// window.removeEventListener('wheel', onWheel)
