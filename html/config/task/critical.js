var gulp = require('gulp'),
    critical = require('critical');

gulp.task('critical', function() {
    critical.generateInline({
        base: 'build/',
        src: 'index.html',
        styleTarget: 'css/blocks.css',
        htmlTarget: 'index.html',
        width: 1200,
        height: 900,
        minify: true
    });
});