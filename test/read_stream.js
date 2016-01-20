var assert = require('chai').assert;
var fs = require('fs');
var path = require('path');

var mocha = require('mocha');
var sinon = require('sinon');

var readXLSX = require('../lib/read_stream');
var testSheetScheme = require('../lib/scheme_maker');

var readXLSXSpy = sinon.spy(readXLSX);
var fsSpy = sinon.spy(fs, 'readdir');
var statSpy = sinon.spy(fs, 'statSync');
var extnameSpy = sinon.spy(path, 'extname');
var basicSchemeSpy = sinon.spy(testSheetScheme, 'createBasicScheme');

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
      }, 'fsReaddir: expect `root` to be string');

    assert.doesNotThrow(function() {
        readXLSX('string');
      }, 'fsReaddir: expect `root` to be string');

    done();
  });

  it('should read content of provided directory', function(done) {
    readXLSX('./test/doublers');

    assert.equal(fsSpy.called, true);

    fsSpy.restore();
    done();
  });

  it('should check file\'s extenstion and skip it if not .xlsx ', function(done) {
    readXLSX('./test/doublers');
    assert.equal(extnameSpy.called, true);

    extnameSpy.restore();
    done();
  });

  it('should call testSheetScheme createBasicScheme', function(done) {
    readXLSX('./test/doublers');

    assert.equal(basicSchemeSpy.called, true);

    basicSchemeSpy.restore();
    done();
  });
});
