var assert = require('assert');

var executionScheme = require('../lib/scheme').executionScheme;

var testSheetObject = require('./doublers/basicSheetObject');

describe('Test coverage for executionScheme', function() {
  describe('Test coverage for create function', function() {
    it('should have a create', function (done) {
      assert.equal(typeof executionScheme.create, 'function');

      done();
    });

    it('should accept two parameters', function(done) {
      assert.equal(executionScheme.create.length, 2);

      done();
    });

    it('should return an execution scheme', function(done) {
      // console.log(executionScheme.create(testSheetObject.transformedScheme, testSheetObject.refScheme));
      assert.deepEqual(executionScheme.create(testSheetObject.transformedScheme, testSheetObject.orderScheme), testSheetObject.execOrder);

      done();
    });
  });
});
