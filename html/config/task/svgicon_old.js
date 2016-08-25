var gulp = require('gulp'),
    svgSymbols = require('gulp-svg-symbols'),
    browserSync = require('browser-sync'),
    cheerio = require('gulp-cheerio'),
    path = require('path'),
    reload = browserSync.reload,
    customHTMLTemplate = path.join(__dirname, './config/template/svghtml.html');


gulp.task('svgicon', function() {
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
        .pipe(gulp.dest('./public/img/'))
        .pipe(reload({
            stream: true
        }));

});