/**
 * @module src/facade/facade
 * @license MIT Copyright 2015 Daniel Imms (http://www.growingwiththeweb.com)
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
