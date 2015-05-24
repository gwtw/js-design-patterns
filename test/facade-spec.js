var Facade = require('../src/facade/facade.js');

describe('Facade', function () {
  'use strict';

  describe('Facade.operation', function () {
    var oldConsoleLog;
    var output = [];

    beforeEach(function () {
      oldConsoleLog = console.log;
      console.log = function (text) {
        output.push(text);
      };
    });

    afterEach(function () {
      console.log = oldConsoleLog;
    });

    it('should call ClassA.operation and ClassB.operation', function () {
      var facade = new Facade();
      facade.operation();
      expect(output.length).toBe(2);
      expect(output[0]).toBe("ClassA");
      expect(output[1]).toBe("ClassB");
    });
  });
});
