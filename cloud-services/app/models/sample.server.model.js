'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Sample Schema
 */
var SampleSchema = new Schema({
	// Sample model fields   
	// ...
});

mongoose.model('Sample', SampleSchema);