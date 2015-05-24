var Factory = require('../src/factory-method/factory.js');
var Product = require('../src/factory-method/product.js');

describe('Factory method', function () {
  'use strict';

  describe('Factory', function () {
    it('should return the correct product type', function () {
      var factory = new Factory();
      var product = factory.makeProduct();
      expect(product instanceof Product).toBe(true);
    });
  });
});
