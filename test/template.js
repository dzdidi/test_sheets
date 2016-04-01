var assert = require('chai').assert;

var mocha = require('mocha');
var sinon = require('sinon');

var template = require('../lib/template/template_for_xlsx');

var generated = require('./doublers/generated');
var testSheetObject = require('./doublers/basicSheetObject');
var generated = require('./doublers/generated');

describe('Test coverage for template module', function() {
  it('should export an object', function(done) {
    assert.equal(typeof template, 'object');

    done();
  });

  describe('Test coverage for applyTemplate function', function() {
    it('should export applyTemplate function', function(done) {
      assert.equal(typeof template.applyTemplate, 'function');

      done();
    });

    it('should accept three parameters', function(done) {
      assert.equal(template.applyTemplate.length, 3);

      done();
    });

    it('should generate string content for executable javascript file', function(done) {
      assert.deepEqual(template.applyTemplate(testSheetObject.Sheets.Sheet1, testSheetObject.execOrder, 'file'),
      generated.content);

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
      assert.equal(template.addDescription('description'), '/*\n description \n */\n');

      done();
    });
  });

  describe('Test coverage for a addRequires', function() {
    it('should have addRequires function', function(done) {
      assert.equal(typeof template.addRequires, 'function');

      done();
    });

    it('should accept zero parameters', function(done) {
      assert.equal(template.addRequires.length, 0);

      done();
    });

    it('should return string with require applied to the input parameter', function(done) {
      assert.equal(template.addRequires(), generated.requires);

      done();
    });
  });

  describe('Test coverage for makeCall', function() {
    it('should have makeCall function', function(done) {
      assert.equal(typeof template.makeCall, 'function');

      done();
    });

    it('should accept five parameters', function(done) {
      assert.equal(template.makeCall.length, 5);

      done();
    });
    it('should build callback-hell of calls', function(done) {
      var sheet = testSheetObject.Sheets.Sheet1;
      var scheme = testSheetObject.linearCalls[0];

      var call = template.makeCall(sheet, scheme, 0, '', 'file');

      // console.log(call);
      assert.equal(call, generated.singleCall);

      done();
    });
  });

  describe('Test coverage for getValue function', function() {
    it('should have getValue function', function(done) {
      assert.equal(typeof template.getValue, 'function');

      done();
    });

    it('should accept three parameters', function(done) {
      assert.equal(template.getValue.length, 3);

      done();
    });

    it('should return value from the cell in provided sheet', function(done) {
      assert.equal(template.getValue(testSheetObject.Sheets.Sheet1, 'A1'), 'Demonstaration');
      assert.equal(template.getValue(testSheetObject.Sheets.Sheet1, 'C4'), '{el:1}');
      done();
    });
  });

  describe('Test coverage for addDeclarations function', function() {
    it('should have addDeclarations function', function(done) {
      assert.equal(typeof template.addDeclarations, 'function');

      done();
    });
    it('should accept two parameters', function(done) {
      assert.equal(template.addDeclarations.length, 2);

      done();
    });
  });

  describe('Test coverage for mergeSchemes function', function() {
    it('should have mergeSchemes function', function(done) {
      assert.equal(typeof template.mergeSchemes, 'function');

      done();
    });

    it('should accept two parameters', function(done) {
      assert.equal(template.mergeSchemes.length, 2);

      done();
    });

    it('should return object with two feils, "linear and nested"', function(done) {
      // var res = template.mergeSchemes(testSheetObject.transformedScheme, )
      done();
    });
  });

  describe('Test coverage for makeLinearCalls function', function() {
    it('should have makeLinearCalls function', function(done) {
      assert.equal(typeof template.makeLinearCalls, 'function');

      done();
    });

    it('should accept three parameters', function(done) {
      assert.equal(template.makeLinearCalls.length, 3);

      done();
    });

    it('should call return string with calls of independent asynchronous function', function(done) {
      var sheet = testSheetObject.Sheets.Sheet1;
      var linearCalls = testSheetObject.linearCalls;

      var str = template.makeLinearCalls(sheet, linearCalls, 'file');

      assert.equal(str, generated.linearCalls);

      done();
    });
  });

  describe('Test coverage for makeNestedCall', function(){
    it('should have makeNestedCall function', function(done) {
      assert.equal(typeof template.makeNestedCall , 'function');

      done();
    });

    it('should accept 5 parameters', function(done) {
      assert.equal(template.makeNestedCall.length, 5);

      done();
    });

    it('should return nested functions calls', function(done) {
      var nestedCalls = testSheetObject.nestedCalls;
      var sheet = testSheetObject.Sheets.Sheet1;

      var nestedCalls = template.makeNestedCall(sheet, nestedCalls, 'file', '', 0);

      assert.equal(nestedCalls, generated.nestedCalls);

      done();
    });
  });

  describe('Test coverage for getCallInputs', function(){
    it('should have getCallInputs function', function(done) {
      assert.equal(typeof template.getCallInputs, 'function');

      done();
    });

    it('should accept two parameters', function(done) {
      assert.equal(template.getCallInputs.length, 2);

      done();
    });

    it('should return string of array of function inputs', function(done) {
      var sheet = testSheetObject.Sheets.Sheet1;
      var schemeRow = testSheetObject.linearCalls[1];

      assert.equal(template.getCallInputs(sheet, schemeRow), ', {el:1}');

      done();
    });
  })
});
