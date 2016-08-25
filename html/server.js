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



var server = new hapi.Server();

server.connection({
    host: 'localhost',
    port: 9001
})

server.register([vision, inert], function(err) {
    if (err) {
        throw err;
    }
    server.views({
        engines: {
            jade: require('jade')
        },
        path: __dirname + '/assets/template',
        compileOptions: {
            pretty: true
        }
    });
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
                path: "./public",
                listing: false,
                index: false
            }
        }
    })
    server.start(function() {
        console.log('Server started at: ' + server.info.uri);
    });
});

// create your routes, currently it's just one
// var routes = [{
//     method: 'GET',
//     path: '/favicon.ico',
//     handler: {
//         file: './favicon.ico'
//     }}]
//
// }, {
//     method: 'GET',
//     path: '/',
//     handler: function(request, reply) {
//         // Render the view with the custom greeting
//         var data = {
//             title: 'This is Index!',
//             message: 'Hello, World. You crazy handlebars layout'
//         };
//
//         return reply.view('index', data);
//     }
// }, {
//     method: 'GET',
//     path: '/{filename}',
//     handler: function(request, reply) {
//         // Render the view with the custom greeting
//         var data = {
//             title: 'This is Index!',
//             message: 'Hello, World. You crazy handlebars layout'
//         };
//
//         return reply.view(request.params.filename, data);
//     }
// }, {
//     path: "/{path*}",
//     method: "GET",
//     handler: {
//         directory: {
//             path: "./public",
//             listing: false,
//             index: false
//         }
//     }
// }];

// tell your server about the defined routes
// server.route(routes);

// Start the server
// server.register([
//
//     {
//         register: require("hapi-cache-buster")
//     }
// ], function() {
//     //Start the server
//     server.start(function() {
//         //Log to the console the host and port info
//         console.log('Server started at: ' + server.info.uri);
//     });
//
//
// })
