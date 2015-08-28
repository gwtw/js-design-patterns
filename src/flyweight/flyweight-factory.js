/**
 * @module src/flyweight/flyweight-factory
 * @license MIT Copyright 2015 Daniel Imms (http://www.growingwiththeweb.com)
 */
'use strict';

var Flyweight = require('./flyweight.js');

var FlyweightFactory = function () {
  this.flyweights = {};
};

FlyweightFactory.prototype.get = function (key) {
  if (!(key in this.flyweights)) {
    this.flyweights[key] = new Flyweight(key);
  }
  return this.flyweights[key];
};

module.exports = FlyweightFactory;
