    var hapi = require('hapi')
    var server = new hapi.Server()

    var vision = require('vision')
    var inert = require('inert')

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
            path: __dirname + '../../../assets/template',
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
                    path: __dirname + "../../../public",
                    listing: true,
                    index: true
                }
            }
        })
        server.start(function(err) {
            console.log('Server started at: ' + server.info.uri);
        });
    });
