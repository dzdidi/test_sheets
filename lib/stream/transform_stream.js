var through = require('through2');

var schemeTransformer = require('../scheme').transform;
var template = require('../template');

function transform(data, enc, callback) {
  var res = {
    fileName: data.fileName,
    sheet: data.sheet,
    content: template.applyTemplate(
      data.sheet,
      schemeTransformer.transformScheme(data.scheme)
    ),
  };

  this.push(res);
  callback();
};

if (process.env.NODE_ENV === 'testing') {
  module.exports = transform;
} else {
  module.exports = through.obj(transform);
};
