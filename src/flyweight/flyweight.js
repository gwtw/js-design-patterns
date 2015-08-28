/**
 * @module src/flyweight/flyweight
 * @license MIT Copyright 2015 Daniel Imms (http://www.growingwiththeweb.com)
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
