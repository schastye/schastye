// Запуск сервера разработки gulp watch
var gulp = require('gulp'),
    batch = require('gulp-batch'),
    browserSync = require('browser-sync'),
    remember = require('gulp-remember'),
    gutil = require('gulp-util'),
    cache = require('gulp-cached'),
    remember = require('gulp-remember'),
    path = require('path')
    watch = require('gulp-watch'),
    runSequence = require('run-sequence');

gulp.task('default', ['stylus', 'jadeMixin', 'jadehtml', 'images', 'favicon','svgstore', 'fonts', 'hapi','browser-sync'],function () {
    watch(['./assets/b/**/*.styl', '!./assets/b/**/_*.styl'], {events: ['add', 'change', 'unlink', 'unlinkDir']}, function (e) {

        if (e.event === 'unlink' || e.event === 'unlinkDir') { // if a file is deleted, forget about it
            cache.caches = {};
            remember.forgetAll('stylus');
            gutil.log("delete")
        }
        gulp.start(['stylus'])

    })


    gulp.watch('../../local/**/**/*.styl', {dot: true }, ['sync'])
    gulp.watch('assets/template/**/*.jade', ['jadeMixin', 'jadehtml']);
    gulp.watch('assets/template/**/*.jade').on("change", browserSync.reload)
    gulp.watch('public/js/app.js').on("change", browserSync.reload)
    gulp.watch('assets/img/**/*', ['images'])
    gulp.watch('assets/favicon/**/*', ['favicon'])
    gulp.watch('assets/fonts/**/*', ['fonts'])
    gulp.watch('assets/svg/**/*', ['svgstore'])
})


// gulp.task('default', function() {
//     gulp.start(['stylus', 'jadeMixin', 'jade', 'images', 'favicon','svgstore', 'fonts', 'hapi','browser-sync'])
//     //gulp.start(['hapi'])
//     gulp.start(['browser-sync'])
//
//
//     gulp.watch('assets/b/**/*.styl', ['stylus'])
//     gulp.watch('assets/template/**/*.jade').on("change", browserSync.reload)
//     gulp.watch('public/js/app.js').on("change", browserSync.reload)
//     gulp.watch('assets/b/**/*.jade', ['jadeMixin', 'jade']);
//     gulp.watch('assets/img/**/*', ['images'])
//     gulp.watch('assets/favicon/**/*', ['favicon'])
//     gulp.watch('assets/fonts/**/*', ['fonts'])
//     gulp.watch('assets/svg/**/*', ['svgstore'])
//
//
//
//
// });
