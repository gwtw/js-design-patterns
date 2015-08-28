/**
 * @module src/decorator/component
 * @license MIT Copyright 2015 Daniel Imms (http://www.growingwiththeweb.com)
 */
'use strict';

var Component = function (name) {
  this.name = name;
};

Component.prototype.operation = function () {
  return this.name + ' Component.operation';
};

module.exports = Component;
