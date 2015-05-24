/*!
 * js-design-patterns
 * http://github.com/Tyriar/js-design-patterns
 *
 * Copyright 2015 Daniel Imms
 * Released under the MIT license
 * http://github.com/Tyriar/js-design-patterns/blob/master/LICENSE
 */
'use strict';

var Flyweight = function (intrinisicState) {
  this.intrinisicState = intrinisicState;
};

Flyweight.prototype.operation = function (extrinsicState) {
  // Perform some action using intrinsic and extrinsic state
  return this.intrinisicState * extrinsicState;
};

module.exports = Flyweight;
