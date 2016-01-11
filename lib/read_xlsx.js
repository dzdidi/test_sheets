var fs = require('fs');
var path = require('path');

var xlsx = require('xlsx');
var fsReaddir = require('fs-readdir');

var testSheetScheme = require('./test_sheet_scheme');

var stream = require('stream');
var util = require('util');

util.inherits(xlsxStream, stream.Readable);

function xlsxStream(dirPath, options) {
    stream.Readable.call(this, options);
    this.dirPath = dirPath;
}

xlsxStream.prototype._read = function(size) {
  reader(this.dirPath).then(function(data){
    var chunk = reader(this.dirPath);
    this.push = chunk;
  }, function(err){
    console.log(err);
  })

}










function reader(dirPath) {
  return new Promise(function (resolve, reject){
    try {
      var dirStream = fsReaddir(dirPath);

      dirStream.on('error', function(obj) {
        console.log("dirPath: "+dirPath);
        reject(obj);
      });

      dirStream.on('folder', function(obj) {
        // console.log('shit should be here' + dirPath);
        resolve(reader(obj));
      });

      dirStream.on('file', function(obj) {
        if (path.extname(obj) == '.xlsx'){
          var sheet = xlsx.readFile(obj);
          var scheme = testSheetScheme.createBasicScheme(sheet);
          // console.log({file: obj , scheme: scheme});
          resolve({file: obj , scheme: scheme});
          // return/call generator with {obj: sheet, scheme: scheme}
        }
      });
    } catch (e) {
      //can be changed
      console.error(e);
      reject(e);
    };
  });
};

module.exports = xlsxStream;
