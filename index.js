'use strict';
require('dotenv').config();

var GeocoderFactory = require('./lib/geocoderfactory.js');

var Exports = GeocoderFactory.getGeocoder.bind(GeocoderFactory);

module.exports =  Exports;
