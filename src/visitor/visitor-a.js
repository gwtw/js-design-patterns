/*!
 * js-design-patterns
 * http://github.com/Tyriar/js-design-patterns
 *
 * Copyright 2015 Daniel Imms
 * Released under the MIT license
 * http://github.com/Tyriar/js-design-patterns/blob/master/LICENSE
 */
'use strict';

var VisitorA = function () { };

VisitorA.prototype.visit = function (element) {
  element.lastVisitedBy = 'VisitorA';
};

module.exports = VisitorA;
