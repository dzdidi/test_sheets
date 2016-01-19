var assert = require('chai').assert;

var mocha = require('mocha');
var sinon = require('sinon');

var template = require('../lib/template');

var testSheetObject = require('./doublers/basicSheetObject');

describe('Test coverage for template module', function() {
  it('should export an object', function(done) {
    assert.equal(typeof template, 'object');

    done();
  });

  describe('Test coverage for apply template function', function() {
    it('should export applyTemplate function', function(done) {
      assert.equal(typeof template.applyTemplate, 'function');

      done();
    });

    it('should accept two parameters', function(done) {
      assert.equal(template.applyTemplate.length, 2);

      done();
    });
  });

  describe('Test coverage for addDescription', function() {
    it('should have addDescription function', function(done) {
      assert.equal(typeof template.addDescription, 'function');

      done();
    });

    it('should accept one parameter', function(done) {
      assert.equal(template.addDescription.length, 1);

      done();
    });

    it('should return string with description enclosed in comment', function(done) {
      assert.equal(template.addDescription('description'), '/*\n description \n */');

      done();
    });
  });

  describe('Test coverage for a makeRequire', function() {
    it('should have makeRequire function', function(done) {
      assert.equal(typeof template.makeRequire, 'function');

      done();
    });

    it('should accept one parameter', function(done) {
      assert.equal(template.makeRequire.length, 1);

      done();
    });

    it('should return string with require applied to the input parameter', function(done) {
      assert.equal(template.makeRequire('moduleUnderTest'), 'var moduleUnderTest = require(\'./moduleUnderTest\');\n');

      done();
    });
  });

  describe('Test coverage for getValue function', function() {
    it('should have getValue function', function(done) {
      assert.equal(typeof template.getValue, 'function');

      done();
    });

    it('should accept two parameters', function(done) {
      assert.equal(template.getValue.length, 2);

      done();
    });

    it('should return value from the cell in provided sheet', function(done) {
      assert.equal(template.getValue(testSheetObject.Sheets.Sheet1, 'A1'), 'Here should be scenario name');
      assert.equal(template.getValue(testSheetObject.Sheets.Sheet1, 'C4'), 'input1');
      done();
    });
  });

  describe('Test coverage for function getRow', function() {
    it('should have function getRow', function(done) {
      assert.equal(typeof template.getRow, 'function');

      done();
    });

    it('should accept three parameters', function(done) {
      assert.equal(template.getRow.length, 3);

      done();
    });

    it('should return object with values from the provided row in a provided sheet', function(done) {
      assert.deepEqual(template.getRow(1, testSheetObject.Sheets.Sheet1, testSheetObject.transformedScheme), { description: 'Here should be scenario name' });

      assert.deepEqual(template.getRow(2, testSheetObject.Sheets.Sheet1, testSheetObject.transformedScheme), { moduleUnderTest: 'module_under_test.js' });

      assert.deepEqual(template.getRow(3, testSheetObject.Sheets.Sheet1, testSheetObject.transformedScheme), {
        objectUnderTest: 'module_under_test',
        methodUnderTest: 'method1',
        inputs: ['input1', 'input2'],
        outputs: ['output1', 'output2'],
      });

      done();
    });
  });

  describe('Test coverage for translateRow function', function() {
    it('should have translateRow function', function(done) {
      assert.equal(typeof template.translateRow, 'function');

      done();
    });

    it('should accpet one parameter', function(done) {
      assert.equal(template.translateRow.length, 1);

      done();
    });
  });
});
