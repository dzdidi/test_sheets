var fs = require('fs');
var path = require('path');

var xlsx = require('xlsx');
var fsReaddir = require('fs-readdir');
// var through2 = require('through2');

var testSheetScheme = require('./test_sheet_scheme');

module.exports = function reader(dirPath) {
  try {
    var dirStream = fsReaddir(dirPath);

    dirStream.on('error', function(obj) {
      throw(obj);
    });

    dirStream.on('folder', function(obj) {
      return reader(obj);
    });

    dirStream.on('file', function(obj) {
      if (path.extname(obj) == '.xlsx'){
        var sheet = xlsx.readFile(obj);
        var scheme = testSheetScheme.createBasicScheme(sheet);


        // return/call generator with {sheet: shee, scheme: scheme}
      }
    });

    dirStream.on('finish', function(obj) {
      console.log(Object.keys(obj));
    })
  } catch (e) {
    //can be changed
    console.error(e);
    throw(e);
  };
};
