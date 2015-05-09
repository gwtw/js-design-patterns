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
      return (root.Singleton = factory());
    });
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.Singleton = factory();
  }
}(this, function () {
  'use strict';

  var Singleton = function () {
    if (Singleton.prototype._instance) {
      return Singleton.prototype._instance;
    }
    Singleton.prototype._instance = this;
  };

  return Singleton;
}));


