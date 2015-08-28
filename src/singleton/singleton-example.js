/**
 * @module src/singleton/singleton-example
 * @license MIT Copyright 2015 Daniel Imms (http://www.growingwiththeweb.com)
 */
'use strict';

var SingletonExample = function () {
  if (SingletonExample.prototype.instance) {
    return SingletonExample.prototype.instance;
  }
  SingletonExample.prototype.instance = this;
};

module.exports = SingletonExample;
