var Hapi = require('hapi');
var handlebar = require('handlebars');
var vision = require('vision');
var inert = require('inert');
var Server = new Hapi.Server();
Server.connection({
    port: 8080,
    host: 'localhost'
})
Server.register([
    { register: vision },
    { register: inert },
    { register: require('./custom-routes') }
])
Server.views({
    engines: {
        hbs: handlebar
    },
    path: __dirname + '/views'

});
Server.start(function() {
    console.log('server running at : ' + Server.info.uri);
})