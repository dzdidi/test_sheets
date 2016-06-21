/*
  S. - Single Responsibility Principle - can be changed only due to the change of input type
  O. - Open Close Principle - new pipes can be added in a single place
  L. - Liscov Substitution Principle - no inheritance
  I. - Interface Segregation Principle - Stream interface / File System interface
  D. - Dependency Inversion Principle - Higher level module index.js does not depend on implementation current library
*/

var path = require('path');
var fs = require('fs');

var xlsx = require('xlsx');
var fsReaddir = require('fs-readdir');
var through = require('through2');
var multipipe = require('multipipe');

function getFilesStream(dirPath) {
  return fsReaddir(dirPath)
    .on('error', function(obj) {
      console.error(obj);
    })
    .on('finish', function(obj) {});
};

var getDataStream = through.obj(function(files, enc, callback) {
  for (var file of files) {
    if (path.extname(file) === '.xlsx') {
      var sheet = xlsx.readFile(file).Sheets.Sheet1;
      var meta = fs.statSync(file);

      this.push({ fileName: file, meta: meta, sheet: sheet });
    };
  };

  callback();
});

module.exports = function(dir) {
  return multipipe(getFilesStream(dir), getDataStream);
};
