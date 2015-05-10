/*!
 * js-design-patterns
 * http://github.com/Tyriar/js-design-patterns
 *
 * Copyright 2015 Daniel Imms
 * Released under the MIT license
 * http://github.com/Tyriar/js-design-patterns/blob/master/LICENSE
 */
'use strict';

var SingletonExample = function () {
  if (SingletonExample.prototype.instance) {
    return SingletonExample.prototype.instance;
  }
  SingletonExample.prototype.instance = this;
};

module.exports = SingletonExample;
