var gulp = require('gulp'),
    concat = require('gulp-concat'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;


// Собираем JS
gulp.task('js', function() {
    gulp.src(['./assets/js/index/**/*.js','./assets/b/**/*.js', './assets/js/plugins.js'])
        .pipe(concat('index.js')) // Собираем все JS, кроме тех которые находятся в ./assets/js/vendor/**
        .pipe(gulp.dest('./public/js'))
        .pipe(reload({
            stream: true
        }));
});

gulp.task('bower-js', function() {
    gulp.src([
        './assets/bower_components/jquery/dist/jquery.js',
        './assets/bower_components/switchery/switchery.js'
    ])
        .pipe(gulp.dest('./assets/js/vendor/'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('vendor-js', function() {
    gulp.src(['./assets/js/vendor/**/*.js'])
        .pipe(concat('vendor.js')) // Собираем все JS, кроме тех которые находятся в ./assets/js/vendor/**
        .pipe(gulp.dest('./public/js'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('load-js', function() {
    gulp.src(['./assets/js/load/**/*.js'])
        .pipe(concat('load.js'))
        .pipe(gulp.dest('./public/js'))
        .pipe(browserSync.reload({
            stream: true
        }));
});
