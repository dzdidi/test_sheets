var assert = require('chai').assert;

var mocha = require('mocha');
var sinon = require('sinon');

var testSheetFactory = require('../lib/test_sheet_factory');

var testSheetObject = require('./doublers/basicSheetObject');

describe('Creation of Test Sheet object', function() {

  describe('getDescription function', function() {
    it('should have getDescription function', function(done) {
      assert.equal(typeof (testSheetFactory.getDescription), 'function');
      done();
    });

    it('should accept one parameter', function(done) {
      assert.equal(testSheetFactory.getDescription.length, 1);

      assert.throws(function() {
        testSheetFactory.getDescription();
      }, 'sheet has to be provided');

      done();
    });

    it('should return value of A1 cell', function(done) {
      var aA1v = testSheetFactory.getDescription(testSheetObject.sheet);
      var eA1v = testSheetObject.sheet.A1.v;
      assert.equal(eA1v, aA1v);
      done();
    });
  });

  describe('getModuleUnderTest function', function() {
    it('should have getModuleUnderTest function', function(done) {
      assert.equal(typeof (testSheetFactory.getModuleUnderTest), 'function');

      done();
    });

    it('should accept one parameter', function(done) {
      assert.equal(testSheetFactory.getModuleUnderTest.length, 1);

      assert.throws(function() {
        testSheetFactory.getModuleUnderTest();
      }, 'sheet has to be provided');

      done();
    });

    it('should return value of A2 cell', function(done) {
      var aA2v = testSheetFactory.getModuleUnderTest(testSheetObject.sheet);
      var eA2v = testSheetObject.sheet.A2.v;
      assert.equal(eA2v, aA2v);
      done();
    });
  });

  describe('getObjectsUnderTest function', function() {
    it('should have getObjectsUnderTest function', function(done) {
      assert.equal(typeof (testSheetFactory.getObjectsUnderTest), 'function');

      done();
    });

    it('should accept one parameter', function(done) {
      assert.equal(testSheetFactory.getObjectsUnderTest.length, 1);

      assert.throws(function() {
        testSheetFactory.getObjectsUnderTest();
      }, 'sheet has to be provided');

      done();
    });

    it('should return array of values from column A starting from cell A3', function(done) {
      var aOUT = testSheetFactory.getObjectsUnderTest(testSheetObject.sheet);
      var eOUT = testSheetObject.objectsUnderTest;
      assert.deepEqual(aOUT, eOUT);

      done();
    });
  });

  describe('getMethodsUnderTest function', function() {
    it('should have getMethodsUnderTest function', function(done) {
      assert.equal(typeof (testSheetFactory.getMethodsUnderTest), 'function');

      done();
    });

    it('should accept one parameter', function(done) {
      assert.equal(testSheetFactory.getMethodsUnderTest.length, 1);

      assert.throws(function() {
        testSheetFactory.getMethodsUnderTest();
      }, 'sheet has to be provided');

      done();
    });

    it('should return array of values from column B starting from cell B3', function(done) {
      var aOUT = testSheetFactory.getMethodsUnderTest(testSheetObject.sheet);
      var eOUT = testSheetObject.methodsUnderTest;
      assert.deepEqual(aOUT, eOUT);

      done();
    });
  });

  describe('getInputs function', function() {
    it('should have getInputs function', function(done) {
      assert.equal(typeof (testSheetFactory.getInputs), 'function');

      done();
    });

    it('should accept one parameter', function(done) {
      assert.equal(testSheetFactory.getInputs.length, 1);

      assert.throws(function() {
        testSheetFactory.getInputs();
      }, 'sheet has to be provided');

      done();
    });

    // it('should call getInvocationCells function', function(done) {
    //   var spy = sinon.spy(testSheetFactory, 'getInvocationCells');
    //
    //   testSheetFactory.getInputs(testSheetObject.sheet);
    //
    //   assert.equal(spy.called, true);
    //
    //   spy.restore();
    //   done();
    // });

    it('should return cells from columns between B and invocation colum', function(done) {
      var aInput = testSheetFactory.getInputs(testSheetObject.sheet).sort();
      var eInput = testSheetObject.inputParameters.sort();
      assert.deepEqual(aInput, eInput);
      done();
    });
  });

  describe('getOutputs function', function() {
    it('should have getOutputs function', function(done) {
      assert.equal(typeof (testSheetFactory.getOutputs), 'function');

      done();
    });

    it('should accept one parameter', function(done) {
      assert.equal(testSheetFactory.getOutputs.length, 1);

      assert.throws(function() {
        testSheetFactory.getOutputs();
      }, 'sheet has to be provided');

      done();
    });

    // it('should call getInvocationCells function', function(done) {
    //   var spy = sinon.spy(testSheetFactory, 'getInvocationCells');
    //
    //   testSheetFactory.getOutputs(testSheetObject.sheet);
    //
    //   assert.equal(spy.called, true);
    //
    //   spy.restore();
    //   done();
    // });

    it('should return cells from columns after invocation colum', function(done) {
      var aOutput = testSheetFactory.getOutputs(testSheetObject.sheet).sort();
      var eOutput = testSheetObject.outputParameters.sort();
      assert.deepEqual(aOutput, eOutput);
      done();
    });
  });

  describe('getInvocationCells function', function() {
    it('should have getInvocationCells function', function() {
      assert.equal(typeof (testSheetFactory.getInvocationCells), 'function');
    });

    it('should accept one parameter', function(done) {
      assert.equal(testSheetFactory.getInvocationCells.length, 1);

      assert.throws(function() {
        testSheetFactory.getInvocationCells();
      }, 'sheet has to be provided');

      done();
    });

    it('should return keys of input where field \'v\' is equal \'|\'', function(done) {
      var aInvocationCells = testSheetFactory.getInvocationCells(testSheetObject.sheet);
      var eInvocationCells = testSheetObject.invocationCells;

      assert.deepEqual(aInvocationCells, eInvocationCells);

      done();
    });
  });

  describe('createTS function', function() {
    it('should have createTS function', function(done) {
      assert.equal(typeof (testSheetFactory.createTS), 'function');

      done();
    });

    it('should accept one parameter', function(done) {
      assert.equal(testSheetFactory.createTS.length, 1);

      assert.throws(function() {
        testSheetFactory.createTS();
      }, 'sheet has to be provided');

      done();
    });

    // it('should call getDescription', function(done) {
    //   var spy = sinon.spy(testSheetFactory, 'getDescription');
    //   testSheetFactory.createTS({});
    //
    //   assert.equal(spy.called, true);
    //
    //   spy.restore();
    //   done();
    // });
    //
    // it('should call getModuleUnderTest', function(done) {
    //   var spy = sinon.spy(testSheetFactory, 'getModuleUnderTest');
    //
    //   testSheetFactory.createTS({});
    //
    //   assert.equal(spy.called, true);
    //
    //   spy.restore();
    //   done();
    // });
    //
    // it('should call getObjectsUnderTest', function(done) {
    //   var spy = sinon.spy(testSheetFactory, 'getObjectsUnderTest');
    //
    //   testSheetFactory.createTS({});
    //
    //   assert.equal(spy.called, true);
    //
    //   spy.restore();
    //   done();
    // });
    //
    // it('should call getMethodsUnderTest', function(done) {
    //   var spy = sinon.spy(testSheetFactory, 'getMethodsUnderTest');
    //
    //   testSheetFactory.createTS({});
    //
    //   assert.equal(spy.called, true);
    //
    //   spy.restore();
    //   done();
    // });
    //
    // it('should call getInputs', function(done) {
    //   var spy = sinon.spy(testSheetFactory, 'getInputs');
    //
    //   testSheetFactory.createTS({});
    //
    //   assert.equal(spy.called, true);
    //
    //   spy.restore();
    //   done();
    // });
    //
    // it('should call getOutputs', function(done) {
    //   var spy = sinon.spy(testSheetFactory, 'getOutputs');
    //
    //   testSheetFactory.createTS({});
    //
    //   assert.equal(spy.called, true);
    //
    //   spy.restore();
    //   done();
    // });
  });
});
