var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    prefix = require('gulp-autoprefixer'),
    replace = require('gulp-replace'),
    browserSync = require('browser-sync'),
    cssBase64 = require('gulp-css-base64'),
    //ttf2woff = require('gulp-ttf2woff'),
    //ttf2woff2 = require('gulp-ttf2woff2'),
    reload = browserSync.reload;



gulp.task('fonts', function() {
    gulp.src('./assets/fonts/**/*.styl')
        .pipe(stylus()) // собираем stylus
        .pipe(cssBase64({
            baseDir: "../../assets/fonts",
            maxWeightResource: 1000000
        }))
        .pipe(prefix({
            browsers: ['last 2 versions', 'IE 9', 'IE 10']
        }))
        .pipe(replace(/font-woff/g, 'x-font-woff'))
        .pipe(gulp.dest('./public/css/')) // записываем css
        .pipe(reload({
            stream: true
        }));
});


gulp.task('fontconv', function() {
    gulp.src(['./assets/fonts/src/**/*.ttf'])
        .pipe(ttf2woff())
        .pipe(ttf2woff2())
        .pipe(gulp.dest('./assets/fonts/'))
});
