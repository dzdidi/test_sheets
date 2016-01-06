var assert = require('assert');
var fs = require('fs');

var mocha = require('mocha');
var sinon = require('sinon');

var readXLSX = require('../lib/read_xlsx.js');

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
      }, 'Input paramter should be string');

    assert.doesNotThrow(function() {
        readXLSX('string');
      }, 'Input paramter should be string');

    done();
  });

  it('should check is input parameter path to a directory', function(done) {
    var fsSpy = sinon.spy(fs, 'statSync');

    readXLSX('./test/doublers');

    assert.equal(fsSpy.called, true);

    assert.doesNotThrow(function() {
        readXLSX('./test/doublers');
      }, 'Input paramter should be path to directory');

    assert.throws(function() {
        readXLSX('./test/doublers/Basic.xlsx');
      }, 'Input paramter should be path to directory');

    done();
  });
});
