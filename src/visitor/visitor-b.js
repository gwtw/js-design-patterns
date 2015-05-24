/*!
 * js-design-patterns
 * http://github.com/Tyriar/js-design-patterns
 *
 * Copyright 2015 Daniel Imms
 * Released under the MIT license
 * http://github.com/Tyriar/js-design-patterns/blob/master/LICENSE
 */
'use strict';

var VisitorB = function () { };

VisitorB.prototype.visit = function (element) {
  element.lastVisitedBy = 'VisitorB';
};

module.exports = VisitorB;
