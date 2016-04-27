var SingletonExample = require('../src/singleton/singleton-example.js');

describe('Singleton', function () {
  'use strict';

  describe('multiple new calls to SingletonExample', function () {
    it('should equal each other', function () {
      var a = new SingletonExample();
      var b = new SingletonExample();
      expect(a).toBe(b);
    });
  });

  describe('multiple function calls to SingletonExample', function () {
    it('should equal each other', function () {
      var a = SingletonExample();
      var b = SingletonExample();
      expect(a).toBe(b);
    });
  });

  describe('function and new calls to SingletonExample', function () {
    it('should equal each other', function () {
      var a = new SingletonExample();
      var b = SingletonExample();
      expect(a).toBe(b);
    });
  });
});
