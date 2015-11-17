var Hapi = require('hapi');

var dummy = require('hapi-dummy-api');

var server = new Hapi.Server();

server.connection({
	port: 8001,
	routes: {
		cors: {
			additionalHeaders: ['Access-Control-Allow-Origin']
		}
	}
});

server.register(
	[{
		register: dummy,
		options: require('./api/options/superheroes')
	}],
	function(err){
		if(err) throw err;

		server.start(function(err){
			if(err) throw err;
			console.log('Server running on ' + server.info.uri)
		})
	}
);