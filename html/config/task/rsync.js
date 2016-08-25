// gulpfile.js
//var rsync = require('rsyncwrapper')
var gulp = require('gulp')
var gutil = require('gulp-util')
var rsync = require('gulp-rsync')

// gulp.task('sync', ['stylus_comp'], function () {
//   rsync({
//     ssh: true,
//     src: '../../',
//     dest: 'bitrix@88.85.89.36:/home/bitrix/ext_www/exdeniz.s21.saydanke.ru',
//     recursive: true,
//     //args: ['--verbose'],
//     exclude: [
//       '.sync-config.cson',
//       '.git',
//       'node_modules',
//       'tmp',
//       'vendor',
//       'design'
//     ]
//   }, function (error, stdout, stderr, cmd) {
//     gutil.log(stdout)
//   })
// })

gulp.task('sync', ['stylus_comp'], function () {
   return gulp.src('../../local/templates/main/**/*.css')
      .pipe(rsync({
        root: '../../',
        username: 'bitrix',
        destination: '/home/bitrix/ext_www/exdeniz.s21.saydanke.ru',
        hostname: '88.85.89.36',
        recursive: true,
        verbose: true,
        progress: true,
        incremental: true,
        archive: true,
        compress: true,
        update: true,
        exclude: [
          '.sync-config.cson',
          '.git',
          'node_modules',
          'tmp',
          'vendor',
          'design',
          'bitrix',
          'upload',
          'thumb',
          'auth'

       ]

      })
    )
})
