/*!
 * js-design-patterns
 * http://github.com/Tyriar/js-design-patterns
 *
 * Copyright 2015 Daniel Imms
 * Released under the MIT license
 * http://github.com/Tyriar/js-design-patterns/blob/master/LICENSE
 */
/*global define module*/
(function (root, factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    define([], function () {
      return (root.SingletonExample = factory());
    });
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.SingletonExample = factory();
  }
}(this, function () {
  'use strict';

  var SingletonExample = function () {
    if (SingletonExample.prototype._instance) {
      return SingletonExample.prototype._instance;
    }
    SingletonExample.prototype._instance = this;
  };

  return SingletonExample;
}));
