var Singleton = require('../src/singleton.js');

describe('Singleton', function () {
  'use strict';
  
  describe('multiple new calls to Singleton', function () {
    it('should equal each other', function () {
      var a = new Singleton();
      var b = new Singleton();
      expect(a).toBe(b);
    });
  });

  describe('multiple function calls to Singleton', function () {
    it('should equal each other', function () {
      var a = Singleton();
      var b = Singleton();
      expect(a).toBe(b);
    });
  });

  describe('function and new calls to Singleton', function () {
    it('should equal each other', function () {
      var a = new Singleton();
      var b = Singleton();
      expect(a).toBe(b);
    });
  });
});
