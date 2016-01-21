var assert = require('chai').assert;

var mocha = require('mocha');
var sinon = require('sinon');

var schemeTransformer = require('../lib/scheme_transformer');

var testSheetObject = require('./doublers/basicSheetObject');

describe('Test coverage for scheme_transformer library', function() {
  it('should export an object', function(done) {
    assert.equal(typeof schemeTransformer, 'object');

    done();
  });

  describe('test coverage for transformScheme', function() {
    it('should have transformScheme function', function(done) {
      assert.equal(typeof schemeTransformer.transformScheme, 'function');

      done();
    });

    it('should accept one parameter', function(done) {
      assert.equal(schemeTransformer.transformScheme.length, 1);

      done();
    });

    it('should transform provided scheme to specific form', function(done) {
      assert.deepEqual(schemeTransformer.transformScheme(testSheetObject.basicScheme), testSheetObject.transformedScheme);

      done();
    });
  });

  describe('test coverage for getRowFromField', function() {
    it('should have getRowFromField function', function(done) {
      assert.equal(typeof schemeTransformer.getRowFromField, 'function');

      done();
    });

    it('should accept two parameters', function(done) {
      assert.equal(schemeTransformer.getRowFromField.length, 2);

      done();
    });

    it('should return all cells from same row in a specific feild', function(done) {
      assert.deepEqual(schemeTransformer.getRowFromField(testSheetObject.basicScheme.inputs, 5), testSheetObject.transformedScheme[5].inputs);
      done();
    });
  });

});
