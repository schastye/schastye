"use strict";
var gulp = require("gulp"),
    postcss = require("gulp-postcss"),
    gulp = require("gulp"),
    csso = require("gulp-csso"),
    replace = require('gulp-replace'),
    prefix = require("postcss-prefix-selector"),
    empty = require('postcss-discard-empty'),
    rename = require("gulp-rename"),
    filterDeclarations = require("postcss-filter-declarations");
// Собираем Stylus

gulp.task("theme", function() {
    var processors = [
        filterDeclarations({
            props: [
                "background-color",
                "color",
                "fill",
                "border",
                "border-bottom",
                "border-top",
                "border-left",
                "border-right"
            ]
        }),
        empty(),
        prefix({
            prefix: '.red ' // <--- notice the traililng space!
        })
    ];
    return gulp.src("./public/css/blocks.css")
        .pipe(postcss(processors))
        .pipe(rename('blocks-red.css'))
        .pipe(replace(/248dff/g, 'ff4569'))
        .pipe(replace(/017afd/g, 'ff4569'))
        .pipe(replace(/rgba\((36),(\d+),(\d+),([0-9]+\.[0-9]+|\d)\)/g, 'rgba(255,69,105,.03)'))
        .pipe(gulp.dest("./public/css/"));
});
