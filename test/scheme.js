var assert = require('assert');

var mocha = require('mocha');
var sinon = require('sinon');

var scheme = require('../lib/scheme');

var descriptionSpy = sinon.spy(scheme.schema, 'getDescription');
var moduleUnderTestSpy = sinon.spy(scheme.schema, 'getModuleUnderTest');
var objectsUnderTestSpy = sinon.spy(scheme.schema, 'getObjectsUnderTest');
var methodsUnderTestSpy = sinon.spy(scheme.schema, 'getMethodsUnderTest');
var inputsSpy = sinon.spy(scheme.schema, 'getInputs');
var outputsSpy = sinon.spy(scheme.schema, 'getOutputs');

var testSheetObject = require('./doublers/basicSheetObject');

describe('Creation of Test Sheet scheme', function() {

  describe('Test coverage for getDescription function', function() {
    it('should have getDescription function', function(done) {
      assert.equal(typeof (scheme.schema.getDescription), 'function');
      done();
    });

    it('should accept one parameter', function(done) {
      assert.equal(scheme.schema.getDescription.length, 1);

      assert.throws(function() {
        scheme.schema.getDescription();
      }, 'sheet has to be provided');

      done();
    });

    it('should return description feild from sheet', function(done) {
      assert.equal(scheme.schema.getDescription(testSheetObject.Sheets.Sheet1), testSheetObject.basicScheme.description);

      done();
    });
  });

  describe('Test coverage for getModuleUnderTest function', function() {
    it('should have getModuleUnderTest function', function(done) {
      assert.equal(typeof (scheme.schema.getModuleUnderTest), 'function');

      done();
    });

    it('should accept one parameter', function(done) {
      assert.equal(scheme.schema.getModuleUnderTest.length, 1);

      assert.throws(function() {
        scheme.schema.getModuleUnderTest();
      }, 'sheet has to be provided');

      done();
    });

    it('should return moduleUnderTest feild from sheet', function(done) {
      assert.equal(scheme.schema.getModuleUnderTest(testSheetObject.Sheets.Sheet1), testSheetObject.basicScheme.moduleUnderTest);

      done();
    });
  });

  describe('Test coverage for getObjectsUnderTest function', function() {
    it('should have getObjectsUnderTest function', function(done) {
      assert.equal(typeof (scheme.schema.getObjectsUnderTest), 'function');

      done();
    });

    it('should accept one parameter', function(done) {
      assert.equal(scheme.schema.getObjectsUnderTest.length, 1);

      assert.throws(function() {
        scheme.schema.getObjectsUnderTest();
      }, 'sheet has to be provided');

      done();
    });

    it('should return objects under test feilds from sheet', function(done) {
      assert.deepEqual(scheme.schema.getObjectsUnderTest(testSheetObject.Sheets.Sheet1), testSheetObject.basicScheme.objectsUnderTest);

      done();
    });
  });

  describe('Test coverage for getMethodsUnderTest function', function() {
    it('should have getMethodsUnderTest function', function(done) {
      assert.equal(typeof (scheme.schema.getMethodsUnderTest), 'function');

      done();
    });

    it('should accept one parameter', function(done) {
      assert.equal(scheme.schema.getMethodsUnderTest.length, 1);

      assert.throws(function() {
        scheme.schema.getMethodsUnderTest();
      }, 'sheet has to be provided');

      done();
    });

    it('should return methods under test feilds from sheet', function(done) {
      assert.deepEqual(scheme.schema.getMethodsUnderTest(testSheetObject.Sheets.Sheet1), testSheetObject.basicScheme.methodsUnderTest);

      done();
    });
  });

  describe('Test coverage for getInputs function', function() {
    it('should have getInputs function', function(done) {
      assert.equal(typeof (scheme.schema.getInputs), 'function');

      done();
    });

    it('should accept one parameter', function(done) {
      assert.equal(scheme.schema.getInputs.length, 1);

      assert.throws(function() {
        scheme.schema.getInputs();
      }, 'sheet has to be provided');

      done();
    });

    it('should return inputs feilds from sheet', function(done) {
      assert.deepEqual(scheme.schema.getInputs(testSheetObject.Sheets.Sheet1), testSheetObject.basicScheme.inputs);

      done();
    });
  });

  describe('Test coverage for getOutputs function', function() {
    it('should have getOutputs function', function(done) {
      assert.equal(typeof (scheme.schema.getOutputs), 'function');

      done();
    });

    it('should accept one parameter', function(done) {
      assert.equal(scheme.schema.getOutputs.length, 1);

      assert.throws(function() {
        scheme.schema.getOutputs();
      }, 'sheet has to be provided');

      done();
    });

    it('should return output feilds from sheet', function(done) {
      assert.deepEqual(scheme.schema.getOutputs(testSheetObject.Sheets.Sheet1), testSheetObject.basicScheme.outputs);

      done();
    });
  });

  describe('Test coverage for getInvocationCells function', function() {
    it('should have getInvocationCells function', function() {
      assert.equal(typeof (scheme.schema.getInvocationCells), 'function');
    });

    it('should accept one parameter', function(done) {
      assert.equal(scheme.schema.getInvocationCells.length, 1);

      assert.throws(function() {
        scheme.schema.getInvocationCells();
      }, 'sheet has to be provided');

      done();
    });

    it('should return keys of input where field \'v\' is equal to \'|\' or \'||\'', function(done) {
      var aInvocationCells = scheme.schema.getInvocationCells(testSheetObject.Sheets.Sheet1);
      var eInvocationCells = testSheetObject.basicScheme.invocations;

      assert.deepEqual(aInvocationCells, eInvocationCells);

      done();
    });
  });
  describe('Test coverage for transformScheme function', function() {
    it('should have transformScheme function', function(done) {
      assert.equal(typeof scheme.schema.transformScheme, 'function');

      done();
    });

    it('should accept one parameter', function(done) {
      assert.equal(scheme.schema.transformScheme.length, 1);

      done();
    });

    it('should transform provided scheme to specific form', function(done) {
      assert.deepEqual(scheme.schema.transformScheme(testSheetObject.basicScheme), testSheetObject.transformedScheme);

      done();
    });
  });

  describe('Test coverage for getRowFromField function', function() {
    it('should have getRowFromField function', function(done) {
      assert.equal(typeof scheme.schema.getRowFromField, 'function');

      done();
    });

    it('should accept two parameters', function(done) {
      assert.equal(scheme.schema.getRowFromField.length, 2);

      done();
    });

    it('should return all cells from same row in a specific feild', function(done) {
      assert.deepEqual(scheme.schema.getRowFromField(testSheetObject.basicScheme.inputs, 5), testSheetObject.transformedScheme[5].inputs);
      done();
    });
  });
});
