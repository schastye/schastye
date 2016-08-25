var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    cache = require('gulp-cached'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

// Копируем и минимизируем изображения

gulp.task('images', function() {
    gulp.src('./assets/img/**/*')
        .pipe(cache('images'))
        .pipe(imagemin())
        .pipe(gulp.dest('./public/img'))
        .pipe(reload({
            stream: true
        }));

});

var tinypng = require('gulp-tinypng-compress');

gulp.task('tinypng', function () {
    gulp.src('./assets/img/**/*.{png,jpg,jpeg}')
        .pipe(tinypng({
            key: 'wFsD0dwWNjsvqdjfVOZI_hU8zq2sNvDD',
            sigFile: './assets/img/.tinypng-sigs',
            log: true
        }))
        .pipe(gulp.dest('./public/img'));
});

var smushit = require('gulp-smushit');

gulp.task('smushit', function () {
    return gulp.src('./assets/img/**/*.{png,jpg,jpeg}')
        .pipe(smushit())
        .pipe(gulp.dest('./public/imgIT'));
});
