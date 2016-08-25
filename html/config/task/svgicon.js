var gulp = require('gulp'),
  svgSymbols = require('gulp-svg-symbols'),
  browserSync = require('browser-sync'),
  cheerio = require('gulp-cheerio'),
  path = require('path'),
  reload = browserSync.reload,
  svgmin = require('gulp-svgmin'),
  svgstore = require('gulp-svgstore'),
  inject = require('gulp-inject'),
  customHTMLTemplate = path.join(__dirname, './config/template/svghtml.html')

// gulp.task('svgicon', function () {
//   gulp.src('./assets/svg/**/*.svg')
//     // .pipe(cheerio({
//     //    run: function($) {
//     //        $('[fill]').removeAttr('fill')
//     //    },
//     //    parserOptions: {
//     //        xmlMode: true
//     //    }
//     // }))
//     .pipe(svgmin())
//     .pipe(svgSymbols({
//       templates: [ './config/template/svghtml.html' ]
//     }))
//     .pipe(gulp.dest('./public/img/'))
//     .pipe(reload({
//       stream: true
//     }))
// })

gulp.task('svgstore', function () {
  var svgs = gulp
    .src('./assets/svg/**/*.svg')
    // .pipe(cheerio({
    //    run: function($) {
    //        $('[fill]').removeAttr('fill')
    //    },
    //    parserOptions: {
    //        xmlMode: true
    //    }
    // }))
    .pipe(svgmin())
    .pipe(svgstore({ inlineSvg: true }))

  function fileContents (filePath, file) {
    return file.contents.toString()
  }

  return gulp
    .src('./config/template/svghtml.html')
    .pipe(inject(svgs, { transform: fileContents }))
    .pipe(gulp.dest('./public/img/'))
})
