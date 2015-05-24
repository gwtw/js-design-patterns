/*!
 * js-design-patterns
 * http://github.com/Tyriar/js-design-patterns
 *
 * Copyright 2015 Daniel Imms
 * Released under the MIT license
 * http://github.com/Tyriar/js-design-patterns/blob/master/LICENSE
 */
'use strict';

var Flyweight = require('./flyweight.js');

var FlyweightFactory = function () {
  this.flyweights = {};
};

FlyweightFactory.prototype.get = function (key) {
  if (!(key in this.flyweights)) {
    this.flyweights[key] = new Flyweight(key);
  }
  return this.flyweights[key];
};

module.exports = FlyweightFactory;
