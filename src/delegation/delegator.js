/**
 * @module src/delegation/delegator
 * @license MIT Copyright 2015 Daniel Imms (http://www.growingwiththeweb.com)
 */
'use strict';

var DelegateA = require('./delegate-a.js');
var DelegateB = require('./delegate-b.js');

var Delegator = function () {
  this.delegate = undefined;
};

Delegator.prototype.f = function () {
  if (this.delegate) {
    return this.delegate();
  }
};

Delegator.prototype.toA = function () {
  this.delegate = DelegateA;
};

Delegator.prototype.toB = function () {
  this.delegate = DelegateB;
};

module.exports = Delegator;
