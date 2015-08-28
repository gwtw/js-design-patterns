/**
 * @module src/visitor/visitor-b
 * @license MIT Copyright 2015 Daniel Imms (http://www.growingwiththeweb.com)
 */
'use strict';

var VisitorB = function () { };

VisitorB.prototype.visit = function (element) {
  element.lastVisitedBy = 'VisitorB';
};

module.exports = VisitorB;
