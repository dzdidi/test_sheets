var assert = require('chai').assert;

var mocha = require('mocha');
var sinon = require('sinon');

var testSheetScheme = require('../lib/test_sheet_scheme');

// should be molved to before hook
var descriptionSpy = sinon.spy(testSheetScheme, 'getDescription');
var moduleUnderTestSpy = sinon.spy(testSheetScheme, 'getModuleUnderTest');
var objectsUnderTestSpy = sinon.spy(testSheetScheme, 'getObjectsUnderTest');
var methodsUnderTestSpy = sinon.spy(testSheetScheme, 'getMethodsUnderTest');
var inputsSpy = sinon.spy(testSheetScheme, 'getInputs');
var outputsSpy = sinon.spy(testSheetScheme, 'getOutputs');

var testSheetObject = require('./doublers/basicSheetObject');

describe('Creation of Test Sheet object', function() {

  describe('getDescription function', function() {
    it('should have getDescription function', function(done) {
      assert.equal(typeof (testSheetScheme.getDescription), 'function');
      done();
    });

    it('should accept one parameter', function(done) {
      assert.equal(testSheetScheme.getDescription.length, 1);

      assert.throws(function() {
        testSheetScheme.getDescription();
      }, 'sheet has to be provided');

      done();
    });

    it('should return value of A1 cell', function(done) {
      var aA1v = testSheetScheme.getDescription(testSheetObject.Sheets.Sheet1);
      var eA1v = testSheetObject.Sheets.Sheet1.A1.v;
      assert.equal(eA1v, aA1v);
      done();
    });
  });

  describe('getModuleUnderTest function', function() {
    it('should have getModuleUnderTest function', function(done) {
      assert.equal(typeof (testSheetScheme.getModuleUnderTest), 'function');

      done();
    });

    it('should accept one parameter', function(done) {
      assert.equal(testSheetScheme.getModuleUnderTest.length, 1);

      assert.throws(function() {
        testSheetScheme.getModuleUnderTest();
      }, 'sheet has to be provided');

      done();
    });

    it('should return value of A2 cell', function(done) {
      var aA2v = testSheetScheme.getModuleUnderTest(testSheetObject.Sheets.Sheet1);
      var eA2v = testSheetObject.Sheets.Sheet1.A2.v;
      assert.equal(eA2v, aA2v);
      done();
    });
  });

  describe('getObjectsUnderTest function', function() {
    it('should have getObjectsUnderTest function', function(done) {
      assert.equal(typeof (testSheetScheme.getObjectsUnderTest), 'function');

      done();
    });

    it('should accept one parameter', function(done) {
      assert.equal(testSheetScheme.getObjectsUnderTest.length, 1);

      assert.throws(function() {
        testSheetScheme.getObjectsUnderTest();
      }, 'sheet has to be provided');

      done();
    });

    it('should return array of values from column A starting from cell A3', function(done) {
      var aOUT = testSheetScheme.getObjectsUnderTest(testSheetObject.Sheets.Sheet1);
      var eOUT = testSheetObject.objectsUnderTest;
      assert.deepEqual(aOUT, eOUT);

      done();
    });
  });

  describe('getMethodsUnderTest function', function() {
    it('should have getMethodsUnderTest function', function(done) {
      assert.equal(typeof (testSheetScheme.getMethodsUnderTest), 'function');

      done();
    });

    it('should accept one parameter', function(done) {
      assert.equal(testSheetScheme.getMethodsUnderTest.length, 1);

      assert.throws(function() {
        testSheetScheme.getMethodsUnderTest();
      }, 'sheet has to be provided');

      done();
    });

    it('should return array of values from column B starting from cell B3', function(done) {
      var aOUT = testSheetScheme.getMethodsUnderTest(testSheetObject.Sheets.Sheet1);
      var eOUT = testSheetObject.methodsUnderTest;
      assert.deepEqual(aOUT, eOUT);

      done();
    });
  });

  describe('getInputs function', function() {
    it('should have getInputs function', function(done) {
      assert.equal(typeof (testSheetScheme.getInputs), 'function');

      done();
    });

    it('should accept one parameter', function(done) {
      assert.equal(testSheetScheme.getInputs.length, 1);

      assert.throws(function() {
        testSheetScheme.getInputs();
      }, 'sheet has to be provided');

      done();
    });

    it('should return cells from columns between B and invocation colum', function(done) {
      var aInput = testSheetScheme.getInputs(testSheetObject.Sheets.Sheet1).sort();
      var eInput = testSheetObject.inputParameters.sort();

      assert.deepEqual(aInput, eInput);

      done();
    });
  });

  describe('getOutputs function', function() {
    it('should have getOutputs function', function(done) {
      assert.equal(typeof (testSheetScheme.getOutputs), 'function');

      done();
    });

    it('should accept one parameter', function(done) {
      assert.equal(testSheetScheme.getOutputs.length, 1);

      assert.throws(function() {
        testSheetScheme.getOutputs();
      }, 'sheet has to be provided');

      done();
    });

    it('should return cells from columns after invocation colum', function(done) {
      var aOutput = testSheetScheme.getOutputs(testSheetObject.Sheets.Sheet1).sort();
      var eOutput = testSheetObject.outputParameters.sort();

      assert.deepEqual(aOutput, eOutput);

      done();
    });
  });

  describe('getInvocationCells function', function() {
    it('should have getInvocationCells function', function() {
      assert.equal(typeof (testSheetScheme.getInvocationCells), 'function');
    });

    it('should accept one parameter', function(done) {
      assert.equal(testSheetScheme.getInvocationCells.length, 1);

      assert.throws(function() {
        testSheetScheme.getInvocationCells();
      }, 'sheet has to be provided');

      done();
    });

    it('should return keys of input where field \'v\' is equal \'|\'', function(done) {
      var aInvocationCells = testSheetScheme.getInvocationCells(testSheetObject.Sheets.Sheet1);
      var eInvocationCells = testSheetObject.invocationCells;

      assert.deepEqual(aInvocationCells, eInvocationCells);

      done();
    });
  });

  describe('createBasicScheme function', function() {
    it('should have createBasicScheme function', function(done) {
      assert.equal(typeof (testSheetScheme.createBasicScheme), 'function');

      done();
    });

    it('should accept one parameter', function(done) {
      assert.equal(testSheetScheme.createBasicScheme.length, 1);

      assert.throws(function() {
        testSheetScheme.createBasicScheme();
      }, 'sheet has to be provided');

      done();
    });

    it('should call getDescription', function(done) {
      testSheetScheme.createBasicScheme(testSheetObject);

      assert.equal(descriptionSpy.called, true);

      descriptionSpy.restore();
      done();
    });

    it('should call getModuleUnderTest', function(done) {
      testSheetScheme.createBasicScheme(testSheetObject);

      assert.equal(moduleUnderTestSpy.called, true);

      moduleUnderTestSpy.restore();
      done();
    });

    it('should call getObjectsUnderTest', function(done) {
      testSheetScheme.createBasicScheme(testSheetObject);

      assert.equal(objectsUnderTestSpy.called, true);

      objectsUnderTestSpy.restore();
      done();
    });

    it('should call getMethodsUnderTest', function(done) {
      testSheetScheme.createBasicScheme(testSheetObject);

      assert.equal(moduleUnderTestSpy.called, true);

      moduleUnderTestSpy.restore();
      done();
    });

    it('should call getInputs', function(done) {
      testSheetScheme.createBasicScheme(testSheetObject);

      assert.equal(inputsSpy.called, true);

      inputsSpy.restore();
      done();
    });

    it('should call getOutputs', function(done) {

      testSheetScheme.createBasicScheme(testSheetObject);

      assert.equal(outputsSpy.called, true);

      outputsSpy.restore();
      done();
    });
  });
});
