var assert = require('assert');

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

  describe('Test coverage for transform', function() {
    it('should export transform function', function(done) {
      assert.equal(typeof order.transform, 'function');

      done();
    });

    it('should accept one parameter', function(done) {
      assert.equal(order.transform.length, 1);

      done();
    });

    it('should return merged array from binary nested array', function(done) {
      assert.deepEqual(order.transform([[1, [2, 4]],[2, 3],[5, 6]]), [[1, [[2, 3], 4]], [5, 6]]);

      done();
    });
  });

  describe('Test coverage for isIn function', function() {
    it('should have isIn function', function(done) {
      assert.equal(typeof order.isIn, 'function');

      done();
    });

    it('should accept two parameters', function(done) {
      assert.equal(order.isIn.length, 2);

      done();
    });

    it('should return true if element is inside array (includeing nested arrays, and false if not)', function(done) {
      var arr = [1, [2, [3, 4]]];

      assert.equal(order.isIn(3, arr), true);
      assert.equal(order.isIn(5, arr), false);

      done();
    });
  });
});
