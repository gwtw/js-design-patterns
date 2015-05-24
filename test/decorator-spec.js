var Component = require('../src/decorator/component.js');
var Decorator = require('../src/decorator/decorator.js');

describe('Decorator', function () {
  'use strict';

  describe('Component.operation', function () {
    it('should return the correct string', function () {
      var component = new Component('test');
      expect(component.operation()).toBe("test Component.operation");
    });
  });

  describe('Decorator.operation', function () {
    it('should return the correct string', function () {
      var component = new Component('test');
      var decorator = new Decorator(component);
      expect(decorator.operation()).toBe("test Decorator.operation");
    });
  });
});
