/*!
 * js-design-patterns
 * http://github.com/Tyriar/js-design-patterns
 *
 * Copyright 2015 Daniel Imms
 * Released under the MIT license
 * http://github.com/Tyriar/js-design-patterns/blob/master/LICENSE
 */
'use strict';

var ClassA = require('./class-a.js');
var ClassB = require('./class-b.js');

var Facade = function () {
  this.classA = new ClassA();
  this.classB = new ClassB();
};

Facade.prototype.operation = function () {
  this.classA.operation();
  this.classB.operation();
};

module.exports = Facade;
