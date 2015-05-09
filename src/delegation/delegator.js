/*!
 * js-design-patterns
 * http://github.com/Tyriar/js-design-patterns
 *
 * Copyright 2015 Daniel Imms
 * Released under the MIT license
 * http://github.com/Tyriar/js-design-patterns/blob/master/LICENSE
 */
(function (root, factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    define([], function () {
      return (root.Delegator = factory());
    });
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.Delegator = factory();
  }
}(this, function () {
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

  return Delegator;
}));
