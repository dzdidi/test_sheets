/*
  S. - Single Responsibility Principle - can be changed only due to the change of Test Sheet type
  O. - Open Close Principle - new pipes can be added in a single place
  L. - Liscov Substitution Principle - no inheritance
  I. - Interface Segregation Principle - Stream interface / File System interface
  D. - Dependency Inversion Principle - Higher level module index.js does not depend on implementation of current library
*/
var through = require('through2');

var template = require('../template');
var scheme = require('../scheme');

function transform(data, enc, callback) {
  var res = {
    fileName: data.fileName,
    meta: data.meta,
    content: template.applyTemplate(
        data.sheet,
        scheme.createScheme(data.sheet),
        data.fileName),
  };

  this.push(res);
  callback();
};

if (process.env.NODE_ENV === 'testing') {
  module.exports = transform;
} else {
  module.exports = through.obj(transform);
};
