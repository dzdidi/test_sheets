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

  describe('Test coverage for a requireBaseScript', function() {
    it('should have requireBaseScript function', function(done) {
      assert.equal(typeof template.requireBaseScript, 'function');

      done();
    });

    it('should accept zero parameters', function(done) {
      assert.equal(template.requireBaseScript.length, 0);

      done();
    });

    it('should return string with require applied to the input parameter', function(done) {
      assert.equal(template.requireBaseScript(), 'var scrapBase = require(\'../../banking/scraping/nodeBase\')');

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

  describe('Test coverage for compare', function() {
    it('should have compare function', function(done) {
      assert.equal(typeof template.compare, 'function');

      done();
    });

    it('should accept three paramters', function(done) {
      assert.equal(template.compare.length, 3);

      done();
    });

    it('should deeply compare scheme if last parameter is \'|\'', function(done) {
      var obj1 = {a:1, b:{c: 2, d: {e: 3}}};
      var obj2 = {a:4, b:{c: 5, d: {e: 6}}};
      var obj3 = {a:4, b:{c: 5, d: {f: 6}}};

      assert.equal(template.compare(obj1, obj2, '|'), true);
      assert.equal(template.compare(obj1, obj3, '|'), false);

      done();
    });

    it('should deeply objects is last parameter is \'||\'', function(done) {
      var obj1 = {a:1, b:{c: 2, d: {e: 3}}};
      var obj2 = {a:1, b:{c: 2, d: {e: 3}}};
      var obj3 = {a:1, b:{c: 2, d: {f: 3}}};
      var obj4 = {a:1, b:{c: 2, d: {e: 6}}};

      assert.equal(template.compare(obj1, obj2, '||'), true);
      assert.equal(template.compare(obj1, obj3, '||'), false);
      assert.equal(template.compare(obj1, obj4, '||'), false);

      done();
    });
  });

  describe('Test coverage for getDeepKeys', function() {
    it('should have getDeepKeys function', function(done) {
      assert.equal(typeof template.getDeepKeys, 'function');

      done();
    });

    it('should accept two paramters', function(done) {
      assert.equal(template.getDeepKeys.length, 2);

      done();
    });

    it('should  return deep getDeepKeys', function(done) {
      var obj1 = {a:1, b:{c: 2, d: {e: 3}}};

      assert.deepEqual(template.getDeepKeys(obj1, []), ['a', 'b', 'c', 'd', 'e']);

      done();
    });
  });
});
