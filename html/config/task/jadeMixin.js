var gulp = require('gulp'),
    concat = require('gulp-concat'),
    browserSync = require('browser-sync');

gulp.task('jadeMixin', function() {
    gulp.src(['./assets/b/**/*.jade', '!./assets/b/**/_*.jade'])
        .pipe(concat('_mixin.jade'))
        .pipe(gulp.dest('./assets/template/'))
        .pipe(browserSync.reload({
            stream: true
        }));
});
