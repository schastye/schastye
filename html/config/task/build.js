var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    jade = require('gulp-jade'),
    svgSymbols = require('gulp-svg-symbols'),
    cheerio = require('gulp-cheerio'),
    path = require('path'),
    csso = require('gulp-csso'),
    customHTMLTemplate = path.join(__dirname, './config/template/svghtml.html');

gulp.task('build', function() {

    // css
    // gulp.src(['./assets/b/blocks.styl', './assets/b/blocks.ie.styl', './assets/b/blocks.uri.styl'])
    //     .pipe(stylus()) // собираем stylus
    //     .pipe(prefix())
    //     .pipe(csso()) // минимизируем css
    //     .pipe(gulp.dest('./build/css/')); // записываем css

    // font
    gulp.src(['./public/css/*.css'])
        .pipe(csso()) // минимизируем css
        .pipe(gulp.dest('./build/css/')); // записываем css
    // jade
    gulp.src(['./assets/template/*.jade', '!./assets/template/_*.jade'])
        .pipe(jade())
        .pipe(gulp.dest('./build/'));

    gulp.src(['./assets/js/index/**/*.js', './assets/js/plugins.js'])
        .pipe(concat('index.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./build/js'));

    // js

    gulp.src(['./assets/js/vendor/**/*.js'])
        .pipe(concat('vendor.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./build/js'));

    gulp.src(['./assets/js/load/**/*.js'])
        .pipe(concat('load.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./build/js'));

    // image
    gulp.src('./assets/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/img'));

    // favicon
    gulp.src(['./assets/favicon/**/*.png', './assets/favicon/**/*.ico'])
        .pipe(gulp.dest('./build/'));

    gulp.src('./assets/svg/**/*.svg')
        .pipe(cheerio({
            run: function($) {
                $('[fill]').removeAttr('fill');
            },
            parserOptions: {
                xmlMode: true
            }
        }))
        .pipe(svgSymbols({
            templates: ['./config/template/svghtml.html']
        }))
        .pipe(gulp.dest('./build/img/'));


});
