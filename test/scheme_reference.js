var assert = require('chai').assert;

var mocha = require('mocha');
var sinon = require('sinon');

var schemeReference = require('../lib/scheme').makeReference;

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

    it('should accept one parameter', function(done) {
      assert.equal(schemeReference.makeReferenceScheme.length, 1);

      done();
    });

    it('should return object with following keys: \'cells\', \'icells\', \'ocells\', \'iocells\'', function(done) {
      assert.deepEqual(Object.keys(schemeReference.makeReferenceScheme()), ['cells', 'icells', 'ocells', 'iocells']);

      done();
    });

    it('should have an array as a value of each propertie', function(done) {
      var rS = schemeReference.makeReferenceScheme();

      assert.equal(Array.isArray(rS.cells), true);
      assert.equal(Array.isArray(rS.icells), true);
      assert.equal(Array.isArray(rS.ocells), true);
      assert.equal(Array.isArray(rS.iocells), true);

      done();
    });

    it('should build proper reference scheme for provided sheet', function(done) {
      assert.deepEqual(schemeReference.makeReferenceScheme(testSheetObject.Sheets.Sheet1), testSheetObject.refScheme);

      done();
    });
  });
});
