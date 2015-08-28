/**
 * @module src/visitor/visitor-a
 * @license MIT Copyright 2015 Daniel Imms (http://www.growingwiththeweb.com)
 */
'use strict';

var VisitorA = function () { };

VisitorA.prototype.visit = function (element) {
  element.lastVisitedBy = 'VisitorA';
};

module.exports = VisitorA;
