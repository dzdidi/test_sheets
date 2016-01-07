var assert = require('chai').assert;
var fs = require('fs');
var path = require('path');

var mocha = require('mocha');
var sinon = require('sinon');

var readXLSX = require('../lib/read_xlsx');
var testSheetFactory = require('../lib/test_sheet_factory');

describe('Test coverage for read_xlsx library', function() {
  it('should export a function', function(done) {
    assert.equal(typeof (readXLSX), 'function');

    done();
  });

  it('should take one argument', function(done) {
    assert.equal(readXLSX.length, 1);

    done();
  });

  it('should be type of string, otherwise error should bs thrown', function(done) {
    assert.throws(function() {
        readXLSX(25);
      }, 'path must be a string');

    assert.doesNotThrow(function() {
        readXLSX('string');
      }, 'path must be a string');

    done();
  });

  it('should read content of provided directory', function(done) {
    var fsSpy = sinon.spy(fs, 'readdir');

    readXLSX('./test/doublers');

    assert.equal(fsSpy.called, true);
    fsSpy.restore();
    done();
  });

  // it('should call itself if content is a directory', function(done) {
  //   var selfSpy = sinon.spy(readXLSX);
  //   var statSpy = sinon.spy(fs, 'statSync');
  //
  //   readXLSX('./test/doublers');
  //
  //   assert.equal(selfSpy.called, true);
  //   assert.equal(statSpy.called, true);
  //
  //   selfSpy.restore();
  //   statSpy.restore();
  //
  //   done();
  // });
  //
  // it('should check file\'s extenstion and skip it if not .xlsx ', function(done) {
  //   var spy = sinon.spy(path, 'extname');
  //
  //   readXLSX('./test/doublers');
  //   assert.equal(spy.called, true);
  //
  //   spy.restore();
  //   done();
  // });
  //
  // it('should call testSheetFactory', function(done) {
  //   var spy = sinon.spy(testSheetFactory, 'createTS');
  //
  //   readXLSX('./test/doublers');
  //
  //   assert.equal(spy.called, true);
  //
  //   spy.restore();
  //
  //   done();
  // });
});
