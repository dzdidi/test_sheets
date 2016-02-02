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

  describe('Test coverage for a makeRequires', function() {
    it('should have makeRequires function', function(done) {
      assert.equal(typeof template.makeRequires, 'function');

      done();
    });

    it('should accept zero parameters', function(done) {
      assert.equal(template.makeRequires.length, 0);

      done();
    });

    it('should return string with require applied to the input parameter', function(done) {
      assert.equal(template.makeRequires(), 'var scrapBase = require(\'../../banking/scraping/nodeBase\');'
      + '\n var assert = require(\'assert\');'
      + '\n');

      done();
    });
  });

  // describe('Test coverage for makeCall', function() {
  //   it('should have makeCall function', function(done) {
  //     assert.equal(typeof template.makeCall, 'function');
  //
  //     done();
  //   });
  //
  //   it('should accept two parameters', function(done) {
  //     assert.equal(template.makeCall.length, 2);
  //
  //     done();
  //   });
  //
  //   it('should return call string', function(done) {
  //     assert.equal(template.makeCall('script', 'arguments'), 'scrapBase.prototype.execScript(this, \'script\', arguments, ' + template.compare.toString() + ');');
  //
  //     done();
  //   });
  // });

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
      assert.equal(template.getValue(testSheetObject.Sheets.Sheet1, 'A1'), 'Create new bank account');
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
      assert.deepEqual(template.getRow(testSheetObject.Sheets.Sheet1, 1, testSheetObject.transformedScheme), { description: 'Create new bank account' });

      assert.deepEqual(template.getRow(testSheetObject.Sheets.Sheet1, 2, testSheetObject.transformedScheme), { moduleUnderTest: 'module_under_test.js' });

      assert.deepEqual(template.getRow(testSheetObject.Sheets.Sheet1, 3, testSheetObject.transformedScheme), testSheetObject.thirdRow);

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
