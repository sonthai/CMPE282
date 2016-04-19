'use strict';

module.exports = function(app) {
	// Routing logic   
	var samples = require('../../app/controllers/sample.server.controller');
	app.route('/sample-test').get(samples.test);
};
