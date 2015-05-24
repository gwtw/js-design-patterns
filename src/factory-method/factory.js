/*!
 * js-design-patterns
 * http://github.com/Tyriar/js-design-patterns
 *
 * Copyright 2015 Daniel Imms
 * Released under the MIT license
 * http://github.com/Tyriar/js-design-patterns/blob/master/LICENSE
 */
'use strict';

var Product = require('./product.js');

var Factory = function () { };

Factory.prototype.makeProduct = function () {
  return new Product();
};

module.exports = Factory;
