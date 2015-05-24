var Element = require('../src/visitor/element.js');
var VisitorA = require('../src/visitor/visitor-a.js');
var VisitorB = require('../src/visitor/visitor-b.js');

describe('Visitor', function () {
  'use strict';

  describe('Element.lastVisitedBy', function () {
    it('should not be initialised initially', function () {
      var element = new Element();
      expect(typeof element.lastVisitedBy).toBe('undefined');
    });
  });

  describe('Visiting VisitorA', function () {
    it('should set lastVisitedBy', function () {
      var element = new Element();
      element.accept(new VisitorA());
      expect(element.lastVisitedBy).toBe('VisitorA');
    });
  });

  describe('Visiting VisitorB', function () {
    it('should set lastVisitedBy', function () {
      var element = new Element();
      element.accept(new VisitorB());
      expect(element.lastVisitedBy).toBe('VisitorB');
    });
  });

  describe('Visiting both visitors', function () {
    it('should set lastVisitedBy to the last called', function () {
      var element = new Element();
      element.accept(new VisitorA());
      element.accept(new VisitorB());
      expect(element.lastVisitedBy).toBe('VisitorB');
    });
  });
});
