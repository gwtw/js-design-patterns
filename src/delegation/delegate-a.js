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
      return (root.DelegateA = factory());
    });
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.DelegateA = factory();
  }
}(this, function () {
  'use strict';

  var DelegateA = function () {
    return 'a';
  };

  return DelegateA;
}));
