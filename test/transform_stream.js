var assert = require('chai').assert;
var sinon = require('sinon');

var fs = require('fs');
var through = require('through2');

var scheme_lib = require('../lib/scheme');
var template = require('../lib/template');

var transformStream = require('../lib/stream').transform;

var testSheetObject = require('./doublers/basicSheetObject');
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

  it('should call applyTemplate', function(done){
    var applyTemplateStub = sinon.stub(template, 'applyTemplate', function(){});

    var createSchemeStub = sinon.stub(scheme_lib.scheme, 'createScheme', function(){});
    var makeOrderStub = sinon.stub(scheme_lib.order, 'makeOrder', function(){});
    var executionStub = sinon.stub(scheme_lib.executionScheme, 'create', function(){});
    var data = {
      sheet: testSheetObject.Sheets.Sheet1,
      meta: {},
      fileName: 'file'
    }
    transformStream.call(through.obj(transformStream), data, null, function(){});

    assert.equal(applyTemplateStub.called, true);
    assert.equal(createSchemeStub.called, true);
    assert.equal(makeOrderStub.called, true);
    assert.equal(executionStub.called, true);

    applyTemplateStub.restore();
    createSchemeStub.restore();
    makeOrderStub.restore();
    executionStub.restore();
    done();
  });
});
