var assert = require('chai').assert;
var sinon = require('sinon');

var fs = require('fs');
var through = require('through2');

var schemeTransformer = require('../lib/scheme').transform;
var schemeReference = require('../lib/scheme').makeReference;
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

  it('should call applyTemplate, transformScheme and makeReferenceScheme', function(done){
    var applyTemplateStub = sinon.stub(template, 'applyTemplate');
    var transformSchemeStub = sinon.stub(schemeTransformer, 'transformScheme');
    var makeReferenceSchemeStub = sinon.stub(schemeReference, 'makeReferenceScheme');

    transformStream.call(through.obj(transformStream), data, null, function(){});

    assert.equal(applyTemplateStub.called, true);
    assert.equal(transformSchemeStub.called, true);
    assert.equal(makeReferenceSchemeStub.called, true);

    applyTemplateStub.restore();
    transformSchemeStub.restore();
    makeReferenceSchemeStub.restore();
    done();
  });
});
