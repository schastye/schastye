var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    browserSync = require('browser-sync'),
    postcss = require('gulp-postcss'),
    assets = require('postcss-assets'),
    concat = require('gulp-concat'),
    plumber = require('gulp-plumber'),
    jeet = require('jeet'),
    rupture = require('rupture'),
    sourcemaps = require('gulp-sourcemaps'),
    cache = require('gulp-cached'),
    remember = require('gulp-remember'),
    path = require('path');


// Собираем Stylus
gulp.task('stylus', function() {

        gulp.src(['./assets/b/layout/**/*.styl', './assets/b/ui/**/*.styl', './assets/b/block/**/*.styl', '!./assets/b/**/_*.styl'])
            .pipe(plumber())
            .pipe(cache('stylus'))
            .pipe(sourcemaps.init())
            .pipe(stylus({
                    import: ['rupture'],
                    use: [
                        rupture()
                    ]

                    }))
            .pipe(postcss([
                assets({
                    loadPaths: ['assets/icons/']
                }),
                require('lost'),
                require('postcss-clearfix'),
                require('postcss-short'),
                require('postcss-easings'),
                require('postcss-default-unit'),
                require('postcss-merge-longhand'),
                require('postcss-center'),
                //require('postcss-normalize'),
                require('postcss-flexbox'),
                require('postcss-flexbugs-fixes'),
                require('postcss-flexibility'),
                require('postcss-font-awesome'),
                require('autoprefixer'),
                require('postcss-triangle'),
                require('postcss-responsive-type')
            ]))
            .pipe(remember('stylus'))
            .pipe(concat('blocks.css'))
            .pipe(postcss([
                //require('postcss-normalize')
                require('postcss-css-reset')
            ]))
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest('./public/css/')) // записываем css
            .pipe(browserSync.stream());

});
