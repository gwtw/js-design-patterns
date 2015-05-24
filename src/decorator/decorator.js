/*!
 * js-design-patterns
 * http://github.com/Tyriar/js-design-patterns
 *
 * Copyright 2015 Daniel Imms
 * Released under the MIT license
 * http://github.com/Tyriar/js-design-patterns/blob/master/LICENSE
 */
'use strict';

var Decorator = function (component) {
  this.component = component;
};

Decorator.prototype.operation = function () {
  return this.component.name + ' Decorator.operation';
};

module.exports = Decorator;
