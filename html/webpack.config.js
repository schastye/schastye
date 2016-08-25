var path = require('path')
var webpack = require("webpack")

var BrowserSyncPlugin = require('browser-sync-webpack-plugin')
var BowerWebpackPlugin = require("bower-webpack-plugin")

    module.exports = {
        watch: true,
        entry: {
            // preload: './assets/app/preload.js',
            app: './assets/app/app.js'
            //app: './assets/app/button.js'
        },
        output: {
            path: __dirname + '/public/js',
            filename: '[name].js'
        },
        resolve: {
            root: [path.join(__dirname, "bower_components")]
        },
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
        devtool: 'source-map',

        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "window.jQuery": "jquery"

            }),
            new BowerWebpackPlugin({
    			modulesDirectories: ['bower_components'],
    			manifestFiles: ['bower.json', '.bower.json'],
    			includes: /.*/,
    			excludes: /.*\.css$/
    		})
        ]

}
