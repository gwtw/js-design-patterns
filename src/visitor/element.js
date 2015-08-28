/**
 * @module src/visitor/element
 * @license MIT Copyright 2015 Daniel Imms (http://www.growingwiththeweb.com)
 */
'use strict';

var Element = function () {
  this.lastVisitedBy = undefined;
};

Element.prototype.accept = function (visitor) {
  visitor.visit(this);
};

module.exports = Element;
