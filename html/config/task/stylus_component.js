var gulp = require('gulp'),
  stylus = require('gulp-stylus'),
  browserSync = require('browser-sync'),
  postcss = require('gulp-postcss'),
  assets = require('postcss-assets'),
  concat = require('gulp-concat'),
  plumber = require('gulp-plumber'),
  jeet = require('jeet'),
  rupture = require('rupture'),
  sourcemaps = require('gulp-sourcemaps'),
  cache = require('gulp-cached'),
  remember = require('gulp-remember'),
  path = require('path')
var rsync = require('gulp-rsync')

// Собираем Stylus
gulp.task('stylus_comp', function () {
  gulp.src(['./local/**/*.styl', '!./local/**/_*.styl' ], {cwd: '../../', dot: true })
    .pipe(plumber())

    .pipe(sourcemaps.init())
    .pipe(stylus({
      import: ['rupture'],
      use: [
        rupture()
      ]

    }))
    .pipe(postcss([
      assets({
        loadPaths: ['assets/icons/']
      }),
      require('lost'),
      require('postcss-clearfix'),
      require('postcss-short'),
      require('postcss-easings'),
      require('postcss-default-unit'),
      require('postcss-merge-longhand'),
      require('postcss-center'),
      // require('postcss-normalize'),
      require('postcss-flexbox'),
      require('postcss-flexbugs-fixes'),
      require('postcss-flexibility'),
      require('postcss-font-awesome'),
      require('autoprefixer'),
      require('postcss-triangle'),
      require('postcss-responsive-type')
    ]))
    .pipe(gulp.dest('./local/', {cwd: '../../'})) // записываем css

})
