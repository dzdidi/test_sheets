/*
TODO:

- refactor with respect to applyTemplate
*/


var through = require('through2');

var schemeTransformer = require('../scheme').transform;
var schemeReference = require('../scheme').makeReference;
var template = require('../template');

function transform(data, enc, callback) {
  // console.log(data.scheme);
  // console.log("-------");
  // var scheme = schemeTransformer.transformScheme(data.scheme);
  // var ola = schemeToArray(scheme);
  // console.log(ola);
  var res = {
    fileName: data.address,
    sheet: data.sheet,
    content: template.applyTemplate(
      data.sheet,
      schemeTransformer.transformScheme(data.scheme), schemeReference.makeReferenceScheme(data.sheet)
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
