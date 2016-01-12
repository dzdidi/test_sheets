var path = require('path');

var xlsx = require('xlsx');
var fsReaddir = require('fs-readdir');
var through = require('through2');

var testSheetScheme = require('./test_sheet_scheme');

module.exports = function getFiles(dirPath) {
  var dirStream = fsReaddir(dirPath);

  dirStream.on('error', function(obj) {
    console.error(obj);
  });

  dirStream.on('finish', function(obj) {})
    .pipe(outReadStream)
    .pipe(print);
};

var outReadStream = through.obj(function(files, enc, callback) {
  for (var file of files) {
    if (path.extname(file) === '.xlsx') {
      var sheet = xlsx.readFile(file);
      var scheme = testSheetScheme.createBasicScheme(sheet);
      var address = file;

      this.push({ address: address, scheme: scheme, sheet: sheet });
    }
  };
  callback();
});

var print = through.obj(function(data, enc, callback) {
  console.log(data);
  callback();
});
