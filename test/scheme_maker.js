var assert = require('chai').assert;

var mocha = require('mocha');
var sinon = require('sinon');

var schemeMaker = require('../lib/scheme').make;

// should be molved to before hook
var descriptionSpy = sinon.spy(schemeMaker, 'getDescription');
var moduleUnderTestSpy = sinon.spy(schemeMaker, 'getModuleUnderTest');
var objectsUnderTestSpy = sinon.spy(schemeMaker, 'getObjectsUnderTest');
var methodsUnderTestSpy = sinon.spy(schemeMaker, 'getMethodsUnderTest');
var inputsSpy = sinon.spy(schemeMaker, 'getInputs');
var outputsSpy = sinon.spy(schemeMaker, 'getOutputs');

var testSheetObject = require('./doublers/basicSheetObject');

describe('Creation of Test Sheet object', function() {

  describe('getDescription function', function() {
    it('should have getDescription function', function(done) {
      assert.equal(typeof (schemeMaker.getDescription), 'function');
      done();
    });

    it('should accept one parameter', function(done) {
      assert.equal(schemeMaker.getDescription.length, 1);

      assert.throws(function() {
        schemeMaker.getDescription();
      }, 'sheet has to be provided');

      done();
    });

    it('should return description feild from sheet', function(done) {
      assert.equal(schemeMaker.getDescription(testSheetObject.Sheets.Sheet1), testSheetObject.basicScheme.description);

      done();
    });
  });

  describe('getModuleUnderTest function', function() {
    it('should have getModuleUnderTest function', function(done) {
      assert.equal(typeof (schemeMaker.getModuleUnderTest), 'function');

      done();
    });

    it('should accept one parameter', function(done) {
      assert.equal(schemeMaker.getModuleUnderTest.length, 1);

      assert.throws(function() {
        schemeMaker.getModuleUnderTest();
      }, 'sheet has to be provided');

      done();
    });

    it('should return moduleUnderTest feild from sheet', function(done) {
      assert.equal(schemeMaker.getModuleUnderTest(testSheetObject.Sheets.Sheet1), testSheetObject.basicScheme.moduleUnderTest);

      done();
    });
  });

  describe('getObjectsUnderTest function', function() {
    it('should have getObjectsUnderTest function', function(done) {
      assert.equal(typeof (schemeMaker.getObjectsUnderTest), 'function');

      done();
    });

    it('should accept one parameter', function(done) {
      assert.equal(schemeMaker.getObjectsUnderTest.length, 1);

      assert.throws(function() {
        schemeMaker.getObjectsUnderTest();
      }, 'sheet has to be provided');

      done();
    });

    it('should return objects under test feilds from sheet', function(done) {
      assert.deepEqual(schemeMaker.getObjectsUnderTest(testSheetObject.Sheets.Sheet1), testSheetObject.basicScheme.objectsUnderTest);

      done();
    });
  });

  describe('getMethodsUnderTest function', function() {
    it('should have getMethodsUnderTest function', function(done) {
      assert.equal(typeof (schemeMaker.getMethodsUnderTest), 'function');

      done();
    });

    it('should accept one parameter', function(done) {
      assert.equal(schemeMaker.getMethodsUnderTest.length, 1);

      assert.throws(function() {
        schemeMaker.getMethodsUnderTest();
      }, 'sheet has to be provided');

      done();
    });

    it('should return methods under test feilds from sheet', function(done) {
      assert.deepEqual(schemeMaker.getMethodsUnderTest(testSheetObject.Sheets.Sheet1), testSheetObject.basicScheme.methodsUnderTest);

      done();
    });
  });

  describe('getInputs function', function() {
    it('should have getInputs function', function(done) {
      assert.equal(typeof (schemeMaker.getInputs), 'function');

      done();
    });

    it('should accept one parameter', function(done) {
      assert.equal(schemeMaker.getInputs.length, 1);

      assert.throws(function() {
        schemeMaker.getInputs();
      }, 'sheet has to be provided');

      done();
    });

    it('should return inputs feilds from sheet', function(done) {
      assert.deepEqual(schemeMaker.getInputs(testSheetObject.Sheets.Sheet1), testSheetObject.basicScheme.inputs);

      done();
    });
  });

  describe('getOutputs function', function() {
    it('should have getOutputs function', function(done) {
      assert.equal(typeof (schemeMaker.getOutputs), 'function');

      done();
    });

    it('should accept one parameter', function(done) {
      assert.equal(schemeMaker.getOutputs.length, 1);

      assert.throws(function() {
        schemeMaker.getOutputs();
      }, 'sheet has to be provided');

      done();
    });

    it('should return output feilds from sheet', function(done) {
      assert.deepEqual(schemeMaker.getOutputs(testSheetObject.Sheets.Sheet1), testSheetObject.basicScheme.outputs);

      done();
    });
  });

  describe('getInvocationCells function', function() {
    it('should have getInvocationCells function', function() {
      assert.equal(typeof (schemeMaker.getInvocationCells), 'function');
    });

    it('should accept one parameter', function(done) {
      assert.equal(schemeMaker.getInvocationCells.length, 1);

      assert.throws(function() {
        schemeMaker.getInvocationCells();
      }, 'sheet has to be provided');

      done();
    });

    it('should return keys of input where field \'v\' is equal to \'|\' or \'||\'', function(done) {
      var aInvocationCells = schemeMaker.getInvocationCells(testSheetObject.Sheets.Sheet1);
      var eInvocationCells = testSheetObject.basicScheme.invocations;

      assert.deepEqual(aInvocationCells, eInvocationCells);

      done();
    });
  });
});
