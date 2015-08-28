/**
 * @module src/facade/class-a
 * @license MIT Copyright 2015 Daniel Imms (http://www.growingwiththeweb.com)
 */
'use strict';

var ClassA = function () { };

ClassA.prototype.operation = function () {
  console.log('ClassA');
};

module.exports = ClassA;
