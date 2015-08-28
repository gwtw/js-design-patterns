/**
 * @module src/factory-method/factory
 * @license MIT Copyright 2015 Daniel Imms (http://www.growingwiththeweb.com)
 */
'use strict';

var Product = require('./product.js');

var Factory = function () { };

Factory.prototype.makeProduct = function () {
  return new Product();
};

module.exports = Factory;
