/*!
 * js-design-patterns
 * http://github.com/Tyriar/js-design-patterns
 *
 * Copyright 2015 Daniel Imms
 * Released under the MIT license
 * http://github.com/Tyriar/js-design-patterns/blob/master/LICENSE
 */
'use strict';

var Component = function (name) {
  this.name = name;
};

Component.prototype.operation = function () {
  return this.name + ' Component.operation';
};

module.exports = Component;
