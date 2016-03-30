var assert = require('chai').assert;

var mocha = require('mocha');
var sinon = require('sinon');

var order = require('../lib/scheme').order;

var testSheetObject = require('./doublers/basicSheetObject');

describe('Test coverage for order librarary', function() {
  it('should export an object', function(done) {
    assert.equal(typeof order, 'object');

    done();
  });

  describe('Test coverage for makeOrder function', function() {
    it('should have a  function', function(done) {
      assert.equal(typeof order.makeOrder, 'function');

      done();
    });

    it('should accept two parameters', function(done) {
      assert.equal(order.makeOrder.length, 2);

      done();
    });

    it('should return an array', function(done) {
      var rS = order.makeOrder(testSheetObject.Sheets.Sheet1, testSheetObject.transformedScheme);

      assert.equal(Array.isArray(rS), true);

      done();
    });

    it('should build proper reference scheme for provided sheet', function(done) {
      assert.deepEqual(order.makeOrder(testSheetObject.Sheets.Sheet1, testSheetObject.transformedScheme), testSheetObject.orderScheme);

      done();
    });
  });

  describe('Test coverage for mergeChains', function() {
    it('should export mergeChains function', function(done) {
      assert.equal(typeof order.mergeChains, 'function');

      done();
    });

    it('should accept one parameter', function(done) {
      assert.equal(order.mergeChains.length, 1);

      done();
    });

    it('should return merged array from binary nested array', function(done) {
      assert.deepEqual(order.mergeChains([[1, 2],[2, 3],[1, 4], [5, 6]]), [[1, 2, 3, 4], [5, 6]]);

      done();
    });
  });
});
