var assert = require('chai').assert;
var sinon = require('sinon');

var fs = require('fs');
var through = require('through2');

var scheme = require('../lib/scheme');
var template = require('../lib/template');

var transformStream = require('../lib/stream').transform;

var data = {
  sheet: '',
  scheme: '',
}

describe('Test coverage for transform stream function', function(){
  it('should export a function', function(done) {
    assert.equal(typeof transformStream, 'function');

    done();
  });

  it('should accept three parameters', function(done){
    assert.equal(transformStream.length, 3);

    done();
  });

  it('should call applyTemplate and makeScheme ', function(done){
    var applyTemplateStub = sinon.stub(template, 'applyTemplate');
    var createSchemeStub = sinon.stub(scheme, 'createScheme');

    transformStream.call(through.obj(transformStream), data, null, function(){});

    assert.equal(applyTemplateStub.called, true);
    assert.equal(createSchemeStub.called, true);

    applyTemplateStub.restore();
    createSchemeStub.restore();
    done();
  });
});
