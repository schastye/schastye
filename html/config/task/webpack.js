var gulp = require('gulp');
var webpack = require('webpack-stream');
var named = require('vinyl-named');
var path = require('path')
var ProvidePlugin = require('webpack-stream').webpack.ProvidePlugin
var NoErrorsPlugin = require('webpack-stream').webpack.NoErrorsPlugin
var BrowserSyncPlugin = require('browser-sync-webpack-plugin')
var BowerWebpackPlugin = require("bower-webpack-plugin")

gulp.task('webpack', function() {
    var options = {
        watch: true,
        output: {
            path: __dirname + '/public/js',
            filename: '[name].js'
        },

        devtool: 'source-map',
        module: {
            loaders: [{
              test: /\.js?$/,
              exclude: /(node_modules|bower_components)/,
              loader: 'babel',
              query: {
                // cacheDirectory: true,
                // optional: ['runtime'],
                // stage: 0
                presets: ['es2015']
              }
            }]
        },
        plugins: [
            new ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "window.jQuery": "jquery"

            }),
            new NoErrorsPlugin(),
            new BowerWebpackPlugin({
    			modulesDirectories: ['bower_components'],
    			manifestFiles: ['bower.json', '.bower.json'],
    			includes: /.*/,
    			excludes: /.*\.less$/
    		})
        ]
    };

    return gulp.src(['./assets/app/*.js'])
        .pipe(named())
        .pipe(webpack(options))
        .pipe(gulp.dest('./public/js/'));
});
