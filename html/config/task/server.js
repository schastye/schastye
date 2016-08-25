var gulp = require('gulp'),
    express = require("express"),
    fs = require('fs'),
    favicon = require('serve-favicon'),
    compression = require('compression'),
    browserSync = require('browser-sync'),
    Jade = require('jade'),
    hapi = require('hapi'),
    vision = require('vision'),
    inert = require('inert'),
    path = require('path'),
    reload = browserSync.reload;




gulp.task('hapi', function() {
    var server = new hapi.Server();

    server.connection({
        host: 'localhost',
        port: 9001
    })

    server.register([vision, inert], function(err) {
        if (err) {
            throw err;
        }
        register: require("hapi-cache-buster")
        server.views({
            engines: {
                jade: {
                    module: require('jade'),
                    isCached: false
                }
            },
            path: __dirname + '/../../assets/template',
            compileOptions: {
                pretty: true
            }
        });
        server.route({
            method: 'GET',
            path: '/favicon.ico',
            handler: {
                file: './favicon.ico'
            }
        })
        server.route({
            method: 'GET',
            path: '/{filename}',
            handler: function(request, reply) {
                // Render the view with the custom greeting
                var data = {
                    title: 'This is Index!',
                    message: 'Hello, World. You crazy handlebars layout'
                };

                return reply.view(request.params.filename, data);
            }
        })
        server.route({
            path: "/{path*}",
            method: "GET",
            handler: {
                directory: {
                    path: __dirname + "/../../public",
                    listing: true,
                    index: true
                }
            }
        })
        server.start(function() {
            console.log('Server started at: ' + server.info.uri);
        });
    });
});




gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: "localhost:9001",
        //tunnel: true,
        // server: {
        //     baseDir: "./public"
        // },
        // browser: "google chrome",
        // startPath: "/index"
    })
});
