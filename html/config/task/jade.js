var gulp = require('gulp'),
    jade = require('gulp-jade'),
    browserSync = require('browser-sync'),
    cache = require('gulp-cached'),
    progeny = require('gulp-progeny'),
    gutil = require('gulp-util'),
    plumber = require('gulp-plumber'),
    convertEncoding = require('gulp-convert-encoding'),
    reload = browserSync.reload;

// Собираем html из Jade
gulp.task('jadehtml', function() {
    return gulp.src(['./assets/template/*.jade', '!./assets/template/_*.jade'])
        .pipe(plumber())
        .pipe(jade({
            pretty: true
        })) // Собираем Jade только в папке ./assets/template/ исключая файлы с _*
        // .pipe(convertEncoding({to: 'win1251'}))
        .pipe(gulp.dest('./public/')) // Записываем собранные файлы
});


gulp.task('jade', function() {
    gulp.src(['./assets/template/*.jade', '!./assets/template/_*.jade'])
        .pipe(plumber())
        .pipe(browserSync.reload({
            stream: true
        }))
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest('./public/')) // Записываем собранные файлы

});
