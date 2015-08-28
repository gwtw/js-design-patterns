/**
 * @module src/facade/class-b
 * @license MIT Copyright 2015 Daniel Imms (http://www.growingwiththeweb.com)
 */
'use strict';

var ClassB = function () { };

ClassB.prototype.operation = function () {
  console.log('ClassB');
};

module.exports = ClassB;
