var assert = require('chai').assert;
var sinon = require('sinon');

var fs = require('fs');

var writeStream = require('../lib/stream').write;

var data = {
  fileName: 'fileName.xlsx',
}

describe('Test coverage for a writeStream', function(){
  it('should export function', function(done){
    assert.equal(typeof writeStream, 'function');

    done();
  });

  it('should accept three parameters', function(done){
    assert.equal(writeStream.length, 3);

    done();
  });

  it('should check files stat', function(done){
    var statStub = sinon.stub(fs, 'statSync');
    var writeFileStub = sinon.stub(fs, 'writeFile', function () {});

    writeStream(data, {}, function(){});
    assert.equal(statStub.called, true);

    writeFileStub.restore();
    statStub.restore();
    done();
  });

  it('should call fs.writeFile', function(done) {
    var statStub = sinon.stub(fs, 'statSync', function() {
      return { mtime: 1 };
    });
    var writeFileStub = sinon.stub(fs, 'writeFile', function () {});

    writeStream(data, {}, function(){});

    assert.equal(writeFileStub.called, true);

    writeFileStub.restore();
    statStub.restore();
    done();
  });
});
