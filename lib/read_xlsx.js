var fs = require('fs');
var path = require('path');

var xlsx = require('xlsx');
var fsReaddir = require('fs-readdir');

var testSheetScheme = require('./test_sheet_scheme');

var stream = require('stream');
var util = require('util');

util.inherits(XLSXStream, stream.Readable);

function XLSXStream(dirPath, options) {
  stream.Readable.call(this, options);
  this.dirPath = dirPath;
}

XLSXStream.prototype._read = function(size) {
  getFiles(this.dirPath).then(
    function(data){
      // console.log(data);
      makeOutput(data, this);
      // this.push(null)
    },
    function(err){
      console.error(err);
      this.push(null);
    }
  );
};

function getFiles(dirPath) {
  return new Promise(function(resolve, reject) {
    var dirStream = fsReaddir(dirPath);

    dirStream.on('finish', function(obj) {
      resolve(obj);
    });

    dirStream.on('error', function(obj) {
      reject(obj);
    });
  });
};

function makeOutput(files, self) {
  for (var file of files) {
    if (path.extname(file) === '.xlsx') {
      var sheet = xlsx.readFile(file);
      var scheme = testSheetScheme.createBasicScheme(sheet);
      var address = file;
      console.log(address);
      self.push({ address: address, scheme: scheme });
    }
  };

  self.push(null);
}

// function reader(dirPath) {
//     try {
//       var dirStream = fsReaddir(dirPath);
//
//       dirStream.on('error', function(obj) {
//         console.log("dirPath: "+dirPath);
//         reject(obj);
//       });
//
//       dirStream.on('folder', function(obj) {
//         // console.log('shit should be here' + dirPath);
//         resolve(reader(obj));
//       });
//
//       dirStream.on('file', function(obj) {
//         if (path.extname(obj) == '.xlsx'){
//           var sheet = xlsx.readFile(obj);
//           var scheme = testSheetScheme.createBasicScheme(sheet);
//           // console.log({file: obj , scheme: scheme});
//           resolve({file: obj , scheme: scheme});
//           // return/call generator with {obj: sheet, scheme: scheme}
//         }
//       });
//     } catch (e) {
//       //can be changed
//       console.error(e);
//       reject(e);
//     };
//   };
// };

module.exports = XLSXStream;
