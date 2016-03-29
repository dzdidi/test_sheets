var assert = require('chai').assert;

var mocha = require('mocha');
var sinon = require('sinon');

var schemeReference = require('../lib/scheme').reference_scheme;

var testSheetObject = require('./doublers/basicSheetObject');

describe('Test coverage for scheme_reference librarary', function() {
  it('should export an object', function(done) {
    assert.equal(typeof schemeReference, 'object');

    done();
  });

  describe('Test coverage for makeReferenceScheme function', function() {
    it('should have a makeReferenceScheme function', function(done) {
      assert.equal(typeof schemeReference.makeReferenceScheme, 'function');

      done();
    });

    it('should accept two parameters', function(done) {
      assert.equal(schemeReference.makeReferenceScheme.length, 2);

      done();
    });

    it('should return object with following keys: \'linear\', \'chain\'', function(done) {
      assert.deepEqual(Object.keys(schemeReference.makeReferenceScheme()), ['linear', 'chains']);

      done();
    });

    it('should have an array as a value of each propertie', function(done) {
      var rS = schemeReference.makeReferenceScheme();

      assert.equal(Array.isArray(rS.linear), true);
      assert.equal(Array.isArray(rS.chains), true);

      done();
    });

    it('should build proper reference scheme for provided sheet', function(done) {
      assert.deepEqual(schemeReference.makeReferenceScheme(testSheetObject.Sheets.Sheet1), testSheetObject.refScheme);

      done();
    });
  });
});
