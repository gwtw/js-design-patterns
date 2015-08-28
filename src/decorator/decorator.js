/**
 * @module src/decorator/decorator
 * @license MIT Copyright 2015 Daniel Imms (http://www.growingwiththeweb.com)
 */
'use strict';

var Decorator = function (component) {
  this.component = component;
};

Decorator.prototype.operation = function () {
  return this.component.name + ' Decorator.operation';
};

module.exports = Decorator;
