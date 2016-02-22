var assert = require('chai').assert;

var mocha = require('mocha');
var sinon = require('sinon');

var template = require('../lib/template');
var compareAndReport = require('../lib/compare_and_report').f;

var testSheetObject = require('./doublers/basicSheetObject');
var generated = require('./doublers/generated');

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

    it('should accept three parameters', function(done) {
      assert.equal(template.applyTemplate.length, 3);

      done();
    });

    it('should generate string content for executable javascript file', function(done) {
      assert.deepEqual(template.applyTemplate(testSheetObject.Sheets.Sheet1, testSheetObject.transformedScheme, testSheetObject.refScheme),
      template.addDescription('Create new bank account')
      + generated.requires
      + generated.assignment
      + generated.callback_hell);

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
      assert.equal(template.makeRequires(), generated.requires);

      done();
    });
  });

  describe('Test coverage for makeCalls', function() {
    it('should have makeCalls function', function(done) {
      assert.equal(typeof template.makeCalls, 'function');

      done();
    });

    it('should accept four parameters', function(done) {
      assert.equal(template.makeCalls.length, 4);

      done();
    });
    it('should recurively build callback-hell of calls', function(done) {
      assert.equal(template.makeCalls(testSheetObject.Sheets.Sheet1, testSheetObject.transformedSchemeCallsOnly, 0, ''), generated.callback_hell);

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
      assert.equal(template.getValue(testSheetObject.Sheets.Sheet1, 'A1'), 'Create new bank account');
      assert.equal(template.getValue(testSheetObject.Sheets.Sheet1, 'C4'), 'input1');
      done();
    });
  });

  describe('Test coverage for schemeToArray function', function() {
    it('should have schemeToArray function', function(done) {
      assert.equal(typeof template.schemeToArray, 'function');

      done();
    });

    it('should accept one paramter scheme', function(done) {
      assert.equal(template.schemeToArray.length, 1);

      done();
    });

    it('should transform scheme object to array of objects each of which represents a line below service lines', function(done){
      assert.deepEqual(template.schemeToArray(testSheetObject.transformedScheme), testSheetObject.transformedSchemeCallsOnly);

      done();
    });
  });

  describe('Test coverage for makeDeclarations function', function(){
    it('should have makeDeclarations function', function(done) {
      assert.equal(typeof template.makeDeclarations, 'function');

      done();
    });
    it('should accept two parameters', function(done) {
      assert.equal(template.makeDeclarations.length, 2);

      done();
    });

    it('should assign value of each non-service cell except to the variable with name of its cordinates', function(done) {
      assert.equal(template.makeDeclarations(testSheetObject.Sheets.Sheet1, testSheetObject.refScheme), generated.assignment);

      done();
    });
  });
});
