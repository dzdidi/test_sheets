/*
  S. - Single Responsibility Principle - cna be changed only due to the change of input type
  O. - Open Close Principle - new pipes can be added in a single place
  L. - Liscov Substitution Principle - no inheritance
  I. - Interface Segregation Principle - Stream interface / File System interface
  D. - Dependency Inversion Principle - Higgher level module index.js does not depend on current library
*/

var path = require('path');

var xlsx = require('xlsx');
var fsReaddir = require('fs-readdir');
var through = require('through2');
var multipipe = require('multipipe');

var testSheetScheme = require('../scheme').make;

function getFilesStream(dirPath) {
  var dirStream = fsReaddir(dirPath);

  dirStream.on('error', function(obj) {
    console.error(obj);
  });

  return dirStream.on('finish', function(obj) {});
};

var getDataStream = through.obj(function(files, enc, callback) {
  for (var file of files) {
    if (path.extname(file) === '.xlsx') {
      var sheet = xlsx.readFile(file, {'cellStyles': true}).Sheets.Sheet1;
      var scheme = testSheetScheme.createBasicScheme(sheet);

      this.push({ fileName: file, scheme: scheme, sheet: sheet });
    };
  };

  callback();
});

module.exports = function(dir) {
  return multipipe(getFilesStream(dir), getDataStream);
};
