var assert = require('assert');

var mocha = require('mocha');
var sinon = require('sinon');

var testSheetFactory = require('../lib/test_sheet_factory');

describe('Creation of Test Sheet object and placing it into readable stream', function() {
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
    //
    //   testSheetFactory.createTS();
    //
    //   assert.equal(spy.called, true);
    //
    //   spy.restore();
    //   done();
    // });
  });

  describe('getDescription function', function() {
    it('should have getDescription function', function(done) {

      done();
    });

    it('should accept one parameter', function(done) {
      assert.equal(testSheetFactory.getDescription.length, 1);

      assert.throws(function() {
        testSheetFactory.getDescription();
      }, 'sheet has to be provided');

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
  });
});
