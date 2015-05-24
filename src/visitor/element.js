/*!
 * js-design-patterns
 * http://github.com/Tyriar/js-design-patterns
 *
 * Copyright 2015 Daniel Imms
 * Released under the MIT license
 * http://github.com/Tyriar/js-design-patterns/blob/master/LICENSE
 */
'use strict';

var Element = function () {
  this.lastVisitedBy = undefined;
};

Element.prototype.accept = function (visitor) {
  visitor.visit(this);
};

module.exports = Element;
