// Инициализируем плагины
// var gulp = require('gulp'), // Сообственно Gulp JS
//     jade = require('gulp-jade'), // Плагин для Jade
//     stylus = require('gulp-stylus'), // Плагин для Stylus
//     csso = require('gulp-csso'), // Минификация CSS
//     imagemin = require('gulp-imagemin'), // Минификация изображений
//     uglify = require('gulp-uglify'), // Минификация JS
//     concat = require('gulp-concat'), // Склейка файлов
//     newer = require('gulp-newer'),
//     browserSync = require('browser-sync'),
//     pixrem = require('gulp-pixrem'),
//     rename = require("gulp-rename"),
//     express = require("express"),
//     compression = require('compression'),
//     cache = require('gulp-cached'),
//     cssBase64 = require('gulp-css-base64'),
//     prefix = require('gulp-autoprefixer')

var gulp = require('gulp')
require('gulp-graph')(gulp)

require('require-dir')('./config/task', {
  recurse: true
})
