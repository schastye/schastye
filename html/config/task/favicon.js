var gulp = require('gulp'),
    newer = require('gulp-newer'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

gulp.task('favicon', function() {
    gulp.src(['./assets/favicon/**/*.png', './assets/favicon/**/*.ico'])
        .pipe(newer('./public/'))
        .pipe(gulp.dest('./public/'))
        .pipe(reload({
            stream: true
        }));

});