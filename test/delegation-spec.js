var Delegator = require('../src/delegation/delegator.js');

describe('Delegation', function () {
  'use strict';

  describe('f() without delegate should return undefined', function () {
    it('should equal each other', function () {
      var delegator = new Delegator();
      expect(delegator.f()).toBe(undefined);
    });
  });

  describe('toA() should return "a"', function () {
    it('should equal each other', function () {
      var delegator = new Delegator();
      delegator.toA();
      expect(delegator.f()).toBe('a');
    });
  });

  describe('toB() should return "b"', function () {
    it('should equal each other', function () {
      var delegator = new Delegator();
      delegator.toB();
      expect(delegator.f()).toBe('b');
    });
  });
});
