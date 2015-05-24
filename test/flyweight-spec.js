var FlyweightFactory = require('../src/flyweight/flyweight-factory.js');

describe('Flyweight', function () {
  'use strict';

  describe('FlyweightFactory', function () {
    it('should cache a single flyweight object', function () {
      var flyweightFactory = new FlyweightFactory();
      var flyweight = flyweightFactory.get(1);
      expect(flyweight.intrinisicState).toBe(1);
      var flyweightSecondGet = flyweightFactory.get(1);
      expect(flyweight).toBe(flyweightSecondGet);
    });

    it('should cache multiple flyweight object', function () {
      var flyweightFactory = new FlyweightFactory();
      expect(flyweightFactory.get(1)).toBe(flyweightFactory.get(1));
      expect(flyweightFactory.get(2)).toBe(flyweightFactory.get(2));
      expect(flyweightFactory.get(3)).toBe(flyweightFactory.get(3));
    });

    it('Flyweight.operation should return correct value', function () {
      var flyweightFactory = new FlyweightFactory();
      var flyweight = flyweightFactory.get(20);
      expect(flyweight.operation(5)).toBe(100);
    });
  });
});
