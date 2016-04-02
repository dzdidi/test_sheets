var assert = require('assert');

var mocha = require('mocha');
var sinon = require('sinon');

var scheme = require('../lib/scheme');

var descriptionSpy = sinon.spy(scheme.scheme, 'getDescription');
var moduleUnderTestSpy = sinon.spy(scheme.scheme, 'getModuleUnderTest');
var objectsUnderTestSpy = sinon.spy(scheme.scheme, 'getObjectsUnderTest');
var methodsUnderTestSpy = sinon.spy(scheme.scheme, 'getMethodsUnderTest');
var inputsSpy = sinon.spy(scheme.scheme, 'getInputs');
var outputsSpy = sinon.spy(scheme.scheme, 'getOutputs');

var testSheetObject = require('./doublers/basicSheetObject');

describe('Creation of Test Sheet scheme', function() {

  describe('Test coverage for getDescription function', function() {
    it('should have getDescription function', function(done) {
      assert.equal(typeof (scheme.scheme.getDescription), 'function');
      done();
    });

    it('should accept one parameter', function(done) {
      assert.equal(scheme.scheme.getDescription.length, 1);

      assert.throws(function() {
        scheme.scheme.getDescription();
      }, 'sheet has to be provided');

      done();
    });

    it('should return description feild from sheet', function(done) {
      assert.equal(scheme.scheme.getDescription(testSheetObject.Sheets.Sheet1), testSheetObject.basicScheme.description);

      done();
    });
  });

  describe('Test coverage for getModuleUnderTest function', function() {
    it('should have getModuleUnderTest function', function(done) {
      assert.equal(typeof (scheme.scheme.getModuleUnderTest), 'function');

      done();
    });

    it('should accept one parameter', function(done) {
      assert.equal(scheme.scheme.getModuleUnderTest.length, 1);

      assert.throws(function() {
        scheme.scheme.getModuleUnderTest();
      }, 'sheet has to be provided');

      done();
    });

    it('should return moduleUnderTest feild from sheet', function(done) {
      assert.equal(scheme.scheme.getModuleUnderTest(testSheetObject.Sheets.Sheet1), testSheetObject.basicScheme.moduleUnderTest);

      done();
    });
  });

  describe('Test coverage for getObjectsUnderTest function', function() {
    it('should have getObjectsUnderTest function', function(done) {
      assert.equal(typeof (scheme.scheme.getObjectsUnderTest), 'function');

      done();
    });

    it('should accept one parameter', function(done) {
      assert.equal(scheme.scheme.getObjectsUnderTest.length, 1);

      assert.throws(function() {
        scheme.scheme.getObjectsUnderTest();
      }, 'sheet has to be provided');

      done();
    });

    it('should return objects under test feilds from sheet', function(done) {
      assert.deepEqual(scheme.scheme.getObjectsUnderTest(testSheetObject.Sheets.Sheet1), testSheetObject.basicScheme.objectsUnderTest);

      done();
    });
  });

  describe('Test coverage for getMethodsUnderTest function', function() {
    it('should have getMethodsUnderTest function', function(done) {
      assert.equal(typeof (scheme.scheme.getMethodsUnderTest), 'function');

      done();
    });

    it('should accept one parameter', function(done) {
      assert.equal(scheme.scheme.getMethodsUnderTest.length, 1);

      assert.throws(function() {
        scheme.scheme.getMethodsUnderTest();
      }, 'sheet has to be provided');

      done();
    });

    it('should return methods under test feilds from sheet', function(done) {
      assert.deepEqual(scheme.scheme.getMethodsUnderTest(testSheetObject.Sheets.Sheet1), testSheetObject.basicScheme.methodsUnderTest);

      done();
    });
  });

  describe('Test coverage for getInputs function', function() {
    it('should have getInputs function', function(done) {
      assert.equal(typeof (scheme.scheme.getInputs), 'function');

      done();
    });

    it('should accept one parameter', function(done) {
      assert.equal(scheme.scheme.getInputs.length, 1);

      assert.throws(function() {
        scheme.scheme.getInputs();
      }, 'sheet has to be provided');

      done();
    });

    it('should return inputs feilds from sheet', function(done) {
      assert.deepEqual(scheme.scheme.getInputs(testSheetObject.Sheets.Sheet1), testSheetObject.basicScheme.inputs);

      done();
    });
  });

  describe('Test coverage for getOutputs function', function() {
    it('should have getOutputs function', function(done) {
      assert.equal(typeof (scheme.scheme.getOutputs), 'function');

      done();
    });

    it('should accept one parameter', function(done) {
      assert.equal(scheme.scheme.getOutputs.length, 1);

      assert.throws(function() {
        scheme.scheme.getOutputs();
      }, 'sheet has to be provided');

      done();
    });

    it('should return output feilds from sheet', function(done) {
      assert.deepEqual(scheme.scheme.getOutputs(testSheetObject.Sheets.Sheet1), testSheetObject.basicScheme.outputs);

      done();
    });
  });

  describe('Test coverage for getInvocationCells function', function() {
    it('should have getInvocationCells function', function() {
      assert.equal(typeof (scheme.scheme.getInvocationCells), 'function');
    });

    it('should accept one parameter', function(done) {
      assert.equal(scheme.scheme.getInvocationCells.length, 1);

      assert.throws(function() {
        scheme.scheme.getInvocationCells();
      }, 'sheet has to be provided');

      done();
    });

    it('should return keys of input where field \'v\' is equal to \'|\' or \'||\'', function(done) {
      var aInvocationCells = scheme.scheme.getInvocationCells(testSheetObject.Sheets.Sheet1);
      var eInvocationCells = testSheetObject.basicScheme.invocations;

      assert.deepEqual(aInvocationCells, eInvocationCells);

      done();
    });
  });
  describe('Test coverage for transformScheme function', function() {
    it('should have transformScheme function', function(done) {
      assert.equal(typeof scheme.scheme.transformScheme, 'function');

      done();
    });

    it('should accept one parameter', function(done) {
      assert.equal(scheme.scheme.transformScheme.length, 1);

      done();
    });

    it('should transform provided scheme to specific form', function(done) {
      assert.deepEqual(scheme.scheme.transformScheme(testSheetObject.basicScheme), testSheetObject.transformedScheme);

      done();
    });
  });

  describe('Test coverage for getRowFromField function', function() {
    it('should have getRowFromField function', function(done) {
      assert.equal(typeof scheme.scheme.getRowFromField, 'function');

      done();
    });

    it('should accept two parameters', function(done) {
      assert.equal(scheme.scheme.getRowFromField.length, 2);

      done();
    });

    it('should return all cells from same row in a specific feild', function(done) {
      assert.deepEqual(scheme.scheme.getRowFromField(testSheetObject.basicScheme.inputs, 5), testSheetObject.transformedScheme[5].inputs);
      done();
    });
  });
});
