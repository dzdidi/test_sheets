var fs = require('fs');
var stream = require('stream');
var util = require('util');
var path = require('path');
var mkdirp = require('mkdirp');

var through = require('through2');
var multipipe = require('multipipe');

var schemeTransforemer = require('./scheme_transformer');
var template = require('./template');

var schemeReference = require('./scheme_reference');

var composer = through.obj(function(data, enc, callback) {
  var scheme = schemeTransforemer.transformScheme(data.scheme);
  var refScheme = schemeReference.makeReferenceScheme(data.sheet.Sheets.Sheet1);
  var fileName = data.address;
  var fileContent = data.sheet;

  var res = {
    fileName: data.address,
    sheet: data.sheet.Sheets.Sheet1,
    scheme: scheme,
    refScheme: refScheme,
  };

  this.push(res);

  schemeReference.makeReferenceScheme(data.sheet.Sheets.Sheet1);

  callback();
});

var writer = through.obj(function(data, enc, callback) {
  fs.writeFile(data.fileName, data.content, callback);
});

var printer = through.obj(function(data, enc, callback) {
  console.log(data);
  this.push(data);
  callback();
});

module.exports = multipipe(composer, printer);
