var assert = require('chai').assert;
var fs = require('fs');
var path = require('path');

var mocha = require('mocha');
var sinon = require('sinon');

var readStream = require('../lib/stream').read;

var readStreamSpy = sinon.spy(readStream);
var fsSpy = sinon.spy(fs, 'readdir');
var extnameSpy = sinon.spy(path, 'extname');

describe('Test coverage for readStream', function() {
  it('should export a function', function(done) {
    assert.equal(typeof (readStream), 'function');

    done();
  });

  it('should take one argument', function(done) {
    assert.equal(readStream.length, 1);

    done();
  });

  it('should be type of string, otherwise error should bs thrown', function(done) {
    assert.throws(function() {
        readStream(25);
      }, 'fsReaddir: expect `root` to be string');

    assert.doesNotThrow(function() {
        readStream('string');
      }, 'fsReaddir: expect `root` to be string');

    done();
  });

  it('should read content of provided directory', function(done) {
    readStream('./test/doublers');

    assert.equal(fsSpy.called, true);

    fsSpy.restore();
    done();
  });

  it('should check file\'s extenstion and skip it if not .xlsx ', function(done) {
    readStream('./test/doublers');
    assert.equal(extnameSpy.called, true);

    extnameSpy.restore();
    done();
  });
});
